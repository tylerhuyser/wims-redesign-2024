// app/_components/_shared/_lazy/LazySection.tsx
"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import lazyStyles from "./LazySection.module.css"

interface LazySectionProps {
  render: (visible: boolean) => ReactNode;
  rootMargin?: string;
}

export default function LazySection({ render, rootMargin = "0px" }: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [visible, rootMargin]);

  return <div ref={ref} className={lazyStyles.lazyWrapper}>{render(visible)}</div>;
}
