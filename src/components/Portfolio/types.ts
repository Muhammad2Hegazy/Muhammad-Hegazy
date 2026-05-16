export type SectionId = 'hero' | 'about' | 'experience' | 'projects' | 'skills' | 'education' | 'contact';

export type ThemeMode = 'light' | 'dark';

export type NavItem = {
  label: string;
  sectionId: SectionId;
};

export type Project = {
  title: string;
  tech: string[];
  description: string;
  link: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};
