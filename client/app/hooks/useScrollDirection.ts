import { useState, useEffect } from 'react';

const SCROLL_UP = 'up' as const;
const SCROLL_DOWN = 'down' as const;

type ScrollDirection = typeof SCROLL_UP | typeof SCROLL_DOWN;

interface UseScrollDirectionProps {
  initialDirection?: ScrollDirection;
  thresholdPixels?: number;
  off?: boolean;
}

const useScrollDirection = ({
  initialDirection = SCROLL_DOWN, // Default value
  thresholdPixels = 0,
  off = false,
}: UseScrollDirectionProps = {}): ScrollDirection => {
  const [scrollDir, setScrollDir] = useState<ScrollDirection>(initialDirection);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < thresholdPixels) {
        ticking = false;
        return;
      }

      setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    if (!off) {
      window.addEventListener('scroll', onScroll);
    } else {
      setScrollDir(initialDirection);
    }

    return () => window.removeEventListener('scroll', onScroll);
  }, [initialDirection, thresholdPixels, off]);

  return scrollDir;
};

export default useScrollDirection;
