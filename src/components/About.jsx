import React from 'react';
import { personalData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-16)' }}>
          <div className="scroll-reveal section-label">
            <span>01 / Core Principles</span>
          </div>
          <h2 className="scroll-reveal section-headline delay-1">
            Bridging rigorous software logic with <span className="font-editorial-italic">cinematic aesthetics</span>.
          </h2>
          <p className="scroll-reveal section-subhead delay-2">
            Exceptional digital craft is not merely about running functional code, it is about how interfaces interact with human perception intuitively and gracefully.
          </p>
        </div>

        {/* Philosophy Content Split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-12)',
            marginBottom: 'var(--space-16)',
          }}
          className="about-split-grid"
        >
          {personalData.philosophy.map((item, idx) => (
            <div
              key={idx}
              className={`scroll-reveal delay-${idx + 1}`}
              style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: 'var(--space-6)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11.5px',
                  color: 'var(--text-muted)',
                  display: 'block',
                  marginBottom: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Approach 0{idx + 1}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '22px',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  marginBottom: '10px',
                  letterSpacing: '-0.01em',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '14.5px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Metrics Row (Pure Editorial Data Presentation) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--space-8)',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: 'var(--space-12)',
          }}
        >
          {personalData.keyMetrics.map((metric, idx) => (
            <div key={idx} className={`scroll-reveal delay-${idx + 1}`}>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(36px, 4vw, 48px)',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '10px',
                }}
              >
                {metric.value}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  marginBottom: '4px',
                }}
              >
                {metric.label}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11.5px',
                  color: 'var(--text-muted)',
                }}
              >
                {metric.meta}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-split-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
