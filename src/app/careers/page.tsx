'use client';

import { useReveal } from '../../hooks/useReveal';
import { JOBS } from '../../lib/data';

export default function Careers() {
  const { ref: r1, visible: v1 } = useReveal();

  return (
    <main className="page">
      <div className="page-hero">
        <div className="container">
          <div className="tag">Careers</div>
          <h1 className="display">
            Build the Future of
            <br />
            <em>Healthcare</em>
          </h1>
          <p className="lead">Join 2,400+ professionals advancing science, quality, and access to medicine worldwide.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div ref={r1} className={`reveal ${v1 ? 'visible' : ''}`}>
            <div className="tag">Open Roles</div>
            <h2 className="display">
              Current
              <br />
              <em>Opportunities</em>
            </h2>
          </div>
          <div className="grid-2" style={{ marginTop: '52px' }}>
            {JOBS.map((job, i) => (
              <div key={job.id} className={`card reveal d${(i % 2) + 1} ${v1 ? 'visible' : ''}`} style={{ padding: '28px' }}>
                <div className="tag">{job.department}</div>
                <h3 style={{ fontFamily: 'var(--fd)', fontSize: '1.4rem', margin: '12px 0 8px' }}>{job.title}</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--g600)' }}>
                  {job.location} · {job.type}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
