export const personalData = {
  name: "Arief Maulana",
  nickname: "Arief",
  role: "Multimedia Engineer & Front-End Developer",
  slogan: "Shaping digital spaces through engineered code and visual aesthetics.",
  status: "Available for opportunities (2026)",
  location: "Indonesia (WIB / UTC+7)",
  bio: "Undergraduate in D4 Teknologi Rekayasa Multimedia at Politeknik Negeri Lhokseumawe. Bridging front-end engineering with cinematic video production and UI/UX design, utilizing modern workflows to build structured, functional, and visually refined digital products.",
  philosophy: [
    {
      title: "Aesthetic & Code Craftsmanship",
      description: "Harmonizing cinematic visual instincts and UI/UX craftsmanship with clean, resilient software engineering."
    },
    {
      title: "AI-Augmented Development",
      description: "Leveraging intelligent automation to accelerate interface prototyping, structured code iteration, and multimedia pipelines."
    }
  ],
  education: {
    program: "D4 Teknologi Rekayasa Multimedia",
    institution: "Politeknik Negeri Lhokseumawe (PNL)",
    status: "Active Undergraduate"
  },
  contacts: {
    email: "maulana.arief9305@gmail.com",
    whatsapp: "08997441752",
    whatsappUrl: "https://wa.me/628997441752",
    github: "https://github.com/ripo-let-cooks",
    linkedin: "https://www.linkedin.com/in/arief-maulana-2290b230b-2290b230b",
    discord: "https://discord.com/users/arief-maulana",
    discordTag: "@arief-maulana",
    portfolioDomain: "https://arief-maulana.dev/"
  },
  resumePath: "/cv.pdf",
  profilePhoto: "/profile-cutout.webp",
  keyMetrics: [
    { value: "150+", label: "Post-Production Videos", meta: "PT. Sagoe Media Kreasi" },
    { value: "80%", label: "Maintenance Efficiency", meta: "Website UKM IECLOP" },
    { value: "Grade A", label: "Academic Distinction", meta: "Presensi, PBL, CMS & UI/UX" },
    { value: "2026", label: "Vibe Coding Finalist", meta: "Festival Technology Policy III" }
  ]
};

export const projectCategories = [
  { id: "all", label: "All Works", count: 7 },
  { id: "web-ai", label: "Web & AI", count: 3 },
  { id: "mobile-uiux", label: "Mobile & UI/UX", count: 2 },
  { id: "multimedia", label: "Cinematography & Photo", count: 2 }
];

export const projectsData = [
  {
    id: "medisift-ai",
    title: "Medisift AI",
    subtitle: "Medical Data Extraction & Screening Prototype",
    category: "web-ai",
    categoryBadge: "AI & Web Engineering",
    year: "2026",
    summary: "Intelligent prototype for rapid medical data extraction and filtering, engineered during competitive software hackathons.",
    techStack: ["AI-Assisted Dev", "Python", "Modern Web", "Cerebras API"],
    achievement: "Vibe Coding Finalist FTP III 2026",
    links: {
      github: "https://github.com/ripo-let-cooks/medisift-ai.git"
    },
    featured: true
  },
  {
    id: "pbl-short-film",
    title: "Film Pendek Project-Based Learning",
    subtitle: "Cinematography & Directing Production",
    category: "multimedia",
    categoryBadge: "Video Production",
    year: "2025",
    summary: "Industry-standard narrative short film exploring natural lighting, camera framing, and comprehensive audiovisual post-production.",
    techStack: ["CapCut", "Blackmagic Camera", "Final Cut Camera", "Audio Mixing"],
    achievement: "Grade A Distinction (700+ YouTube Views)",
    links: {
      youtube: "https://youtu.be/unT67lWGBUc?si=T5YuOjj2oXVIxpia"
    },
    featured: true
  },
  {
    id: "presensi-pnl",
    title: "Aplikasi Presensi Kampus PNL",
    subtitle: "Mobile Attendance Application",
    category: "mobile-uiux",
    categoryBadge: "Mobile Engineering",
    year: "2025",
    summary: "Cross-platform mobile attendance tracking interface for students and faculty, engineered with Flutter and structured for campus system integration.",
    techStack: ["Flutter", "Dart", "Android Studio", "UI/UX Flow"],
    achievement: "Grade A Distinction (2nd Rank in Cohort)",
    links: {
      github: "https://github.com/ripo-let-cooks/aplikasi-presensi-pnl.git"
    },
    featured: true
  },
  {
    id: "web-ieclop",
    title: "Website Resmi UKM IECLOP",
    subtitle: "Modular Frontend Architecture",
    category: "web-ai",
    categoryBadge: "Frontend Architecture",
    year: "2026",
    summary: "Comprehensive website overhaul transforming organization portal into a modular component-driven architecture for easier content maintenance.",
    techStack: ["JavaScript ES6+", "HTML5 / CSS3", "AOS Animation", "Git"],
    achievement: "+80% Maintenance Efficiency",
    links: {
      github: "https://github.com/jelita009/web_ieclop.git"
    },
    featured: true
  },
  {
    id: "sistem-berita-online",
    title: "Sistem Berita Online",
    subtitle: "Publishing Portal & Content Management",
    category: "web-ai",
    categoryBadge: "Fullstack Web",
    year: "2025",
    summary: "Complete article publication system featuring multi-role authentication for Editors and Authors, relational schema, and robust CRUD workflows.",
    techStack: ["PHP", "MySQL / MariaDB", "Bootstrap", "Laragon"],
    achievement: "Grade A Academic Distinction",
    links: {
      github: "https://github.com/ripo-let-cooks/sistem-berita-online.git"
    },
    featured: false
  },
  {
    id: "museum-lhokseumawe",
    title: "Aplikasi Museum Lhokseumawe",
    subtitle: "Cultural Heritage Interactive Design",
    category: "mobile-uiux",
    categoryBadge: "UI/UX Design",
    year: "2025",
    summary: "Interactive mobile experience prototype featuring digital historical artifact catalog, spatial floor plans, and virtual tour navigation.",
    techStack: ["Figma", "Wireframing", "User Flow", "Design System"],
    achievement: "Grade A Academic Distinction",
    links: {
      figma: "https://www.figma.com/design/rsCgtYzWcMDL9KETVIW8b7/MDI?node-id=0-1&t=XZifm0atxQJbIGKS-1"
    },
    featured: false
  },
  {
    id: "fotografi-komposisi",
    title: "Studi Fotografi: Komposisi dan Sudut Pandang",
    subtitle: "Perspective & Lighting Exploration",
    category: "multimedia",
    categoryBadge: "Mobile Photography",
    year: "2024",
    summary: "Thematic photographic exploration examining geometric framing, natural light modulation, and intentional monochromatic grading.",
    techStack: ["iPhone XR Sensor", "Monochrome Grading", "Adobe Lightroom"],
    achievement: "Grade A Academic Distinction",
    links: {},
    featured: false
  }
];

