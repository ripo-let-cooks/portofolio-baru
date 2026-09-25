import React from 'react';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: 'var(--space-12)',
        paddingBottom: 'var(--space-16)',
        backgroundColor: 'transparent',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '18px',
                color: 'var(--text-primary)',
                marginBottom: '4px',
              }}
            >
              {personalData.name}
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              &copy; {currentYear} Arief Maulana. All rights reserved.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
              }}
            >
              TIMEZONE: ASIA/JAKARTA (UTC+7)
            </span>

            <a
              href="#top"
              className="link-editorial"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text-secondary)',
              }}
              aria-label="Back to top"
            >
              Back to top &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
