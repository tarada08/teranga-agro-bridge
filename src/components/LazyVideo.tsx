import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

type Source = { src: string; type: string };

export function LazyVideo({
  sources,
  poster,
  width,
  height,
  label = "Lire la vidéo",
  className = "",
}: {
  sources: Source[];
  poster: string;
  width: number;
  height: number;
  label?: string;
  className?: string;
}) {
  const [active, setActive] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { setInView(true); io.disconnect(); }
      }),
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-black ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {!active ? (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={label}
          className="group absolute inset-0 h-full w-full"
        >
          <img
            src={poster}
            alt=""
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elegant transition-transform group-hover:scale-110">
            <Play className="h-7 w-7 ml-1" aria-hidden="true" fill="currentColor" />
          </span>
        </button>
      ) : (
        <video
          controls
          autoPlay
          playsInline
          preload="metadata"
          poster={poster}
          width={width}
          height={height}
          className="absolute inset-0 h-full w-full object-cover"
        >
          {inView && sources.map((s) => <source key={s.src} src={s.src} type={s.type} />)}
        </video>
      )}
    </div>
  );
}
