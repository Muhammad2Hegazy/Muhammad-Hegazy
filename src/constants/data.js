export const T = {
  dark: {
    bg: '#0A0A0E',
    bgAlt: 'rgba(255,255,255,0.018)',
    bgCard: 'rgba(255,255,255,0.025)',
    bgCardHover: 'rgba(250,200,100,0.04)',
    border: 'rgba(255,255,255,0.07)',
    borderHover: 'rgba(250,200,100,0.35)',
    navBg: 'rgba(10,10,14,0.93)',
    navBorder: 'rgba(255,255,255,0.06)',
    text: '#FFFFFF',
    textSub: 'rgba(255,255,255,0.55)',
    textMuted: 'rgba(255,255,255,0.3)',
    accent: '#FAC864',
    accentBg: 'rgba(250,200,100,0.12)',
    accentBorder: 'rgba(250,200,100,0.3)',
    skillTag: 'rgba(255,255,255,0.05)',
    skillTagBorder: 'rgba(255,255,255,0.09)',
    skillTagText: 'rgba(255,255,255,0.7)',
    scrollTrack: '#0A0A0E',
    gridLine: 'rgba(250,200,100,0.035)',
    glowColor: 'rgba(250,200,100,0.07)',
    footerBorder: 'rgba(255,255,255,0.06)',
    footerText: 'rgba(255,255,255,0.2)',
    contactLabel: 'rgba(255,255,255,0.35)',
    toggleBg: 'rgba(255,255,255,0.07)',
    mobileMenuBg: 'rgba(10,10,14,0.98)',
    cardGhost: 'rgba(250,200,100,0.15)',
    btnTextColor: '#0A0A0E',
  },
  light: {
    bg: '#F7F6F2',
    bgAlt: 'rgba(0,0,0,0.025)',
    bgCard: 'rgba(255,255,255,0.9)',
    bgCardHover: 'rgba(200,130,10,0.05)',
    border: 'rgba(0,0,0,0.09)',
    borderHover: 'rgba(200,130,10,0.45)',
    navBg: 'rgba(247,246,242,0.93)',
    navBorder: 'rgba(0,0,0,0.07)',
    text: '#111111',
    textSub: 'rgba(0,0,0,0.55)',
    textMuted: 'rgba(0,0,0,0.35)',
    accent: '#B8720A',
    accentBg: 'rgba(184,114,10,0.08)',
    accentBorder: 'rgba(184,114,10,0.28)',
    skillTag: 'rgba(0,0,0,0.04)',
    skillTagBorder: 'rgba(0,0,0,0.09)',
    skillTagText: 'rgba(0,0,0,0.65)',
    scrollTrack: '#F7F6F2',
    gridLine: 'rgba(184,114,10,0.06)',
    glowColor: 'rgba(184,114,10,0.08)',
    footerBorder: 'rgba(0,0,0,0.08)',
    footerText: 'rgba(0,0,0,0.3)',
    contactLabel: 'rgba(0,0,0,0.4)',
    toggleBg: 'rgba(0,0,0,0.06)',
    mobileMenuBg: 'rgba(247,246,242,0.99)',
    cardGhost: 'rgba(184,114,10,0.1)',
    btnTextColor: '#FFFFFF',
  },
};

export const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

export const SKILLS = [
  { category: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'TailwindCSS', 'Shadcn/UI', 'HTML5', 'CSS3', 'Vite', 'React Router'] },
  { category: 'State Management', items: ['Context API', 'Redux Toolkit'] },
  { category: 'Database', items: ['MongoDB', 'Microsoft SQL Server', 'SQLite'] },
  { category: 'Tools & DevOps', items: ['Git', 'GitHub', 'Gitea', 'Postman', 'VS Code', 'npm'] },
  { category: 'Other', items: ['REST APIs', 'JWT Authentication', 'Firebase', 'Flutter', 'Agile'] },
];

export const PROJECTS = [
  { title: 'Todo List', subtitle: 'Full Stack ReactJS', description: 'A full-stack To-Do List app featuring real-time task management built with Next.js API routes, Prisma ORM, and MongoDB.', tech: ['Next.js', 'React', 'Prisma', 'MongoDB'] },
  { title: 'Tic-Tac-Toe', subtitle: 'ReactJS', description: 'XO Game with two-player mode, winner detection, draw condition handling, and game reset on a classic 3×3 grid.', tech: ['React', 'JavaScript', 'CSS3'] },
];

export const EXPERIENCE = [
  { role: 'Frontend Developer', company: 'T for IT — Tamawal', period: 'Aug 2025 – Present', description: 'Developed responsive Admin and Provider portals using React.js and Next.js. Integrated REST APIs, collaborated with backend developers, and built reusable UI components for scalable web applications.' },
];

export const EDUCATION = [
  { school: 'MTI University', degree: 'BSc in Computers & AI', period: 'Oct 2021 – Jun 2025' },
];

export const SOFT_SKILLS = [
  'Problem Solving',
  'Teamwork & Collaboration',
  'Communication',
  'Time Management',
  'Adaptability',
  'Self-learning',
  'Works Under Pressure',
  'Attention to Detail',
];
