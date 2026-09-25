import React from 'react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-16)' }}>
          <div className="scroll-reveal section-label">
            <span>03 / Experience</span>
          </div>
          <h2 className="scroll-reveal section-headline delay-1">
            Professional trajectory and <span className="font-editorial-italic">leadership</span>.
          </h2>
          <p className="scroll-reveal section-subhead delay-2">
            Hands-on experience spanning web interface engineering, multiplatform content production, and rapid software prototyping competitions.
          </p>
        </div>

        {/* Minimalist Editorial Timeline List */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {experienceData.map((item, idx) => (
            <div
              key={item.id}
              className={`scroll-reveal delay-${(idx % 3) + 1} experience-item-grid`}
              style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: 'var(--space-8)',
                paddingBottom: 'var(--space-10)',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 'var(--space-6)',
              }}
            >
              {/* Period & Status Column */}
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    display: 'block',
                    marginBottom: '6px',
                  }}
                >
                  {item.period}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: item.status === 'Active' ? 'var(--status-active)' : 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  [{item.status}]
                </span>
              </div>

              {/* Role, Company & Achievements Column */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '22px',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    marginBottom: '4px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.role}
                </h3>
                <div
                  style={{
                    fontSize: '14.5px',
                    color: 'var(--accent-refined)',
                    marginBottom: '16px',
                  }}
                >
                  {item.company}
                </div>

                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    marginBottom: '18px',
                  }}
                >
                  {item.highlights.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      style={{
                        fontSize: '13.5px',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.65,
                        display: 'flex',
                        gap: '10px',
                      }}
                    >
                      <span style={{ color: 'var(--text-muted)' }}>&bull;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Row */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--text-muted)',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-xs)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .experience-item-grid {
            grid-template-columns: 240px 1fr !important;
            gap: var(--space-8) !important;
          }
        }
      `}</style>
    </section>
  );
}
