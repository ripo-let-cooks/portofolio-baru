# Arief Maulana — Portfolio

> **Multimedia Engineer & Front-End Developer**  
> *Shaping digital spaces through engineered code and visual aesthetics.*

A modern, high-performance web portfolio built with **React 19**, **Vite 6**, and modern CSS. Features an editorial typographic layout, a 60 FPS GPU-accelerated ambient fluid canvas gradient background, and buttery smooth inertial scrolling with Lenis.

---

## ✨ Key Features

- **Fluid Ambient Canvas Background:** Procedural 60 FPS multi-node harmonic gradient blending dominant deep navy blue, obsidian black, and ethereal luminous white accents with automatic visibility pausing and reduced-motion support.
- **Editorial Typography:** Harmonious typographic hierarchy combining *Newsreader* (editorial serif), *Plus Jakarta Sans* (grotesque interface sans), and *JetBrains Mono* (technical data & metadata).
- **Smooth Inertial Scrolling:** Integrated with **Lenis** for fluid scroll momentum and fixed navbar offset compensation.
- **Interactive Project Showcase:** Instant tab filtering across 7 selected works spanning Web & AI, Mobile & UI/UX, and Cinematography.
- **Client-Side Validated Contact:** Accessible form with error/success feedback states and direct action links (WhatsApp & Email).
- **Accessibility & Human Factors:** WCAG 2.1 Level AA compliant with high-contrast ratios (>12:1), full keyboard `:focus-visible` indicators, and skip-to-content links.
- **Clean Architecture:** Zero bloated CSS frameworks, minimal bundle size (~85 kB gzipped), and sub-3-second build times.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) |
| **Build Tool** | [Vite 6](https://vite.dev/) |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering/) |
| **Styling** | Vanilla CSS (Design Tokens, Grid, Flexbox, GPU Compositing) |
| **Graphics** | HTML5 2D Canvas Engine |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```text
portofolio-baru/
├── public/
│   ├── cv.pdf                   # Official Curriculum Vitae
│   ├── profile-cutout.webp      # High-res transparent cutout portrait
│   └── profilee.webp            # Fallback portrait asset
├── src/
│   ├── components/
│   │   ├── About.jsx            # Core philosophy & career approach
│   │   ├── BackgroundAmbient.jsx # 60fps fluid canvas gradient engine
│   │   ├── Contact.jsx          # Contact channels & validated form
│   │   ├── Experience.jsx       # Professional timeline & achievements
│   │   ├── Footer.jsx           # Minimalist footer & timezone indicator
│   │   ├── Hero.jsx             # Flanked 3-column editorial hero
│   │   ├── Navbar.jsx           # Fixed glassmorphism nav & mobile drawer
│   │   ├── ProjectCard.jsx      # Individual project card with dynamic links
│   │   ├── Projects.jsx         # Selected works with category filters
│   │   └── Skills.jsx           # Technical, camera & AI workflow clusters
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for portfolio data
│   ├── hooks/
│   │   └── useScrollReveal.js   # IntersectionObserver scroll reveal hook
│   ├── styles/
│   │   ├── ambient-background.css # Canvas & blur styling
│   │   ├── global.css           # Global typography & layout rules
│   │   └── tokens.css           # Design tokens (colors, spacing, radii)
│   ├── App.jsx                  # Application root & Lenis initialization
│   └── main.jsx                 # React DOM mount point
├── vercel.json                  # Vercel SPA rewrite configuration
├── vite.config.js               # Vite configuration
└── package.json                 # Dependencies & build scripts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or pnpm

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/ripo-let-cooks/portofolio-baru.git
cd portofolio-baru
npm install
```

### Development
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
Generate an optimized production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deployment to Vercel

This project is pre-configured for zero-config Vercel deployment:

1. Import the repository on [Vercel](https://vercel.com/new).
2. Framework Preset will be automatically detected as **Vite**.
3. Build Command: `vite build`
4. Output Directory: `dist`
5. Click **Deploy**.

The included `vercel.json` ensures all routes and single-page navigation resolve properly without 404 errors.

---

## 📄 License & Credits

Designed and developed by **Arief Maulana**.  
All rights reserved © 2026.
