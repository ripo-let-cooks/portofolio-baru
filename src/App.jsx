import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundAmbient from './components/BackgroundAmbient';

export default function App() {
  // Attach smooth scroll reveal observer
  useScrollReveal();

  // Initialize Lenis smooth scroll for fluid cinematic inertia & anchor navigation
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Smooth anchor navigation handler
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const hash = anchor.getAttribute('href');
        if (hash === '#top') {
          e.preventDefault();
          lenis.scrollTo(0, { duration: 1.2 });
        } else if (hash && hash !== '#') {
          const targetEl = document.querySelector(hash);
          if (targetEl) {
            e.preventDefault();
            lenis.scrollTo(targetEl, { offset: -70, duration: 1.2 });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="portfolio-app">
      {/* Dynamic Ambient Gradient Background (Navy, Obsidian, White Accents) */}
      <BackgroundAmbient />

      {/* Accessibility Keyboard Skip Link */}
      <a href="#projects" className="skip-link">
        Skip to selected projects
      </a>

      {/* Minimalist Floating Nav */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
