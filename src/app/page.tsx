'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import MolecularScene from '../components/three/MolecularScene';
import { useReveal } from '../hooks/useReveal';
import { BLOGS, COMPANY, PORTFOLIO_AREAS, PRODUCTS } from '../lib/data';
import '../styles/Home.css';

function StatCard({ val, sup, label, delay }: { val: string; sup?: string; label: string; delay: string }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`stat-card reveal ${delay} ${visible ? 'visible' : ''}`}>
      <div className="stat-num">{val}{sup && <sup>{sup}</sup>}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { ref: s1, visible: v1 } = useReveal();
  const { ref: s2, visible: v2 } = useReveal();
  const { ref: s3, visible: v3 } = useReveal();
  const { ref: s4, visible: v4 } = useReveal();
  const { ref: s5, visible: v5 } = useReveal();

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onScroll = () => {
      const y = window.scrollY;
      hero.style.transform = `translateY(${y * 0.28}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const featured = [PRODUCTS.find((p) => p.id === 'foll9')!, PRODUCTS.find((p) => p.id === 'crepiter')!, PRODUCTS.find((p) => p.id === 'mayonika')!];
  const featuredBlogs = BLOGS.slice(0, 3);

  return (
    <main className="home-page">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-bg-inner" ref={heroRef}>
            <MolecularScene />
          </div>
        </div>
        <div className="hero-overlay" />
        <div className="hero-content container">
          <div className="hero-left">
            <div className="hero-tag tag">Established {COMPANY.founded} · {COMPANY.headquarters}</div>
            <h1 className="hero-title">
              Innovating for a<br />Healthier <em>Tomorrow</em>
            </h1>
            <p className="hero-sub lead">ILKKA Healthcare Private Limited delivers high-quality, affordable medicines in Gynaecology and Infertility — guided by integrity, innovation, and ethical practice.</p>
            <div className="hero-btns">
              <Link href="/products" className="btn btn-primary"><span>Explore Products</span></Link>
              <Link href="/research" className="btn btn-outline"><span>Our Research →</span></Link>
            </div>
            <div className="hero-trust">
              {['WHO-GMP Practices', 'ISO Compliant', 'Gynaecology', 'Infertility'].map(t => (
                <div key={t} className="trust-badge">{t}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="section-sm stats-section" style={{ background: 'var(--w)' }}>
        <div className="container">
          <div className="grid-4 stats-grid">
            <StatCard val="7" sup="+" label="Years of Excellence" delay="d1" />
            <StatCard val="2" label="Core Specializations" delay="d2" />
            <StatCard val="4" label="Dosage Forms" delay="d3" />
            <StatCard val="India" label="Domestic Market" delay="d4" />
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── PRODUCTS ── */}
      <section className="section">
        <div className="container">
          <div ref={s1} className={`section-head reveal ${v1 ? 'visible' : ''}`}>
            <div className="tag">Our Portfolio</div>
            <h2 className="display">Gynaecology &<br /><em>Infertility</em></h2>
            <p className="lead">
              We specialise in tablets, capsules, syrups, and injectables across two focused therapeutic areas —
              meeting patient needs and improving treatment outcomes nationwide.
            </p>
          </div>

          <div className={`portfolio-areas-grid reveal d1 ${v1 ? 'visible' : ''}`} style={{ marginTop: '48px' }}>
            {PORTFOLIO_AREAS.map((area) => (
              <div key={area.id} className="card portfolio-area-card">
                <div className="portfolio-area-accent" style={{ background: area.color }} />
                <div className="portfolio-area-body">
                  <h3 className="portfolio-area-title">{area.title}</h3>
                  <p className="portfolio-area-desc">{area.description}</p>
                  <div className="portfolio-forms">
                    {area.forms.map((f) => (
                      <span key={f} className="portfolio-form-tag">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div ref={s2} className={`portfolio-featured-head reveal d2 ${v2 ? 'visible' : ''}`} style={{ marginTop: '56px' }}>
            <h3 className="portfolio-featured-title">Featured Formulations</h3>
            <p className="lead" style={{ margin: '8px 0 0', maxWidth: '520px' }}>
              A selection from our growing domestic portfolio — safe, reliable, and affordable.
            </p>
          </div>
          <div className="grid-3" style={{ marginTop: '32px' }}>
            {featured.map((p, i) => (
              <div key={p.id} className={`card product-card reveal d${i + 1} ${v2 ? 'visible' : ''}`}>
                <div className="product-card-img" style={{ background: p.color }}>
                  {p.image ? (
                    <img src={p.image} alt={p.name} className="product-card-photo" />
                  ) : (
                    <div className="product-icon-wrap">
                      <div className="product-circle" />
                      <div className="product-dot" />
                    </div>
                  )}
                </div>
                <div className="product-card-body">
                  <span className="product-tag">{p.tag}{p.form ? ` · ${p.form}` : ''}</span>
                  {p.nameImage ? (
                    <img src={p.nameImage} alt={p.name} className="product-name-img" />
                  ) : (
                    <div className="product-name">{p.name}</div>
                  )}
                  <p className="product-desc">{p.description}</p>
                  <Link href="/products" className="product-link">View Details →</Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/products" className="btn btn-outline"><span>View Full Catalog</span></Link>
          </div>
        </div>
      </section>

      {/* ── RESEARCH BAND ── */}
      <section className="dark-band">
        <div className="container">
          <div className="research-band-grid">
            <div ref={s3} className={`reveal ${v3 ? 'visible' : ''}`}>
              <div className="tag tag-light">Research & Innovation</div>
              <h2 className="display display-light">Where Science<br />Meets <em>Compassion</em></h2>
              <p className="lead lead-light" style={{ marginBottom: '36px' }}>Our Associate R&D division continuously improves gynaecology and infertility formulations — keeping ILKKA at the forefront of practical, patient-centred innovation.</p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link href="/research" className="btn btn-light"><span>Explore Research →</span></Link>
                <Link href="/about" className="btn btn-light"><span>About Us</span></Link>
              </div>
            </div>
            <div className="research-band-stats">
              {[['2', 'Core Therapeutic Areas'], ['4', 'Dosage Forms'], ['WHO', 'GMP Aligned'], ['CSR', 'Community Programs']].map(([v, l]) => (
                <div key={l} className="rb-stat">
                  <div className="rb-stat-val">{v}</div>
                  <div className="rb-stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="section" style={{ background: 'var(--off)' }}>
        <div className="container">
          <div ref={s4} className={`section-head reveal ${v4 ? 'visible' : ''}`}>
            <div className="tag">Latest Insights</div>
            <h2 className="display">From Our Lab<br />to Your <em>World</em></h2>
          </div>
          <div className="grid-3" style={{ marginTop: '52px' }}>
            {featuredBlogs.map((b, i) => (
              <div key={b.id} className={`card blog-card reveal d${i + 1} ${v4 ? 'visible' : ''}`}>
                <div className="blog-img" style={{ background: b.color }} />
                <div className="blog-body">
                  <div className="blog-meta"><span className="blog-cat">{b.category}</span><span className="blog-date">{b.date}</span></div>
                  <div className="blog-title">{b.title}</div>
                  <p className="blog-excerpt">{b.excerpt}</p>
                  <Link href="/blog" className="blog-read">Read Article →</Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/blog" className="btn btn-outline"><span>All Insights</span></Link>
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="section-sm" style={{ background: 'var(--w)', borderTop: '1px solid var(--g200)' }}>
        <div className="container">
          <div ref={s5} className={`partners-row reveal ${v5 ? 'visible' : ''}`}>
            <span className="partners-label">Our core values</span>
            {['Integrity', 'Quality', 'Innovation', 'Customer Focus', 'Commitment', 'Ethical Practice'].map(p => (
              <div key={p} className="partner-name">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="home-cta">
        <div className="container">
          <h2 className="display display-light" style={{ textAlign: 'center' }}>Ready to <em>Partner</em><br />With Us?</h2>
          <p className="lead lead-light" style={{ textAlign: 'center', margin: '0 auto 40px' }}>Connect with our team to explore distribution partnerships, research collaborations, or product enquiries.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary"><span>Get In Touch</span></Link>
            <Link href="/products" className="btn btn-light"><span>Browse Products</span></Link>
          </div>
        </div>
      </section>

    </main>
  );
}
