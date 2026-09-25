import React from 'react';
import { personalData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        paddingTop: '125px',
        paddingBottom: 'var(--space-16)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ maxWidth: '1260px' }}>
        <div className="hero-flank-grid">
          
          {/* ============================================================
              LEFT COLUMN: Editorial Headline & Philosophical Thesis
              ============================================================ */}
          <div className="hero-flank-left">
            {/* Clean Section Label */}
            <div className="scroll-reveal section-label" style={{ marginBottom: '16px' }}>
              <span>01 / Front-End Engineering &amp; Multimedia</span>
            </div>

            {/* Display Newsreader Headline */}
            <h1
              className="scroll-reveal font-editorial-headline delay-1"
              style={{
                fontSize: 'clamp(32px, 3.4vw, 48px)',
                lineHeight: 1.14,
                letterSpacing: '-0.025em',
                color: 'var(--text-primary)',
                marginBottom: '20px',
              }}
            >
              Shaping digital spaces through{' '}
              <span className="font-editorial-italic">engineered code</span> and{' '}
              <span className="font-editorial-italic">visual aesthetics</span>.
            </h1>

            {/* Supportive Philosophy Note */}
            <p
              className="scroll-reveal delay-2"
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(15px, 1.2vw, 16.5px)',
                color: 'var(--accent-refined)',
                lineHeight: 1.6,
                maxWidth: '38ch',
              }}
            >
              Bridging modern front-end development with cinematographic sensibility and editorial design.
            </p>
          </div>

          {/* ============================================================
              CENTER COLUMN: Sculptural Portrait (Larger, Clean & Static)
              ============================================================ */}
          <div className="hero-flank-center scroll-reveal delay-2">
            <div
              className="hero-3d-stage"
              aria-label="Portrait of Arief Maulana, Multimedia Engineer"
            >
              {/* Atmospheric Depth Backlight Glow */}
              <div className="hero-3d-glow" />

              {/* Portrait Image Wrapper */}
              <div className="hero-3d-portrait-wrap hero-idle-float">
                <img
                  src="/profile-cutout.webp"
                  alt="Portrait of Arief Maulana, Multimedia Engineer & Front-End Developer"
                  className="hero-3d-portrait-img"
                  onError={(e) => {
                    if (!e.currentTarget.src.includes('profilee.webp')) {
                      e.currentTarget.src = '/profilee.webp';
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* ============================================================
              RIGHT COLUMN: Narrative Bio & Direct Action
              ============================================================ */}
          <div className="hero-flank-right">
            {/* Clean Section Label */}
            <div className="scroll-reveal section-label" style={{ marginBottom: '16px' }}>
              <span>Overview &amp; Profile</span>
            </div>

            {/* Human Bio Paragraph */}
            <p
              className="scroll-reveal delay-2"
              style={{
                fontSize: 'clamp(15px, 1.2vw, 16.5px)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '24px',
                maxWidth: '44ch',
              }}
            >
              {personalData.bio}
            </p>

            {/* Primary Action Buttons */}
            <div
              className="scroll-reveal delay-3"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="#projects"
                className="btn-editorial-primary"
                aria-label="Explore selected projects"
                style={{
                  padding: '12px 26px',
                  fontSize: '14px',
                }}
              >
                <span>Explore Selected Works</span>
                <span style={{ fontSize: '15px' }}>&darr;</span>
              </a>

              <a
                href="#contact"
                className="link-editorial"
                style={{ fontSize: '13.5px', fontWeight: 500 }}
              >
                Get in Touch &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .hero-flank-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8);
          align-items: center;
        }

        .hero-flank-left {
          text-align: left;
        }

        .hero-flank-center {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-flank-right {
          text-align: left;
        }

        @media (min-width: 1024px) {
          .hero-flank-grid {
            grid-template-columns: 1.2fr minmax(280px, 360px) 1.15fr !important;
            gap: var(--space-8) !important;
          }
        }
      `}</style>
    </section>
  );
}
