import React, { useEffect, useRef } from 'react';
import '../styles/ambient-background.css';

/**
 * BackgroundAmbient
 * 
 * High-performance 60fps Canvas-driven Animated Gradient Background
 * Blending:
 * - Dominant Deep Navy & Cobalt Blues (#0B215E, #1444A8, #07153D)
 * - Deep Obsidian Black (#010308, #030712)
 * - Ethereal Luminous White Mist & Shimmer Accents (soft luminous glowing crests)
 * 
 * Continuous, fluid, organic movement that is clearly visible, dynamic, and smooth.
 * Fully GPU-friendly, zero scroll jank, and non-blocking (pointer-events: none, z-index: -1).
 */
export default function BackgroundAmbient() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let isVisible = true;

    // Responsive internal resolution (scaled for optimal 60fps rasterization with CSS blur)
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      width = Math.floor(window.innerWidth * 0.65 * dpr);
      height = Math.floor(window.innerHeight * 0.65 * dpr);
      canvas.width = Math.max(width, 320);
      canvas.height = Math.max(height, 240);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Respect user battery & CPU when tab is hidden
    const handleVisibility = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        lastTime = performance.now();
        loop(performance.now());
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // Reduced motion preference check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let lastTime = performance.now();
    let simTime = 0;

    // Harmonic multi-frequency orb nodes
    const render = (time) => {
      const delta = Math.min(time - lastTime, 64);
      lastTime = time;

      if (!prefersReducedMotion) {
        // Fluid, visible drift speed (progresses smoothly each second)
        simTime += delta * 0.00075;
      }

      const w = canvas.width;
      const h = canvas.height;
      const minDim = Math.min(w, h);
      const maxDim = Math.max(w, h);

      // Base: Midnight Obsidian Void
      ctx.fillStyle = '#020409';
      ctx.fillRect(0, 0, w, h);

      // -------------------------------------------------------------
      // 1. Dominant Deep Navy Blue Orb (Large, powerful foundation)
      // -------------------------------------------------------------
      {
        const ox = w * (0.35 + 0.28 * Math.sin(simTime * 0.85));
        const oy = h * (0.38 + 0.25 * Math.cos(simTime * 0.72));
        const radius = maxDim * (0.55 + 0.08 * Math.sin(simTime * 0.5));
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, radius);
        grad.addColorStop(0, 'rgba(16, 48, 126, 0.92)');
        grad.addColorStop(0.45, 'rgba(10, 28, 80, 0.65)');
        grad.addColorStop(0.75, 'rgba(4, 12, 38, 0.25)');
        grad.addColorStop(1, 'rgba(2, 4, 9, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ox, oy, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // -------------------------------------------------------------
      // 2. Vibrant Sapphire & Royal Blue Orb (Dynamic luminous flow)
      // -------------------------------------------------------------
      {
        const ox = w * (0.65 + 0.26 * Math.cos(simTime * 0.95 + 1.4));
        const oy = h * (0.55 + 0.28 * Math.sin(simTime * 0.82 + 0.6));
        const radius = maxDim * (0.48 + 0.07 * Math.cos(simTime * 0.6 + 1.0));
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, radius);
        grad.addColorStop(0, 'rgba(26, 84, 205, 0.85)');
        grad.addColorStop(0.42, 'rgba(14, 44, 120, 0.55)');
        grad.addColorStop(0.72, 'rgba(6, 18, 55, 0.20)');
        grad.addColorStop(1, 'rgba(2, 4, 9, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ox, oy, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // -------------------------------------------------------------
      // 3. Deep Obsidian Black Shadow (Carves dramatic high contrast)
      // -------------------------------------------------------------
      {
        const ox = w * (0.50 + 0.32 * Math.sin(simTime * 0.68 + 2.8));
        const oy = h * (0.68 + 0.22 * Math.cos(simTime * 0.76 + 1.8));
        const radius = maxDim * (0.52 + 0.06 * Math.sin(simTime * 0.45));
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, radius);
        grad.addColorStop(0, 'rgba(0, 1, 4, 0.98)');
        grad.addColorStop(0.5, 'rgba(2, 5, 14, 0.80)');
        grad.addColorStop(0.8, 'rgba(4, 10, 28, 0.35)');
        grad.addColorStop(1, 'rgba(2, 4, 9, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ox, oy, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // -------------------------------------------------------------
      // 4. Ethereal Luminous White Mist (Graceful celestial light)
      // -------------------------------------------------------------
      {
        const ox = w * (0.42 + 0.30 * Math.sin(simTime * 1.15 + 4.2));
        const oy = h * (0.32 + 0.28 * Math.cos(simTime * 1.02 + 3.1));
        const radius = minDim * (0.42 + 0.08 * Math.sin(simTime * 1.4));
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, radius);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0.28)');
        grad.addColorStop(0.28, 'rgba(215, 235, 255, 0.14)');
        grad.addColorStop(0.60, 'rgba(100, 160, 245, 0.05)');
        grad.addColorStop(1, 'rgba(2, 4, 9, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ox, oy, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // -------------------------------------------------------------
      // 5. Secondary Upper White Shimmer (Dancing top accent)
      // -------------------------------------------------------------
      {
        const ox = w * (0.72 + 0.22 * Math.cos(simTime * 1.25 + 0.8));
        const oy = h * (0.22 + 0.20 * Math.sin(simTime * 1.10 + 2.2));
        const radius = minDim * (0.34 + 0.06 * Math.cos(simTime * 1.3));
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, radius);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0.20)');
        grad.addColorStop(0.32, 'rgba(190, 220, 255, 0.09)');
        grad.addColorStop(0.65, 'rgba(60, 130, 230, 0.03)');
        grad.addColorStop(1, 'rgba(2, 4, 9, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ox, oy, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // -------------------------------------------------------------
      // 6. Deep Indigo Base Surge (Ensures rich saturated blue body)
      // -------------------------------------------------------------
      {
        const ox = w * (0.22 + 0.24 * Math.cos(simTime * 0.7 + 3.5));
        const oy = h * (0.75 + 0.18 * Math.sin(simTime * 0.85 + 1.2));
        const radius = maxDim * 0.50;
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, radius);
        grad.addColorStop(0, 'rgba(12, 36, 100, 0.85)');
        grad.addColorStop(0.55, 'rgba(6, 18, 55, 0.45)');
        grad.addColorStop(1, 'rgba(2, 4, 9, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ox, oy, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (time) => {
      if (!isVisible) return;
      render(time);
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <div className="ambient-background-root" aria-hidden="true">
      {/* 60fps Fluid Gradient Canvas */}
      <canvas ref={canvasRef} className="ambient-canvas" />

      {/* Analog Fine Grain Overlay (prevents digital banding) */}
      <div className="ambient-grain-overlay" />

      {/* Subtle Frame Vignette */}
      <div className="ambient-vignette" />
    </div>
  );
}
