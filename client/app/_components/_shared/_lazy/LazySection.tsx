// app/_components/_shared/_lazy/LazySection.tsx
"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import lazyStyles from "./LazySection.module.css"

interface LazySectionProps {
  /** Function that receives `visible` state and returns the content to render */
  render: (visible: boolean) => ReactNode;

  /** Optional: root margin for IntersectionObserver */
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
          observer.disconnect(); // Stop observing once visible
        }
      },
      { rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [visible, rootMargin]);

  return <div ref={ref} className={lazyStyles.lazyWrapper}>{render(visible)}</div>;
}
