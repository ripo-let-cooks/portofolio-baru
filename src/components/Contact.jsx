import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || formData.name.length < 3) {
      setStatus('error');
      setErrorMessage('Sender name must be at least 3 characters.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Invalid email address format.');
      return;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      setStatus('error');
      setErrorMessage('Message content must be at least 10 characters.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 700);
  };

  return (
    <section id="contact" className="section-padding" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-16)' }}>
          <div className="scroll-reveal section-label">
            <span>05 / Contact</span>
          </div>
          <h2 className="scroll-reveal section-headline delay-1">
            Opening dialogue for <span className="font-editorial-italic">new opportunities</span>.
          </h2>
          <p className="scroll-reveal section-subhead delay-2">
            Open for internships, software engineering contracts, video production, or exploring technological ideas.
          </p>
        </div>

        {/* Contact Split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-12)',
          }}
          className="contact-editorial-grid"
        >
          {/* Direct Channels */}
          <div className="scroll-reveal delay-1">
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '20px',
                fontWeight: 500,
                color: 'var(--text-primary)',
                marginBottom: '16px',
              }}
            >
              Direct Channels
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '24px' }}>
              For recruitment inquiries or urgent opportunities, feel free to reach out via WhatsApp or email below:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', display: 'block' }}>
                  WHATSAPP
                </span>
                <a
                  href={personalData.contacts.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-editorial"
                  style={{ fontSize: '15px' }}
                >
                  {personalData.contacts.whatsapp} &rarr;
                </a>
              </div>

              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', display: 'block' }}>
                  EMAIL
                </span>
                <a
                  href={`mailto:${personalData.contacts.email}`}
                  className="link-editorial"
                  style={{ fontSize: '15px' }}
                >
                  {personalData.contacts.email} &rarr;
                </a>
              </div>

              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', display: 'block' }}>
                  PROFESSIONAL PROFILES
                </span>
                <div style={{ display: 'flex', gap: '16px', marginTop: '4px' }}>
                  <a
                    href={personalData.contacts.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-editorial"
                    style={{ fontSize: '14px' }}
                  >
                    GitHub
                  </a>
                  <a
                    href={personalData.contacts.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-editorial"
                    style={{ fontSize: '14px' }}
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="scroll-reveal delay-2">
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '20px',
                fontWeight: 500,
                color: 'var(--text-primary)',
                marginBottom: '16px',
              }}
            >
              Send a Message
            </h3>

            {status === 'success' && (
              <div
                role="status"
                style={{
                  padding: '14px 18px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-strong)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-primary)',
                  fontSize: '13.5px',
                  marginBottom: '20px',
                }}
              >
                Your message has been sent successfully. Arief will reply promptly to your email address.
              </div>
            )}

            {status === 'error' && (
              <div
                role="alert"
                style={{
                  padding: '14px 18px',
                  backgroundColor: 'rgba(239, 68, 68, 0.08)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: 'var(--radius-sm)',
                  color: '#F87171',
                  fontSize: '13.5px',
                  marginBottom: '20px',
                }}
              >
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label
                  htmlFor="contact-name"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '6px',
                  }}
                >
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name or company representative"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-xs)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'border-color var(--duration-fast)',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--text-primary)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '6px',
                  }}
                >
                  Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@domain.com"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-xs)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'border-color var(--duration-fast)',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--text-primary)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '6px',
                  }}
                >
                  Your Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project inquiry, internship role, or question here..."
                  required
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-xs)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color var(--duration-fast)',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--text-primary)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-editorial-primary"
                style={{ alignSelf: 'flex-start', padding: '12px 24px' }}
              >
                <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                <span>&rarr;</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .contact-editorial-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
            gap: var(--space-16) !important;
          }
        }
      `}</style>
    </section>
  );
}
