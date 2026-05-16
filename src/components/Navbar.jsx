import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { T, NAV_ITEMS } from '../constants/data';
import { smoothScrollTo } from '../utils/scroll';
import { ThemeToggle } from './ui/atoms';

export default function Navbar() {
  const { theme } = useTheme();
  const c = T[theme];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '0 24px', background: scrolled ? c.navBg : 'transparent', backdropFilter: scrolled ? 'blur(14px)' : 'none', borderBottom: scrolled ? `1px solid ${c.navBorder}` : 'none', transition: 'all 0.35s ease' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <button onClick={() => smoothScrollTo('hero')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", color: c.accent, fontWeight: 700, fontSize: 16 }}>
            MH<span style={{ color: c.text }}>.</span>
          </span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div className="desktop-nav" style={{ display: 'flex', gap: 28 }}>
            {NAV_ITEMS.map((navItem) => (
              <button
                key={navItem.id}
                onClick={() => smoothScrollTo(navItem.id)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: c.textSub, fontSize: 13, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.06em', padding: '4px 0', transition: 'color 0.2s' }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.color = c.accent;
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.color = c.textSub;
                }}
              >
                {navItem.label}
              </button>
            ))}
          </div>

          <ThemeToggle />
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: 5, padding: 4 }}
          >
            {[0, 1, 2].map((index) => (
              <span key={index} style={{ display: 'block', width: 22, height: 2, background: c.accent, borderRadius: 2 }} />
            ))}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ background: c.mobileMenuBg, padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 16, borderTop: `1px solid ${c.navBorder}` }}>
          {NAV_ITEMS.map((navItem) => (
            <button
              key={navItem.id}
              onClick={() => {
                smoothScrollTo(navItem.id);
                setMenuOpen(false);
              }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: c.textSub, fontSize: 14, textAlign: 'left', fontFamily: "'JetBrains Mono', monospace", padding: '4px 0' }}
            >
              {navItem.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
