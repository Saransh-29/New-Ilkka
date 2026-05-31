import { useReveal } from '../hooks/useReveal';
import { COMPANY } from '../lib/data';

export default function Contact() {
  const { ref: r1, visible: v1 } = useReveal();

  return (
    <main className="page">
      <div className="page-hero">
        <div className="container">
          <div className="tag">Contact</div>
          <h1 className="display">
            Let&apos;s Start a
            <br />
            <em>Conversation</em>
          </h1>
          <p className="lead">
            Product enquiries, distribution partnerships, and general questions — reach our Bangalore head office.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div ref={r1} className={`reveal ${v1 ? 'visible' : ''}`}>
            <div className="grid-2" style={{ gap: '40px' }}>
              <div className="card" style={{ padding: '32px' }}>
                <h3 style={{ fontFamily: 'var(--fd)', fontSize: '1.6rem', marginBottom: 16 }}>Head Office</h3>
                <p style={{ color: 'var(--g600)', lineHeight: 1.7 }}>
                  {COMPANY.name}
                  <br />
                  Jashoda Complex, Survey No. 130/2, Near McDonald&apos;s, Country Club,
                  <br />
                  Sathnur Village, Baglur Main Road,
                  <br />
                  Bangalore — 562149, Karnataka, India
                </p>
                <p style={{ marginTop: 20, color: 'var(--g600)' }}>
                  <strong>Phone:</strong>{' '}
                  <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>
                  <br />
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                  <br />
                  <strong>Website:</strong> {COMPANY.website}
                </p>
              </div>
              <form className="card" style={{ padding: '32px' }} onSubmit={(e) => e.preventDefault()}>
                <label style={{ display: 'block', marginBottom: 16 }}>
                  <span style={{ fontFamily: 'var(--fu)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>NAME</span>
                  <input type="text" required style={{ width: '100%', marginTop: 8, padding: '12px 14px', borderRadius: 8, border: '1.5px solid var(--g200)' }} />
                </label>
                <label style={{ display: 'block', marginBottom: 16 }}>
                  <span style={{ fontFamily: 'var(--fu)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>EMAIL</span>
                  <input type="email" required style={{ width: '100%', marginTop: 8, padding: '15px 14px', borderRadius: 10, border: '1.5px solid var(--g200)' }} />
                </label>
                <label style={{ display: 'block', marginBottom: 20 }}>
                  <span style={{ fontFamily: 'var(--fu)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>MESSAGE</span>
                  <textarea required rows={4} style={{ width: '100%', marginTop: 8, padding: '12px 14px', borderRadius: 8, border: '1.5px solid var(--g200)' }} />
                </label>
                <button type="submit" className="btn btn-primary">
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
