'use client';

import { useState } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { COMPANY } from '../../lib/data';

export default function Contact() {
  const { ref: r1, visible: v1 } = useReveal();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; text: string }>({
    type: null,
    text: '',
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, text: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          text: 'Thank you! Your message has been sent successfully. A confirmation email has been sent to your inbox.',
        });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus({
          type: 'error',
          text: data.error || 'Failed to send your message. Please try again.',
        });
      }
    } catch (err: any) {
      console.error('Contact Form Submit Error:', err);
      setStatus({
        type: 'error',
        text: 'An unexpected error occurred. Please check your network and try again.',
      });
    } finally {
      setLoading(false);
    }
  }

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

              <form className="card" style={{ padding: '32px' }} onSubmit={handleSubmit}>
                {status.type && (
                  <div
                    style={{
                      padding: '14px 18px',
                      borderRadius: '10px',
                      marginBottom: '24px',
                      fontSize: '0.88rem',
                      lineHeight: '1.5',
                      backgroundColor: status.type === 'success' ? 'rgba(45, 90, 66, 0.1)' : 'rgba(200, 50, 50, 0.1)',
                      color: status.type === 'success' ? 'var(--g-deep)' : '#b91c1c',
                      border: status.type === 'success' ? '1px solid var(--g-sage)' : '1px solid #fca5a5',
                    }}
                  >
                    {status.text}
                  </div>
                )}

                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label htmlFor="contact-name">NAME</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    disabled={loading}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label htmlFor="contact-email">EMAIL</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    disabled={loading}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '24px' }}>
                  <label htmlFor="contact-message">MESSAGE</label>
                  <textarea
                    id="contact-message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    disabled={loading}
                  />
                </div>

                <button type="submit" className="btn btn-primary" disabled={loading} style={{ opacity: loading ? 0.7 : 1, width: '100%', justifyContent: 'center' }}>
                  <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
