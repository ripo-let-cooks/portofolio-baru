import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Background blur on scroll & auto close mobile menu on desktop resize
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Lock body scroll & listen for ESC key when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  // Full-screen mobile navigation items (matching reference layout with index numbers)
  const mobileNavLinks = [
    { href: '#top', label: 'HOME', number: '01' },
    { href: '#about', label: 'ABOUT', number: '02' },
    { href: '#projects', label: 'PROJECTS', number: '03' },
    { href: '#experience', label: 'EXPERIENCE', number: '04' },
    { href: '#skills', label: 'SKILLS', number: '05' },
    { href: '#certificates', label: 'CERTIFICATES', number: '06' },
    { href: '#contact', label: 'CONTACT', number: '07' },
  ];

  // Desktop navigation items
  const desktopNavLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#contact', label: 'Contact' },
  ];

  // Silky smooth iOS/Linear quintic momentum easing
  const smoothEase = [0.22, 1, 0.36, 1];

  // Framer Motion Variants: Slide in from right (open) and slide out back to right (close)
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        duration: 0.38,
        ease: smoothEase,
      },
    },
    open: {
      x: '0%',
      transition: {
        duration: 0.46,
        ease: smoothEase,
        staggerChildren: 0.04,
        delayChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 25,
      transition: {
        duration: 0.22,
        ease: smoothEase,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.42,
        ease: smoothEase,
      },
    },
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(3, 7, 18, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'all 0.3s var(--ease-smooth)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '70px',
          }}
        >
          {/* Brand Mark in Newsreader Serif */}
          <a
            href="#top"
            style={{
              textDecoration: 'none',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'baseline',
              gap: '6px',
            }}
            aria-label="Back to top"
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '21px',
                fontWeight: 500,
                letterSpacing: '-0.02em',
              }}
            >
              Arief Maulana
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="editorial-nav"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '32px',
            }}
            aria-label="Main Navigation"
          >
            {desktopNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '13.5px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  transition: 'color var(--duration-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              background: 'transparent',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'border-color 0.2s ease',
            }}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* =========================================================================
          FULL-SCREEN MOBILE MENU WITH FRAMER MOTION (SLIDE FROM RIGHT TO LEFT)
          ========================================================================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-fullscreen-overlay"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            style={{
              position: 'fixed',
              inset: 0,
              width: '100vw',
              height: '100dvh',
              backgroundColor: 'rgba(3, 7, 18, 0.985)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '24px 28px',
              overflowY: 'auto',
              boxSizing: 'border-box',
              willChange: 'transform',
              WebkitTransform: 'translateZ(0)',
              transform: 'translateZ(0)',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
            }}
          >
            {/* Top Bar inside Overlay */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '20px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '21px',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                }}
              >
                Arief Maulana
              </span>

              {/* Close Button with Text & Icon */}
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Tutup navigasi"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  padding: '6px 10px',
                  borderRadius: 'var(--radius-xs)',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                <span>CLOSE</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Center Main Nav Links (Big Editorial Typography & Index Numbers) */}
            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 'clamp(14px, 2.8vh, 24px)',
                padding: 'clamp(24px, 4vh, 48px) 0',
                flexGrow: 1,
              }}
              aria-label="Mobile Navigation"
            >
              {mobileNavLinks.map((link) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="mobile-nav-hero-link"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'baseline',
                      gap: '12px',
                      textDecoration: 'none',
                      color: 'var(--text-primary)',
                      transition: 'color 0.25s ease, transform 0.25s ease',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(34px, 8.5vw, 50px)',
                        fontWeight: 400,
                        letterSpacing: '-0.015em',
                        lineHeight: 1.15,
                        textTransform: 'uppercase',
                      }}
                    >
                      {link.label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'clamp(12px, 3vw, 14px)',
                        color: 'var(--accent-refined)',
                        letterSpacing: '0.04em',
                        opacity: 0.85,
                        fontWeight: 500,
                      }}
                    >
                      {link.number}
                    </span>
                  </a>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .editorial-nav {
            display: flex !important;
          }
          .mobile-btn {
            display: none !important;
          }
        }
        .mobile-nav-hero-link:hover {
          color: var(--accent-refined) !important;
          transform: translateX(8px);
        }
        .mobile-nav-hero-link:hover span:first-child {
          font-style: italic;
        }
      `}</style>
    </header>
  );
}
