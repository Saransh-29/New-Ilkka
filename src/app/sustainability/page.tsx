'use client';

import { useReveal } from '../../hooks/useReveal';

export default function Sustainability() {
  const { ref: r1, visible: v1 } = useReveal();

  return (
    <main className="page">
      <div className="page-hero">
        <div className="container">
          <div className="tag">Sustainability</div>
          <h1 className="display">
            Healing People,
            <br />
            <em>Protecting Planet</em>
          </h1>
          <p className="lead">Through healthcare awareness programs, women&apos;s health initiatives, and community wellness activities, we contribute to a healthier nation.</p>
        </div>
      </div>

      <section className="section">
        <div className="container" ref={r1}>
          <div className={`reveal ${v1 ? 'visible' : ''}`}>
            <div className="tag">Our Commitments</div>
            <h2 className="display">
              Responsible by
              <br />
              <em>Design</em>
            </h2>
          </div>
          <div className="grid-3" style={{ marginTop: '52px' }}>
            {[
              ['Healthcare Awareness', 'Community programmes that promote preventive care and informed health decisions.'],
              ["Women's Health", 'Initiatives focused on gynaecological wellness and access to trustworthy medicines.'],
              ['Community Wellness', 'CSR efforts that reflect our commitment to giving back to society.'],
            ].map(([title, body], i) => (
              <div key={title} className={`card reveal d${i + 1} ${v1 ? 'visible' : ''}`} style={{ padding: '28px' }}>
                <h3 style={{ fontFamily: 'var(--fd)', fontSize: '1.5rem', marginBottom: 12 }}>{title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--g600)', lineHeight: 1.7 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
