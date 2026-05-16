import { useTheme } from '../context/ThemeContext';
import { useIntersection } from '../hooks/useIntersection';
import { T, SOFT_SKILLS } from '../constants/data';
import { SectionLabel } from './ui/atoms';

export default function About() {
  const { theme } = useTheme();
  const c = T[theme];
  const { ref, visible } = useIntersection();

  return (
    <section id="about" style={{ padding: '100px 24px' }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
        <SectionLabel text="About Me" />
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 800, color: c.text, marginBottom: 20, lineHeight: 1.2 }}>
              Building the web,
              <br />
              <span style={{ color: c.accent }}>one component at a time.</span>
            </h2>
            <p style={{ color: c.textSub, lineHeight: 1.85, fontSize: 15, fontFamily: "'DM Sans', sans-serif", marginBottom: 16 }}>
              I'm a Frontend Developer from Egypt with a BSc in Computers & AI from MTI University. I specialize in building scalable, performant web applications using React and Next.js.
            </p>
            <p style={{ color: c.textSub, lineHeight: 1.85, fontSize: 15, fontFamily: "'DM Sans', sans-serif" }}>
              Currently at T for IT (Tamawal), I focus on reusable component libraries, REST API integration, and delivering polished Admin & Provider portals.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", color: c.accent, fontSize: 11, letterSpacing: '0.15em', marginBottom: 16, textTransform: 'uppercase' }}>Soft Skills</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {SOFT_SKILLS.map((skill) => (
                <span key={skill} style={{ padding: '6px 14px', borderRadius: 4, background: c.skillTag, border: `1px solid ${c.skillTagBorder}`, color: c.skillTagText, fontSize: 12, fontFamily: "'DM Sans', sans-serif" }}>
                  {skill}
                </span>
              ))}
            </div>
            <div style={{ marginTop: 32, padding: 20, border: `1px solid ${c.accentBorder}`, borderRadius: 8, background: c.accentBg }}>
              <p style={{ color: c.textMuted, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.1em', marginBottom: 8 }}>// Contact</p>
              <p style={{ color: c.accent, fontFamily: "'JetBrains Mono', monospace", fontSize: 13 }}>muhammadhegazy.m@gmail.com</p>
              <p style={{ color: c.textSub, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, marginTop: 4 }}>01127650351</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
