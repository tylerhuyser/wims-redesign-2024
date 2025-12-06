"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import lazyStyles from "./LazySection.module.css"

interface LazySectionProps {
  render: (visible: boolean) => ReactNode;
  rootMargin?: string;
  delay?: number;
}

export default function LazySection({
  render,
  rootMargin = "200px",
  delay
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || visible) return;

    if (delay) {
      const timer = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold: 0.01
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [visible, rootMargin, delay]);

  return(
    <div ref={ref} className={lazyStyles.lazyWrapper}>
      {render(visible)}
    </div>
  )
}
