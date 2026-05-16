import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { sectionIds } from './data';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Education } from './sections/Education';
import { Experience } from './sections/Experience';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import type { SectionId, ThemeMode } from './types';

const getInitialTheme = (): ThemeMode => {
  const storedTheme = window.localStorage.getItem('portfolio-theme');

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const current = sectionIds.find((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`${theme} min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_18%_0%,rgba(6,182,212,0.14),transparent_32rem),radial-gradient(circle_at_88%_12%,rgba(168,85,247,0.1),transparent_28rem),linear-gradient(135deg,#f8fafc_0%,#eff6ff_48%,#ffffff_100%)] [font-family:'Space_Grotesk',system-ui,sans-serif] text-slate-900 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_18%_0%,rgba(34,211,238,0.08),transparent_32rem),radial-gradient(circle_at_88%_12%,rgba(168,85,247,0.08),transparent_28rem),linear-gradient(135deg,#020617_0%,#0f172a_48%,#020617_100%)] dark:text-slate-100`}
    >
      <Navbar
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        scrolled={scrolled}
        theme={theme}
        onMenuToggle={() => setIsMenuOpen((open) => !open)}
        onNavigate={scrollToSection}
        onThemeToggle={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
      />
      <main>
        <Hero onNavigate={scrollToSection} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
