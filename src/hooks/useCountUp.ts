import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

export function useCountUp(target: number, duration: number = 2000) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reducedMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (reducedMotion) {
      setCount(target);
      return;
    }

    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target, duration, reducedMotion]);

  return { ref, count };
}
