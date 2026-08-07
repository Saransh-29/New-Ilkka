'use client';

import { useReveal } from '../../hooks/useReveal';
import { BLOGS } from '../../lib/data';

export default function Blog() {
  const { ref: r1, visible: v1 } = useReveal();

  return (
    <main className="page">
      <div className="page-hero-dark">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag tag-light">Insights</div>
          <h1 className="display display-light">
            Science, Policy &
            <br />
            <em>Innovation</em>
          </h1>
          <p className="lead lead-light">Perspectives from our researchers, clinicians, and sustainability leaders.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div ref={r1} className={`grid-3 reveal ${v1 ? 'visible' : ''}`}>
            {BLOGS.map((post, i) => (
              <div key={post.id} className={`card reveal d${(i % 3) + 1} ${v1 ? 'visible' : ''}`}>
                <div style={{ height: 120, background: post.color, borderRadius: 'var(--r-sm) var(--r-sm) 0 0' }} />
                <div style={{ padding: '24px' }}>
                  <div className="tag">{post.category}</div>
                  <h3 style={{ fontFamily: 'var(--fd)', fontSize: '1.35rem', margin: '10px 0' }}>{post.title}</h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--g600)', lineHeight: 1.65 }}>{post.excerpt}</p>
                  <div style={{ marginTop: 14, fontSize: '0.75rem', color: 'var(--g400)', fontFamily: 'var(--fu)' }}>{post.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
