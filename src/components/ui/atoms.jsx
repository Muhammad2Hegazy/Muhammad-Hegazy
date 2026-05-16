import { useTheme } from '../../context/ThemeContext';
import { T } from '../../constants/data';

export function Badge({ text }) {
  const { theme } = useTheme();
  const c = T[theme];

  return (
    <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: 4, background: c.accentBg, border: `1px solid ${c.accentBorder}`, color: c.accent, fontSize: 11, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, letterSpacing: '0.04em' }}>
      {text}
    </span>
  );
}

export function SectionLabel({ text }) {
  const { theme } = useTheme();
  const c = T[theme];

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48 }}>
      <span style={{ color: c.accent, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: '0.15em' }}>//</span>
      <span style={{ color: c.accent, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{text}</span>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${c.accentBorder} 0%, transparent 100%)` }} />
    </div>
  );
}

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const c = T[theme];

  return (
    <button onClick={toggle} title="Toggle theme" style={{ background: c.toggleBg, border: `1px solid ${c.border}`, borderRadius: 8, padding: '6px 12px', cursor: 'pointer', color: c.accent, fontSize: 14, transition: 'all 0.2s', lineHeight: 1 }}>
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