export const experienceData = [
  {
    id: "arina-digital",
    role: "Front-End Developer Intern",
    company: "PT. Arina Digital Mandiri",
    period: "August 2026 – September 2026",
    status: "Completed",
    skills: ["Front-End Development", "HTML/CSS", "JavaScript", "Responsive Web"],
    highlights: [
      "Engineered responsive, resilient web interface components with smooth user experience.",
      "Collaborated with engineering teams on layout refinements, accessibility, and web maintenance."
    ]
  },
  {
    id: "ieclop-infocom",
    role: "Person in Charge (PIC) Web, Divisi Infokom",
    company: "UKM IECLOP Politeknik Negeri Lhokseumawe",
    period: "2025 – Present",
    status: "Active",
    skills: ["Web Architecture", "UI/UX", "Content Management", "Modular Components"],
    highlights: [
      "Lead architectural maintenance and continuous deployment for the organization's official web portal.",
      "Restructured codebase into modular components, reducing maintenance effort by 80%."
    ]
  },
  {
    id: "sagoe-media",
    role: "Video Editor Intern",
    company: "PT. Sagoe Media Kreasi (SAGOE TV)",
    period: "February 2026 – July 2026",
    status: "Completed",
    skills: ["Video Editing", "Short-form Content", "Multiplatform Distribution", "Field Camera"],
    highlights: [
      "Edited and post-produced over 150 short-form video assets across YouTube, Instagram, and TikTok.",
      "Assisted field camera operations for studio podcasts and cinematic monologues."
    ]
  },
  {
    id: "hackathon-ftp",
    role: "Vibe Coding Competition Participant",
    company: "Festival Technology Policy III 2026, PNL",
    period: "September 2026",
    status: "Finalist",
    skills: ["Vibe Coding", "Rapid AI Prototyping", "Cerebras API", "Python"],
    highlights: [
      "Engineered the Medisift AI prototype under rapid hackathon constraints utilizing AI-augmented workflows.",
      "Demonstrated rapid architectural design, API integration, and focused problem solving."
    ]
  }
];

export const skillsData = [
  {
    category: "Web & Software Engineering",
    description: "Building fast, accessible, and structured modern web and mobile interfaces.",
    skills: ["JavaScript (ES6+)", "React", "HTML5 & Modern CSS", "Flutter & Dart", "PHP & MySQL", "Tailwind CSS"]
  },
  {
    category: "Multimedia & Video Production",
    description: "Mastery of visual post-production, camera operation, and interface systems.",
    skills: ["CapCut & Adobe Premiere", "Blackmagic Camera", "Figma UI/UX", "Color Grading", "Audio Mixing"]
  },
  {
    category: "AI-Augmented Engineering Workflows",
    description: "Accelerating software delivery and digital pipelines through intelligent automation.",
    skills: ["AI Engineering Assistance", "Vibe Coding", "Prompt Engineering", "Cerebras API", "Web Optimization"]
  }
];
