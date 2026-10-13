import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificateCategories, certificatesData } from '../data/portfolioData';

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  const carouselRef = useRef(null);
  const cardsRef = useRef([]);
  const cardCentersRef = useRef([]);

  // Filtered certificates based on active category
  const filteredCerts = activeCategory === 'all'
    ? certificatesData
    : certificatesData.filter((c) => c.category === activeCategory);

  // Pre-measure card centers in memory to completely avoid getBoundingClientRect() during scroll (eliminates Layout Thrashing)
  const measureCardCenters = useCallback(() => {
    const container = carouselRef.current;
    if (!container) return;
    cardCentersRef.current = cardsRef.current.map((card) => {
      if (!card) return 0;
      return card.offsetLeft + card.offsetWidth / 2;
    });
  }, []);

  // Zero-reflow, butter-smooth 3D curve transform using pre-cached card geometry
  const updateCardCurves = useCallback(() => {
    const container = carouselRef.current;
    if (!container) return;

    const containerWidth = container.clientWidth;
    const containerCenter = container.scrollLeft + containerWidth / 2;
    const maxDistance = containerWidth / 2 + 160;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      const cardCenter = cardCentersRef.current[index] || (card.offsetLeft + card.offsetWidth / 2);
      const distanceFromCenter = cardCenter - containerCenter;

      // Normalized distance ratio [-1, 1]
      const ratio = Math.max(-1, Math.min(1, distanceFromCenter / maxDistance));

      // 3D curved parameters
      const rotateY = ratio * -18;
      const translateZ = (1 - Math.abs(ratio)) * 24 - 24;
      const scale = 1 - Math.abs(ratio) * 0.05;
      const opacity = 1 - Math.abs(ratio) * 0.18;

      card.style.transform = `perspective(1000px) rotateY(${rotateY.toFixed(1)}deg) translateZ(${translateZ.toFixed(1)}px) scale(${scale.toFixed(3)})`;
      card.style.opacity = Math.max(0.72, opacity).toFixed(2);
    });
  }, []);

  // Update curve transforms on scroll & window resize with requestAnimationFrame throttling
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    measureCardCenters();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateCardCurves();
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => {
      measureCardCenters();
      updateCardCurves();
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // Initial calculation after mount & layout paint
    const timer = setTimeout(() => {
      measureCardCenters();
      updateCardCurves();
    }, 60);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [measureCardCenters, updateCardCurves, filteredCerts]);

  // Center scroll whenever category tab changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeCategory]);

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e) => {
    const container = carouselRef.current;
    if (!container) return;

    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const container = carouselRef.current;
    if (!container) return;

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag sensitivity multiplier

    if (Math.abs(walk) > 4) {
      setHasDragged(true);
    }
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Smooth Modal Close with Framer Motion
  const handleCloseModal = useCallback(() => {
    setSelectedCert(null);
  }, []);

  // Open Modal
  const handleOpenModal = useCallback((cert) => {
    setSelectedCert(cert);
  }, []);

  // Keyboard accessibility for Lightbox Modal (ESC to smoothly close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert, handleCloseModal]);

  return (
    <section
      id="certificates"
      className="section-padding"
      style={{
        borderTop: '1px solid var(--border-subtle)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-12)' }}>
          <div className="scroll-reveal section-label">
            <span>06 / Credentials &amp; Certifications</span>
          </div>
          <h2 className="scroll-reveal section-headline delay-1">
            Accreditation, leadership and <span className="font-editorial-italic">technical honors</span>.
          </h2>
          <p className="scroll-reveal section-subhead delay-2">
            A comprehensive curation of {certificatesData.length} formal credentials spanning front-end engineering internships, competitive programming, and foundational honors.
          </p>
        </div>

        {/* Minimalist Editorial Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Certificate categories"
          className="scroll-reveal delay-2"
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: 'var(--space-10)',
            paddingBottom: 'var(--space-4)',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          {certificateCategories.map((cat) => {
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
      </div>

      {/* 3D Curved Cylindrical Carousel Track (Buttonless, Pure Drag/Swipe) */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          padding: '24px 0 32px 0',
          perspective: '1400px',
        }}
      >
        <div
          ref={carouselRef}
          className="certificates-curved-track"
          style={{
            display: 'flex',
            gap: '28px',
            paddingLeft: 'max(24px, calc((100vw - 1200px) / 2 + 24px))',
            paddingRight: 'max(24px, calc((100vw - 1200px) / 2 + 24px))',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            overscrollBehaviorX: 'contain',
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingBottom: '24px',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
        >
          {filteredCerts.map((cert, index) => (
            <div
              key={cert.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="cert-card-item"
              role="button"
              tabIndex={0}
              aria-label={`Lihat sertifikat ${cert.title}`}
              onClick={() => {
                if (!hasDragged) {
                  handleOpenModal(cert);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenModal(cert);
                }
              }}
              style={{
                flex: '0 0 clamp(290px, 32vw, 380px)',
                backgroundColor: '#0b1328',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                willChange: 'transform, opacity',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
                e.currentTarget.style.boxShadow = '0 14px 40px rgba(0, 0, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Certificate Image Frame */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1.414 / 1', // Standard A4 Certificate Aspect Ratio
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  overflow: 'hidden',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <img
                  src={cert.image}
                  alt={`Sertifikat ${cert.title} - ${cert.issuer}`}
                  loading="lazy"
                  draggable="false"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.4s var(--ease-smooth)',
                    pointerEvents: 'none',
                  }}
                  className="cert-preview-img"
                />

                {/* Subtle Image Vignette Gradient */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(3, 7, 18, 0.65) 0%, transparent 50%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Year Badge Top-Right */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10.5px',
                    color: 'var(--text-primary)',
                    backgroundColor: 'rgba(3, 7, 18, 0.75)',
                    backdropFilter: 'blur(6px)',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  {cert.year}
                </div>
              </div>

              {/* Certificate Editorial Details */}
              <div
                style={{
                  padding: '16px 20px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10.5px',
                      color: 'var(--accent-refined)',
                      letterSpacing: '0.04em',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                    }}
                  >
                    [ {cert.categoryBadge} ]
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '18px',
                      fontWeight: 500,
                      lineHeight: 1.3,
                      color: 'var(--text-primary)',
                      marginBottom: '6px',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {cert.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.45,
                    }}
                  >
                    {cert.issuer}
                  </div>
                </div>

                {/* Clean Bottom Date Bar */}
                <div
                  style={{
                    paddingTop: '12px',
                    marginTop: '12px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {cert.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          LIGHTBOX MODAL POP-UP (FRAMER MOTION - ZERO SCROLL - SMOOTH OPEN & CLOSE)
          ========================================================================= */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            key="cert-modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={`Pratinjau Sertifikat: ${selectedCert.title}`}
            className="cert-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              backgroundColor: 'rgba(3, 7, 18, 0.94)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
              cursor: 'pointer',
            }}
            onClick={handleCloseModal}
          >
            <motion.div
              key="cert-modal-dialog"
              className="cert-modal-dialog"
              initial={{ opacity: 0, scale: 0.88, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 22 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'relative',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 28px 72px rgba(0, 0, 0, 0.9)',
                cursor: 'default',
                willChange: 'transform, opacity',
              }}
              onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
            >
              {/* Modal Image Display Side / Top */}
              <div
                className="cert-modal-media"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    borderRadius: 'var(--radius-sm)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.65)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                />
              </div>

              {/* Modal Detail Info Side / Bottom */}
              <div className="cert-modal-content">
                <div>
                  {/* Top Header info (Close button removed, only category & year) */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          color: 'var(--accent-refined)',
                          letterSpacing: '0.04em',
                        }}
                      >
                        [ {selectedCert.categoryBadge} ]
                      </span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '11px' }}>&bull;</span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {selectedCert.year}
                      </span>
                    </div>
                  </div>

                  <h3
                    className="cert-modal-title"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontWeight: 400,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.015em',
                    }}
                  >
                    {selectedCert.title}
                  </h3>

                  <div
                    className="cert-modal-issuer"
                    style={{
                      color: 'var(--accent-refined)',
                      fontWeight: 500,
                    }}
                  >
                    {selectedCert.issuer}
                  </div>

                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--text-muted)',
                      marginBottom: '10px',
                    }}
                  >
                    Date: <span style={{ color: 'var(--text-secondary)' }}>{selectedCert.date}</span>
                    {selectedCert.credentialNo && (
                      <>
                        <span style={{ margin: '0 6px', color: 'var(--border-subtle)' }}>|</span>
                        <span>ID: {selectedCert.credentialNo}</span>
                      </>
                    )}
                  </div>

                  <p
                    className="cert-modal-summary"
                    style={{
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                    }}
                  >
                    {selectedCert.summary}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .certificates-curved-track::-webkit-scrollbar {
          display: none;
        }
        .cert-card-item:hover .cert-preview-img {
          transform: scale(1.03);
        }


        /* Responsive Modal: No Scroll on Desktop or Mobile */
        @media (min-width: 860px) {
          .cert-modal-dialog {
            display: flex !important;
            flex-direction: row !important;
            max-width: 980px !important;
            width: 92vw !important;
            height: min(84vh, 580px) !important;
            max-height: 84vh !important;
          }
          .cert-modal-media {
            flex: 1.35 !important;
            height: 100% !important;
            padding: var(--space-6) !important;
          }
          .cert-modal-content {
            flex: 1 !important;
            height: 100% !important;
            padding: 26px 28px !important;
            border-left: 1px solid var(--border-subtle) !important;
            display: flex !important;
            flex-direction: column !important;
            justifyContent: space-between !important;
            overflow: hidden !important;
          }
          .cert-modal-title {
            font-size: 22px !important;
            margin-bottom: 6px !important;
            line-height: 1.25 !important;
          }
          .cert-modal-issuer {
            font-size: 14.5px !important;
            margin-bottom: 8px !important;
          }
          .cert-modal-summary {
            font-size: 13.5px !important;
          }
        }

        @media (max-width: 859px) {
          .cert-modal-dialog {
            display: flex !important;
            flex-direction: column !important;
            width: 94vw !important;
            max-width: 440px !important;
            max-height: 88dvh !important;
            height: auto !important;
          }
          .cert-modal-media {
            width: 100% !important;
            max-height: 48dvh !important;
            padding: 12px 14px !important;
            border-bottom: 1px solid var(--border-subtle) !important;
          }
          .cert-modal-media img {
            max-height: 44dvh !important;
          }
          .cert-modal-content {
            padding: 14px 16px 16px !important;
            display: flex !important;
            flex-direction: column !important;
            justifyContent: space-between !important;
          }
          .cert-modal-title {
            font-size: 16.5px !important;
            margin-bottom: 4px !important;
            line-height: 1.25 !important;
          }
          .cert-modal-issuer {
            font-size: 13px !important;
            margin-bottom: 6px !important;
          }
          .cert-modal-summary {
            font-size: 12px !important;
            display: -webkit-box !important;
            -webkit-line-clamp: 3 !important;
            -webkit-box-orient: vertical !important;
            overflow: hidden !important;
          }
        }
      `}</style>
    </section>
  );
}
