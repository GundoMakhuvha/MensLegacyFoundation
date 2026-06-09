import { useEffect } from "react";

/**
 * Adds `is-visible` class to elements with `.reveal` once they enter the viewport.
 * Pass a `key` (e.g. route pathname) to re-scan when content changes.
 */
export const useReveal = (key?: string) => {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, [key]);
};
