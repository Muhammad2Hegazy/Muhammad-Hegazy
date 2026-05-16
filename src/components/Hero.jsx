import { useTheme } from '../context/ThemeContext';
import { T } from '../constants/data';
import { smoothScrollTo } from '../utils/scroll';

export default function Hero() {
  const { theme } = useTheme();
  const c = T[theme];

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 24px 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundImage: `linear-gradient(${c.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${c.gridLine} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      <div style={{ position: 'absolute', top: '20%', left: '60%', width: 500, height: 500, background: `radial-gradient(circle, ${c.glowColor} 0%, transparent 70%)`, transform: 'translate(-50%,-50%)', zIndex: 0, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: c.accent, fontSize: 13, letterSpacing: '0.18em', marginBottom: 24, opacity: 0.85, animation: 'fadeUp 0.6s ease both' }}>
          const developer = {'{'}
        </p>
        <h1 style={{ fontSize: 'clamp(42px, 8vw, 86px)', fontFamily: "'Syne', sans-serif", fontWeight: 800, color: c.text, lineHeight: 1.05, marginBottom: 8, letterSpacing: '-0.02em', animation: 'fadeUp 0.6s 0.1s ease both' }}>
          Muhammad
          <br />
          <span style={{ color: c.accent }}>Hegazy</span>
        </h1>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: c.textMuted, fontSize: 13, marginBottom: 32, marginTop: 4, animation: 'fadeUp 0.6s 0.15s ease both' }}>{'}'}</p>
        <p style={{ fontSize: 17, color: c.textSub, maxWidth: 480, lineHeight: 1.75, marginBottom: 40, fontFamily: "'DM Sans', sans-serif", animation: 'fadeUp 0.6s 0.2s ease both' }}>
          Frontend Developer crafting performant, accessible web apps with React & Next.js. Passionate about clean architecture and pixel-perfect UIs.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', animation: 'fadeUp 0.6s 0.3s ease both' }}>
          <button
            onClick={() => smoothScrollTo('projects')}
            style={{ padding: '12px 28px', background: c.accent, color: c.btnTextColor, borderRadius: 6, border: 'none', cursor: 'pointer', fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, transition: 'transform 0.2s, box-shadow 0.2s' }}
            onMouseEnter={(event) => {
              event.currentTarget.style.transform = 'translateY(-2px)';
              event.currentTarget.style.boxShadow = '0 8px 30px rgba(180,120,0,0.3)';
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.transform = 'translateY(0)';
              event.currentTarget.style.boxShadow = 'none';
            }}
          >
            View Projects
          </button>
          <button
            onClick={() => smoothScrollTo('contact')}
            style={{ padding: '12px 28px', border: `1px solid ${c.accentBorder}`, color: c.accent, borderRadius: 6, background: 'transparent', cursor: 'pointer', fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, transition: 'background 0.2s' }}
            onMouseEnter={(event) => {
              event.currentTarget.style.background = c.accentBg;
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.background = 'transparent';
            }}
          >
            Get in Touch
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 56, flexWrap: 'wrap', animation: 'fadeUp 0.6s 0.4s ease both' }}>
          <span style={{ color: c.textMuted, fontSize: 13, fontFamily: "'JetBrains Mono', monospace" }}>📍 Qaliobia, Egypt</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', borderRadius: 20, padding: '4px 12px' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#34D399', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ color: '#34D399', fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}>Open to work</span>
          </span>
        </div>
      </div>
    </section>
  );
}
