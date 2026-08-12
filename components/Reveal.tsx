"use client";

import { useEffect, useRef, ReactNode } from "react";

export default function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("animate");
    const children = Array.from(el.children) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            children.forEach((child, i) => {
              setTimeout(() => child.classList.add("in"), i * 80);
            });
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -100px 0px" }
    );
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("in");
      children.forEach((child) => child.classList.add("in"));
    } else {
      io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}
