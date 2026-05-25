import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { TEAM, TIMELINE } from '../lib/data';
import './About.css';

export default function About() {
  const { ref: r1, visible: v1 } = useReveal();
  const { ref: r2, visible: v2 } = useReveal();
  const { ref: r3, visible: v3 } = useReveal();
  const { ref: r4, visible: v4 } = useReveal();

  return (
    <main className="page">

      <div className="page-hero">
        <div className="container">
          <div className="tag">Who We Are</div>
          <h1 className="display">A Legacy of<br/><em>Science</em> & Care</h1>
          <p className="lead">Established in 2019 and headquartered in Bangalore, ILKKA Healthcare Private Limited is a trusted pharmaceutical partner focused on affordable Gynaecology and Infertility solutions across India.</p>
        </div>
      </div>

      {/* MISSION */}
      <section className="section">
        <div className="container">
          <div className="about-mission-grid">
            <div ref={r1} className={`reveal ${v1 ? 'visible' : ''}`}>
              <div className="tag">Mission & Vision</div>
              <h2 className="display" style={{ fontSize: 'clamp(2rem,3.5vw,3.2rem)' }}>Guided by Purpose.<br/><em>Driven by Science.</em></h2>
              <p className="lead" style={{ marginBottom: '24px' }}>
                <strong>Mission:</strong> To provide safe, reliable, and affordable medicines; advance healthcare through innovation and research; uphold the highest ethical and quality standards; and build long-term relationships with healthcare professionals and partners.
              </p>
              <p className="lead">
                <strong>Vision:</strong> To be a trusted leader in the pharmaceutical industry by delivering innovative and effective healthcare solutions that improve lives.
              </p>
            </div>
            <div className="mission-visual reveal d2" ref={r1} style={{ opacity: v1 ? 1 : 0, transform: v1 ? 'none' : 'translateY(38px)', transition: 'all 0.85s 0.2s var(--spring)' }}>
              <div className="mission-orbit">
                <div className="orbit-ring orbit-1" />
                <div className="orbit-ring orbit-2" />
                <div className="orbit-ring orbit-3" />
                <div className="orbit-center">
                  <span>IH</span>
                </div>
                <div className="orbit-dot dot-1" />
                <div className="orbit-dot dot-2" />
                <div className="orbit-dot dot-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* TIMELINE */}
      <section className="section" style={{ background: 'var(--off)' }}>
        <div className="container">
          <div ref={r2} className={`reveal ${v2 ? 'visible' : ''}`}>
            <div className="tag">Our Journey</div>
            <h2 className="display">Milestones That<br/><em>Shaped</em> Us</h2>
          </div>
          <div className="timeline">
            {TIMELINE.map((item, i) => (
              <div key={item.year} className={`timeline-item reveal d${(i % 4) + 1} ${v2 ? 'visible' : ''}`}>
                <div className="tl-year">{item.year}</div>
                <div className="tl-dot" />
                <div className="tl-content">
                  <div className="tl-title">{item.title}</div>
                  <p className="tl-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section">
        <div className="container">
          <div ref={r3} className={`reveal ${v3 ? 'visible' : ''}`}>
            <div className="tag">Accreditations</div>
            <h2 className="display">Certified. Trusted.<br/><em>Recognised.</em></h2>
          </div>
          <div className="cert-grid">
            {[['WHO-GMP','Good Manufacturing Practice aligned operations'],['ISO Compliant','Quality management & regulatory compliance'],['Integrity','Honest, transparent business conduct'],['Innovation','Advanced, effective formulations'],['Quality','Excellence in every product'],['Customer Focus','Patients and partners first']].map(([code, desc]) => (
              <div key={code} className={`cert-card reveal ${v3 ? 'visible' : ''}`}>
                <div className="cert-code">{code}</div>
                <div className="cert-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section" style={{ background: 'var(--off)' }}>
        <div className="container">
          <div ref={r4} className={`reveal ${v4 ? 'visible' : ''}`}>
            <div className="tag">Leadership</div>
            <h2 className="display">The Minds Behind<br/>the <em>Mission</em></h2>
          </div>
          <div className="team-grid">
            {TEAM.map((m, i) => (
              <div key={m.name} className={`team-card reveal d${(i % 4) + 1} ${v4 ? 'visible' : ''}`}>
                <div className="team-avatar" style={{ background: m.color }}>
                  <span>{m.initial}</span>
                </div>
                <div className="team-info">
                  <div className="team-name">{m.name}</div>
                  <div className="team-role">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-band">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="tag tag-light" style={{ justifyContent: 'center' }}>Join Our Mission</div>
          <h2 className="display display-light">Want to Build the Future<br/>of <em>Healthcare</em> With Us?</h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '36px', flexWrap: 'wrap' }}>
            <Link to="/careers" className="btn btn-primary"><span>View Open Roles</span></Link>
            <Link to="/contact" className="btn btn-light"><span>Get In Touch</span></Link>
          </div>
        </div>
      </section>

    </main>
  );
}