import { useEffect, useRef, useState } from 'react';

export function useReveal(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      setVisible(true);
      return;
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: '80px 0px' }
    );

    obs.observe(el);

    // Fallback timer: guarantees content is never left hidden if IntersectionObserver delays
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => {
      obs.disconnect();
      clearTimeout(timer);
    };
  }, [threshold]);

  return { ref, visible };
}

export function useNavScroll() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return scrolled;
}