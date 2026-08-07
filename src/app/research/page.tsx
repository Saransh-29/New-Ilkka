'use client';

import Link from 'next/link';
import { useReveal } from '../../hooks/useReveal';
import '../../styles/Research.css';

export default function Research() {
  const { ref: r1, visible: v1 } = useReveal();
  const { ref: r2, visible: v2 } = useReveal();
  const { ref: r3, visible: v3 } = useReveal();

  const pillars = [
    { n: '01', title: 'Formulation Improvement', body: 'Continuous enhancement of existing tablets, capsules, syrups, and injectables for better stability, tolerability, and patient outcomes.', dark: true },
    { n: '02', title: 'Gynaecology R&D', body: 'Developing innovative therapies and dosage forms that address women’s health needs with safety and affordability at the core.', dark: false },
    { n: '03', title: 'Infertility R&D', body: 'Advancing male & female fertility, ART support, and ovulation therapies through practical, evidence-led formulations.', dark: false },
    { n: '04', title: 'Quality & Compliance', body: 'Research aligned with WHO-GMP and ISO-compliant practices to ensure every product meets regulatory and clinical expectations.', dark: true },
  ];

  return (
    <main className="page">
      <div className="page-hero-dark">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag tag-light">Science & Innovation</div>
          <h1 className="display display-light">Research at the<br/><em>Frontier</em></h1>
          <p className="lead lead-light">Our Associate R&D division drives formulation innovation in Gynaecology and Infertility — improving therapies that reach patients across India.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div ref={r1} className={`reveal ${v1 ? 'visible' : ''}`}>
            <div className="tag">Our Focus Areas</div>
            <h2 className="display">Four Pillars of<br/><em>Innovation</em></h2>
          </div>
          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <div key={p.n} className={`pillar-card reveal d${i + 1} ${v1 ? 'visible' : ''} ${p.dark ? 'dark' : ''}`}>
                <div className="pillar-num">{p.n}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--off)', paddingTop: '0' }}>
        <div className="container">
          <div ref={r2} className={`reveal ${v2 ? 'visible' : ''}`}>
            <div className="tag">By the Numbers</div>
            <h2 className="display">The Scale of Our<br/><em>Ambition</em></h2>
          </div>
          <div className="grid-3" style={{ marginTop: '52px' }}>
            {[['2','Therapeutic Focus Areas','🔬'],['4','Dosage Form Categories','💊'],['WHO','GMP-Aligned Practices','✓'],['CSR','Health Awareness Programs','🤝'],['100%','Domestic Commitment','🇮🇳'],['∞','Continuous Improvement','↗']].map(([v,l,e], i) => (
              <div key={l} className={`research-stat-card reveal d${(i%3)+1} ${v2 ? 'visible' : ''}`}>
                <div className="rs-icon">{e}</div>
                <div className="rs-val">{v}</div>
                <div className="rs-label">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-band">
        <div className="container" ref={r3}>
          <div className={`reveal ${v3 ? 'visible' : ''}`} style={{ textAlign: 'center' }}>
            <div className="tag tag-light" style={{ justifyContent: 'center' }}>Collaborate</div>
            <h2 className="display display-light">Partner With Our<br/><em>Research Team</em></h2>
            <p className="lead lead-light" style={{ margin: '0 auto 36px', textAlign: 'center' }}>We actively collaborate with academic institutions, biotech companies, and healthcare organizations globally.</p>
            <Link href="/contact" className="btn btn-primary"><span>Start a Conversation</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
