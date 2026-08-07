'use client';

import { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = -100,
      my = -100,
      rx = -100,
      ry = -100,
      raf = 0;
    let initialized = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      if (!initialized) {
        initialized = true;
        rx = mx;
        ry = my;
        dot.current?.classList.add('visible');
        ring.current?.classList.add('visible');
      }

      if (dot.current) {
        dot.current.style.left = mx + 'px';
        dot.current.style.top = my + 'px';
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ring.current) {
        ring.current.style.left = rx + 'px';
        ring.current.style.top = ry + 'px';
      }
      raf = requestAnimationFrame(tick);
    };

    const onDocLeave = () => {
      dot.current?.classList.remove('visible');
      ring.current?.classList.remove('visible');
    };

    const onDocEnter = () => {
      if (initialized) {
        dot.current?.classList.add('visible');
        ring.current?.classList.add('visible');
      }
    };

    const onEnter = () => {
      dot.current?.classList.add('h');
      ring.current?.classList.add('h');
    };

    const onLeave = () => {
      dot.current?.classList.remove('h');
      ring.current?.classList.remove('h');
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onDocLeave);
    document.addEventListener('mouseenter', onDocEnter);
    raf = requestAnimationFrame(tick);

    const bind = () => {
      document
        .querySelectorAll('a, button, input, textarea, [role="button"]')
        .forEach((el) => {
          el.addEventListener('mouseenter', onEnter);
          el.addEventListener('mouseleave', onLeave);
        });
    };
    bind();

    const mo = new MutationObserver(bind);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onDocLeave);
      document.removeEventListener('mouseenter', onDocEnter);
      cancelAnimationFrame(raf);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div className="c-dot" ref={dot} />
      <div className="c-ring" ref={ring} />
    </>
  );
}