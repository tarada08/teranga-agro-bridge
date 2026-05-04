import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

type Source = { src: string; type: string };

export function LazyVideo({
  sources,
  poster,
  width,
  height,
  label = "Lire la vidéo",
  posterAlt,
  className = "",
}: {
  sources: Source[];
  poster: string;
  width: number;
  height: number;
  label?: string;
  posterAlt?: string;
  className?: string;
}) {
  const [active, setActive] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = containerRef.current;
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

  // Move focus to the video element when activated so keyboard users land on the player controls
  useEffect(() => {
    if (active && videoRef.current) {
      videoRef.current.focus();
    }
  }, [active]);

  const handleActivate = () => setActive(true);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      handleActivate();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-black ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {!active ? (
        <button
          ref={buttonRef}
          type="button"
          onClick={handleActivate}
          onKeyDown={handleKeyDown}
          aria-label={label}
          aria-haspopup="dialog"
          className="group absolute inset-0 h-full w-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <img
            src={poster}
            alt={posterAlt ?? ""}
            role={posterAlt ? "img" : "presentation"}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span aria-hidden="true" className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10 group-focus-visible:bg-black/10" />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elegant transition-transform group-hover:scale-110 group-focus-visible:scale-110"
          >
            <Play className="h-7 w-7 ml-1" fill="currentColor" />
          </span>
        </button>
      ) : (
        <video
          ref={videoRef}
          controls
          autoPlay
          playsInline
          preload="metadata"
          poster={poster}
          width={width}
          height={height}
          tabIndex={0}
          aria-label={label}
          className="absolute inset-0 h-full w-full object-cover focus:outline-none focus-visible:ring-4 focus-visible:ring-gold"
        >
          {inView && sources.map((s) => <source key={s.src} src={s.src} type={s.type} />)}
        </video>
      )}
    </div>
  );
}
