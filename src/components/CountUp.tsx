import { useEffect, useRef, useState } from "react";

function parseValue(raw: string): { num: number | null; prefix: string; suffix: string; sep: string } {
  const m = raw.match(/^(\D*)([\d\s.,]+)(.*)$/);
  if (!m) return { num: null, prefix: "", suffix: "", sep: " " };
  const prefix = m[1] ?? "";
  const rawNum = m[2] ?? "";
  const suffix = m[3] ?? "";
  const sep = rawNum.includes(",") ? "," : rawNum.includes(" ") ? " " : "";
  const n = parseInt(rawNum.replace(/[\s.,]/g, ""), 10);
  if (Number.isNaN(n)) return { num: null, prefix, suffix, sep: " " };
  return { num: n, prefix, suffix, sep: sep || " " };
}

function format(n: number, sep: string): string {
  return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}

export function CountUp({ value, duration = 1600, className }: { value: string; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<string>(() => {
    const { num, prefix, suffix, sep } = parseValue(value);
    return num === null ? value : `${prefix}0${suffix.length ? "" : ""}${format(0, sep) === "0" ? "" : ""}${suffix}`;
  });
  const started = useRef(false);

  useEffect(() => {
    const { num, prefix, suffix, sep } = parseValue(value);
    if (num === null) { setDisplay(value); return; }

    const reduced = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setDisplay(`${prefix}${format(num, sep)}${suffix}`); return; }

    setDisplay(`${prefix}${format(0, sep)}${suffix}`);

    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(`${prefix}${format(num * eased, sep)}${suffix}`);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { run(); io.disconnect(); } }),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return <span ref={ref} className={className}>{display}</span>;
}
