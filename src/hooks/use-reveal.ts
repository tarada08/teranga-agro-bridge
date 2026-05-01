import { useEffect, useRef } from "react";

/**
 * Adds the "is-visible" class on a container when it enters the viewport,
 * which triggers CSS transitions on any descendant with the ".reveal" class.
 * Uses IntersectionObserver and unobserves after first trigger.
 */
export function useReveal<T extends HTMLElement = HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Also mark every .reveal descendant in case the container itself isn't .reveal
            entry.target.querySelectorAll(".reveal").forEach((n) => n.classList.add("is-visible"));
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [options]);

  return ref;
}
