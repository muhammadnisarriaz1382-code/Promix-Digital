import { useEffect, useRef, useState } from "react";
import { countUpProgress, formatCounter, splitCounter } from "@/lib/count-up";

const statistics = [
  { value: "120+", label: "Stores Launched" },
  { value: "$4M+", label: "Ad Spend Managed" },
  { value: "8x", label: "Avg. ROAS" },
  { value: "50+", label: "Happy Brands" },
];

export function HomeStatistics() {
  const section = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = section.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let observer: IntersectionObserver | undefined;
    const finish = () => {
      started.current = true;
      cancelAnimationFrame(frame);
      observer?.disconnect();
      setProgress(1);
    };
    const onMotionChange = () => { if (motion.matches) finish(); };
    motion.addEventListener("change", onMotionChange);
    if (motion.matches || started.current || !("IntersectionObserver" in window)) {
      finish();
    } else {
      observer = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting) || started.current) return;
        started.current = true;
        observer?.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const next = countUpProgress(now - start);
          setProgress(next);
          if (next < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      }, { threshold: 0.15 });
      observer.observe(element);
    }
    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      motion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <div ref={section} className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4" data-statistics>
      {statistics.map(({ value, label }) => {
        const parts = splitCounter(value);
        return (
          <div key={label} className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
            <div className="text-3xl font-bold text-primary md:text-4xl" aria-label={value}>
              <span aria-hidden="true" className="inline-flex" data-counter>
                <span>{parts.prefix}</span>
                <span className="relative inline-grid tabular-nums">
                  <span className="invisible">{parts.number}</span>
                  <span className="absolute right-0 top-0" data-counter-number>{formatCounter(value, progress)}</span>
                </span>
                <span>{parts.suffix}</span>
              </span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">{label}</div>
          </div>
        );
      })}
    </div>
  );
}