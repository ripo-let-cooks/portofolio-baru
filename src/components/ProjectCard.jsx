import React from 'react';

export default function ProjectCard({ project, index }) {
  return (
    <article
      className="project-card-animate"
      style={{
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: 'var(--space-6)',
        paddingBottom: 'var(--space-8)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'border-color var(--duration-normal)',
        animationDelay: `${(index % 4) * 0.06}s`,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
    >
      <div>
        {/* Meta Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-muted)',
              letterSpacing: '0.05em',
            }}
          >
            [ {project.categoryBadge} ]
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-muted)',
            }}
          >
            {project.year}
          </span>
        </div>

        {/* Project Title in Newsreader Serif */}
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(20px, 2.2vw, 26px)',
            fontWeight: 400,
            lineHeight: 1.25,
            color: 'var(--text-primary)',
            letterSpacing: '-0.015em',
            marginBottom: '4px',
          }}
        >
          {project.title}
        </h3>

        {/* Subtitle */}
        <div
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '14px',
            color: 'var(--accent-refined)',
            marginBottom: '12px',
          }}
        >
          {project.subtitle}
        </div>

        {/* Summary */}
        <p
          style={{
            fontSize: '13.5px',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            marginBottom: '16px',
          }}
        >
          {project.summary}
        </p>

        {/* Achievement Note */}
        {project.achievement && (
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--accent-refined)',
              marginBottom: '16px',
            }}
          >
            &bull; {project.achievement}
          </div>
        )}
      </div>

      <div>
        {/* Tech Stack Pills (Monochrome Minimalist) */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginBottom: '18px',
          }}
        >
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10.5px',
                color: 'var(--text-muted)',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                padding: '2px 8px',
                borderRadius: 'var(--radius-xs)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-editorial"
              style={{ fontSize: '13px', fontWeight: 500 }}
              aria-label={`Open GitHub repository for ${project.title}`}
            >
              View on GitHub &rarr;
            </a>
          )}

          {project.links.youtube && (
            <a
              href={project.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="link-editorial"
              style={{ fontSize: '13px', fontWeight: 500 }}
              aria-label={`Watch short film on YouTube for ${project.title}`}
            >
              Watch on YouTube &rarr;
            </a>
          )}

          {project.links.figma && (
            <a
              href={project.links.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="link-editorial"
              style={{ fontSize: '13px', fontWeight: 500 }}
              aria-label={`Open Figma prototype for ${project.title}`}
            >
              Figma Prototype &rarr;
            </a>
          )}

          {Object.keys(project.links).length === 0 && (
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>
              Academic Archive
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
