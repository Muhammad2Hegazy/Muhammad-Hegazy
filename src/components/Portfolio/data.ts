import type { NavItem, Project, SectionId, SkillGroup } from './types';

export const sectionIds: SectionId[] = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];

export const navItems: NavItem[] = [
  { label: 'About', sectionId: 'about' },
  { label: 'Experience', sectionId: 'experience' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Skills', sectionId: 'skills' },
  { label: 'Contact', sectionId: 'contact' },
];

export const projects: Project[] = [
  {
    title: 'Blood Bank Management System',
    tech: ['React', 'Next.js', 'MongoDB', 'REST APIs'],
    description:
      'Blood bank management platform for organizing donors, blood requests, inventory, and admin workflows with a responsive web interface.',
    link: '#',
  },
  {
    title: 'Tic-Tac-Toe Game',
    tech: ['React.js'],
    description:
      'Interactive XO game built with React featuring winner detection, draw conditions, and game reset functionality.',
    link: '#',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    items: [
      'ReactJS',
      'NextJS',
      'TypeScript',
      'JavaScript (ES6+)',
      'Vite',
      'TailwindCSS',
      'Shadcn/UI',
      'HTML5',
      'CSS3',
      'Responsive Design',
      'React Router',
    ],
  },
  { category: 'State Management', items: ['Context API', 'Redux Toolkit'] },
  { category: 'Database', items: ['MongoDB', 'Microsoft SQL Server', 'SQLite'] },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'GitHub', 'Gitea', 'Postman', 'VS Code', 'Antigravity', 'Cursor', 'npm'],
  },
  { category: 'Other', items: ['REST APIs', 'JWT Authentication', 'Firebase', 'Flutter', 'Agile'] },
];

export const softSkills = [
  'Problem Solving',
  'Teamwork and Collaboration',
  'Communication Skills',
  'Time Management',
  'Adaptability and Flexibility',
  'Self-learning / Continuous Improvement',
  'Ability to work under pressure',
  'Attention to detail',
];
