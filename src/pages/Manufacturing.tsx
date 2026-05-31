import { useReveal } from '../hooks/useReveal';
import './Manufacturing.css';

export default function Manufacturing() {
  const { ref: r1, visible: v1 } = useReveal();
  const { ref: r2, visible: v2 } = useReveal();

  const units = [
    { id: 'I', name: 'Tablets & Capsules', loc: 'Delhi', cap: 'Oral solid dosage forms', cert: 'WHO-GMP, ISO compliant', desc: 'State-of-the-art solid dosage manufacturing with high-speed compression, coating, and encapsulation lines — built for precision at every stage.' },
    { id: 'II', name: 'Quality Assurance', loc: 'Delhi', cap: 'Batch release & documentation', cert: 'Safety, efficacy, reliability', desc: 'End-to-end quality oversight from raw material sampling through finished goods release — every batch cleared to the highest regulatory standards.' },
  ];

  return (
    <main className="page">
      <div className="page-hero">
        <div className="container">
          <div className="tag">Quality & Manufacturing</div>
          <h1 className="display">Built for<br /><em>Precision</em></h1>
          <p className="lead">Manufacturing operations adhere to stringent quality standards — every product meets benchmarks of safety, efficacy, and reliability before it reaches patients.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div ref={r1} className={`reveal ${v1 ? 'visible' : ''}`}>
            <div className="tag">Our Facilities</div>
            <h2 className="display">Two Units.<br /><em>One Standard.</em></h2>
          </div>
          <div className="mfg-units-grid">
            {units.map((u, i) => (
              <div key={u.id} className={`mfg-unit-card reveal d${i + 1} ${v1 ? 'visible' : ''}`}>
                <div className="mfg-unit-accent">
                  <div className="mfg-unit-id">Unit {u.id}</div>
                  <div className="mfg-unit-accent-name">{u.name}</div>
                  <div className="mfg-unit-cert">{u.cert}</div>
                </div>
                <div className="mfg-unit-body">
                  <div className="mfg-unit-loc">{u.loc}</div>
                  <div className="mfg-unit-cap">{u.cap}</div>
                  <p className="mfg-unit-desc">{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--off)', paddingTop: 0 }}>
        <div className="container">
          <div ref={r2} className={`reveal ${v2 ? 'visible' : ''}`}>
            <div className="tag">Quality Assurance</div>
            <h2 className="display">Zero Compromise<br />on <em>Quality</em></h2>
          </div>
          <div className="grid-4" style={{ marginTop: '52px' }}>
            {[['99.8%', 'Quality Pass Rate', 'd1'], ['Zero', 'Major Regulatory Findings', 'd2'], ['30K+', 'Units Produced Annually', 'd3'], ['6σ', 'Process Capability', 'd4']].map(([v, l, d]) => (
              <div key={l} className={`stat-card reveal ${d} ${v2 ? 'visible' : ''}`}>
                <div className="stat-num">{v}</div>
                <div className="stat-label">{l}</div>
              </div>
            ))}
          </div>

          <div className="qms-grid" style={{ marginTop: '60px' }}>
            {[['Real-Time Monitoring', 'Automated process analytical technology (PAT) provides continuous in-line quality monitoring across all production lines.'], ['Environmental Controls', 'Class 100 / ISO 5 cleanrooms with HVAC systems maintaining temperature, humidity, and particulate standards 24/7.'], ['Traceability', 'Full batch genealogy and electronic batch recording (EBR) for end-to-end product traceability from raw material to finished goods.'], ['Stability Testing', 'ICH-compliant stability chambers monitoring product integrity across accelerated, intermediate, and long-term conditions.'],].map(([t, b]) => (
              <div key={t} className={`qms-card reveal ${v2 ? 'visible' : ''}`}>
                <div className="qms-icon">✦</div>
                <h4>{t}</h4>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}