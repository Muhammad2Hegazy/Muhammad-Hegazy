import { Menu, Moon, Sun, X } from 'lucide-react';
import { navItems } from '../data';
import type { SectionId, ThemeMode } from '../types';

type NavbarProps = {
  activeSection: SectionId;
  isMenuOpen: boolean;
  scrolled: boolean;
  theme: ThemeMode;
  onMenuToggle: () => void;
  onNavigate: (sectionId: SectionId) => void;
  onThemeToggle: () => void;
};

export function Navbar({
  activeSection,
  isMenuOpen,
  scrolled,
  theme,
  onMenuToggle,
  onNavigate,
  onThemeToggle,
}: NavbarProps) {
  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl dark:bg-slate-950/90 dark:shadow-cyan-500/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={() => onNavigate('hero')}
          aria-label="Go to home"
          className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent"
        >
          MH
        </button>

        <div className="hidden gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.sectionId}
              type="button"
              onClick={() => onNavigate(item.sectionId)}
              className={`rounded-lg px-4 py-2 transition-all duration-300 ${
                activeSection === item.sectionId
                  ? 'bg-cyan-500/20 text-cyan-400'
                  : 'text-slate-600 hover:bg-white/70 hover:text-cyan-600 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-cyan-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onThemeToggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 transition-all hover:border-cyan-500/50 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-800/50 dark:text-cyan-400 dark:hover:text-cyan-300"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            type="button"
            onClick={onMenuToggle}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            className="grid h-11 w-11 place-items-center text-cyan-500 transition-colors hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300 md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mx-6 mb-4 grid gap-2 rounded-xl border border-cyan-500/20 bg-white/95 p-4 shadow-xl shadow-cyan-500/10 backdrop-blur-xl dark:bg-slate-900/95 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.sectionId}
              type="button"
              onClick={() => onNavigate(item.sectionId)}
              className="rounded-lg px-4 py-3 text-left text-slate-700 transition-all hover:bg-cyan-500/10 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
