import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-16)' }}>
          <div className="scroll-reveal section-label">
            <span>04 / Skills &amp; Tools</span>
          </div>
          <h2 className="scroll-reveal section-headline delay-1">
            Technologies, camera instruments, and <span className="font-editorial-italic">automation</span>.
          </h2>
          <p className="scroll-reveal section-subhead delay-2">
            Software stacks and hardware workflows utilized across interface engineering, AI pipelines, and multimedia production.
          </p>
        </div>

        {/* 3 Editorial Clusters */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-8)',
          }}
          className="skills-editorial-grid"
        >
          {skillsData.map((cluster, idx) => (
            <div
              key={idx}
              className={`scroll-reveal delay-${idx + 1}`}
              style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: 'var(--space-6)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '20px',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                }}
              >
                {cluster.category}
              </h3>
              <p
                style={{
                  fontSize: '13.5px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '16px',
                }}
              >
                {cluster.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cluster.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      color: 'var(--text-secondary)',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .skills-editorial-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: var(--space-8) !important;
          }
        }
      `}</style>
    </section>
  );
}
