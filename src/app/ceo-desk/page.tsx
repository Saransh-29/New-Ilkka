'use client';

import Link from 'next/link';
import { useReveal } from '../../hooks/useReveal';
import '../../styles/CeoDesk.css';

const PILLARS = [
  { code: 'Innovation', desc: 'Advancing healthcare through research-driven, effective formulations.' },
  { code: 'Quality', desc: 'Stringent systems and manufacturing partnerships that meet global standards.' },
  { code: 'Integrity', desc: 'Trust, transparency, and ethics guiding every decision we make.' },
  { code: 'Growth', desc: 'Expanding our portfolio and presence across India and international markets.' },
];

export default function CeoDesk() {
  const { ref: r1, visible: v1 } = useReveal();
  const { ref: r2, visible: v2 } = useReveal();
  const { ref: r3, visible: v3 } = useReveal();
  const { ref: r4, visible: v4 } = useReveal();

  return (
    <main className="page">

      <div className="page-hero">
        <div className="container">
          <div className="tag">From The Desk</div>
          <h1 className="display">A Message<br/>from Our <em>CEO</em></h1>
          <p className="lead">A reflection on purpose, progress, and the people who make ILKKA Healthcare's mission possible.</p>
        </div>
      </div>

      {/* LETTER */}
      <section className="section">
        <div className="container">
          <div className="ceo-letter-grid">

            <div ref={r1} className={`ceo-portrait-col reveal ${v1 ? 'visible' : ''}`}>
              <div className="ceo-portrait">
                <div className="ceo-portrait-glow" />
                <span className="ceo-mark">IH</span>
              </div>
              <div className="ceo-sig-block">
                <div className="ceo-sig-line" />
                <div className="ceo-sig-name">Founder &amp; CEO</div>
                <div className="ceo-sig-role">ILKKA Healthcare Private Limited</div>
              </div>
            </div>

            <div ref={r2} className={`ceo-letter-col reveal d2 ${v2 ? 'visible' : ''}`}>
              <p className="ceo-dropcap">
                Welcome to ILKKA Healthcare Private Limited. At ILKKA Healthcare, our purpose goes beyond manufacturing medicines &mdash; we are committed to improving lives through innovation, quality, and unwavering dedication to healthcare. Every step we take is guided by a single vision: to make trusted, affordable, and high&#8209;quality pharmaceutical products accessible to patients and healthcare professionals.
              </p>
              <p>
                The pharmaceutical industry is constantly evolving, and with it comes the responsibility to innovate while maintaining the highest standards of quality, compliance, and ethics. At ILKKA Healthcare, we embrace this responsibility with passion. Our robust manufacturing partnerships, stringent quality systems, and customer&#8209;centric approach enable us to deliver products that consistently meet global standards.
              </p>

              <blockquote className="ceo-pullquote">
                Sustainable success is built on trust, integrity, transparency, and the relentless pursuit of excellence.
              </blockquote>

              <p>
                Our growth is driven by a culture of excellence, continuous learning, and strong relationships with our healthcare professionals, distribution partners, and employees. We believe that sustainable success is built on trust, integrity, transparency, and the relentless pursuit of excellence.
              </p>
              <p>
                As we look toward the future, we are focused on expanding our product portfolio, strengthening our presence across India and international markets, and investing in innovation that creates long&#8209;term value for patients and stakeholders alike. Our ambition is not only to build a successful pharmaceutical company but also to establish ILKKA Healthcare as a trusted global healthcare brand known for its quality, reliability, and ethical practices.
              </p>
              <p>
                I sincerely thank our doctors, pharmacists, business partners, distributors, employees, investors, and customers for their continued confidence and support. Your trust motivates us to set higher benchmarks and move forward with greater determination every day.
              </p>
              <p>
                Together, we will continue to transform healthcare, create lasting value, and build a healthier future for generations to come.
              </p>
            </div>

          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PILLARS */}
      <section className="section" style={{ background: 'var(--off)' }}>
        <div className="container">
          <div ref={r3} className={`reveal ${v3 ? 'visible' : ''}`}>
            <div className="tag">What Guides Us</div>
            <h2 className="display">The Values Behind<br/>Every <em>Decision</em></h2>
          </div>
          <div className="cert-grid">
            {PILLARS.map((p, i) => (
              <div key={p.code} className={`cert-card reveal d${i + 1} ${v3 ? 'visible' : ''}`}>
                <div className="cert-code">{p.code}</div>
                <div className="cert-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING QUOTE */}
      <section className="dark-band">
        <div ref={r4} className={`container ceo-closing reveal ${v4 ? 'visible' : ''}`} style={{ textAlign: 'center' }}>
          <div className="ceo-quote-mark">&ldquo;</div>
          <h2 className="display display-light ceo-closing-quote">
            Excellence in Healthcare.<br/>
            Integrity in Every Step.<br/>
            <em>Innovation for Every Life.</em>
          </h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap' }}>
            <Link href="/about" className="btn btn-primary"><span>Discover Our Story</span></Link>
            <Link href="/contact" className="btn btn-light"><span>Get In Touch</span></Link>
          </div>
        </div>
      </section>

    </main>
  );
}
