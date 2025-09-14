import { useEffect, useRef } from 'react';

export const useCountUp = (
  end: number,
  duration: number = 2000,
  start: number = 0
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const startTime = performance.now();
    const range = end - start;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const current = Math.floor(start + (range * easeOutExpo));
      element.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    // Use Intersection Observer to trigger animation when element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(animate);
            observer.disconnect(); // Only animate once
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration, start]);

  return elementRef;
};