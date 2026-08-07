'use client';

import { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0, raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dot.current) {
        dot.current.style.left = mx + 'px';
        dot.current.style.top  = my + 'px';
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      if (ring.current) {
        ring.current.style.left = rx + 'px';
        ring.current.style.top  = ry + 'px';
      }
      raf = requestAnimationFrame(tick);
    };

    const onEnter = () => { dot.current?.classList.add('h'); ring.current?.classList.add('h'); };
    const onLeave = () => { dot.current?.classList.remove('h'); ring.current?.classList.remove('h'); };

    document.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);

    const bind = () => {
      document.querySelectorAll('a,button').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    bind();
    const mo = new MutationObserver(bind);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
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