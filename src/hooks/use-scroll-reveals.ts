import { useEffect, type RefObject } from "react";
import { isRevealVisible, revealDelay, REVEAL_THRESHOLD } from "@/lib/scroll-reveal";

/** Progressive enhancement: SSR is visible; only a working client arms reveals. */
export function useScrollReveals(root: RefObject<HTMLElement | null>, visit: string) {
  useEffect(() => {
    const scope = root.current;
    if (!scope) return;
    const elements = Array.from(scope.querySelectorAll<HTMLElement>("[data-reveal]"));
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || typeof window.IntersectionObserver !== "function") return;

    const pending = new Set(elements);
    let observer: IntersectionObserver | undefined;
    let frame = 0;
    let nextFrame = 0;
    let watchdog = 0;
    const reveal = (element: HTMLElement) => {
      element.dataset.revealState = "visible";
      pending.delete(element);
      observer?.unobserve(element);
    };
    const finish = () => {
      elements.forEach(reveal);
      observer?.disconnect();
    };
    const checkVisible = () => {
      pending.forEach((element) => {
        const { top, bottom } = element.getBoundingClientRect();
        if (element.dataset.reveal === "hero" || isRevealVisible(top, bottom, window.innerHeight)) reveal(element);
      });
    };
    // Also checks after scroll settles: a silent/broken observer cannot strand content.
    const scheduleSafetyCheck = () => {
      window.clearTimeout(watchdog);
      watchdog = window.setTimeout(checkVisible, 120);
    };
    const onMotionChange = () => { if (motion.matches) finish(); };
    try {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= REVEAL_THRESHOLD) reveal(entry.target as HTMLElement);
        });
      }, { threshold: REVEAL_THRESHOLD });
      elements.forEach((element) => {
        element.style.setProperty("--reveal-delay", `${revealDelay(Number(element.dataset.revealIndex) || 0)}ms`);
        element.dataset.revealState = "pending";
        observer?.observe(element);
      });
      // Two frames commit the starting style, then reveal heroes/currently visible groups promptly.
      frame = requestAnimationFrame(() => { nextFrame = requestAnimationFrame(checkVisible); });
      window.addEventListener("scroll", scheduleSafetyCheck, { passive: true });
      window.addEventListener("resize", scheduleSafetyCheck, { passive: true });
      motion.addEventListener("change", onMotionChange);
      watchdog = window.setTimeout(checkVisible, 1000);
    } catch {
      finish();
    }
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(nextFrame);
      window.clearTimeout(watchdog);
      observer?.disconnect();
      window.removeEventListener("scroll", scheduleSafetyCheck);
      window.removeEventListener("resize", scheduleSafetyCheck);
      motion.removeEventListener("change", onMotionChange);
      elements.forEach((element) => {
        delete element.dataset.revealState;
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, [root, visit]);
}