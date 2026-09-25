import React, { useState } from 'react';
import { projectCategories, projectsData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-12)' }}>
          <div className="scroll-reveal section-label">
            <span>02 / Selected Works</span>
          </div>
          <h2 className="scroll-reveal section-headline delay-1">
            A curation of <span className="font-editorial-italic">interface engineering</span> and <span className="font-editorial-italic">media</span>.
          </h2>
          <p className="scroll-reveal section-subhead delay-2">
            Comprehensive documentation across 7 key projects covering modern web systems, intelligent prototypes, cinematography, and design architectures.
          </p>
        </div>

        {/* Minimalist Editorial Category Filter */}
        <div
          role="tablist"
          aria-label="Project categories"
          className="scroll-reveal delay-2"
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: 'var(--space-12)',
            paddingBottom: 'var(--space-4)',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  background: isActive ? 'var(--text-primary)' : 'transparent',
                  color: isActive ? 'var(--bg-canvas)' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-xs)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: isActive ? 600 : 400,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all var(--duration-fast)',
                }}
              >
                <span>{cat.label}</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    opacity: 0.7,
                  }}
                >
                  ({cat.count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects 2-Column Editorial Grid */}
        <div
          id="project-grid"
          role="tabpanel"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-8)',
          }}
          className="projects-editorial-grid"
        >
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Fallback if category empty */}
        {filteredProjects.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px 0', color: 'var(--text-muted)' }}>
            <p>No projects found in this category.</p>
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className="btn-editorial-outline"
              style={{ marginTop: '16px' }}
            >
              Back to All Works (7)
            </button>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .projects-editorial-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            column-gap: var(--space-12) !important;
          }
        }
      `}</style>
    </section>
  );
}
