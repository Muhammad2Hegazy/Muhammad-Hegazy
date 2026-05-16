import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useIntersection } from '../hooks/useIntersection';
import { T, SKILLS } from '../constants/data';
import { SectionLabel } from './ui/atoms';

function SkillGroup({ skill }) {
  const { theme } = useTheme();
  const c = T[theme];
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: 24,
        border: `1px solid ${hover ? c.borderHover : c.border}`,
        borderRadius: 10,
        background: c.bgCard,
        transition: 'border-color 0.25s',
      }}
    >
      <p style={{ fontFamily: "'JetBrains Mono', monospace", color: c.accent, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>{skill.category}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
        {skill.items.map((item) => (
          <span key={item} style={{ padding: '5px 11px', borderRadius: 4, background: c.skillTag, border: `1px solid ${c.skillTagBorder}`, color: c.skillTagText, fontSize: 12, fontFamily: "'DM Sans', sans-serif" }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { theme } = useTheme();
  const c = T[theme];
  const { ref, visible } = useIntersection();

  return (
    <section id="skills" style={{ padding: '100px 24px', background: c.bgAlt, borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}` }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
        <SectionLabel text="Technical Skills" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
          {SKILLS.map((skill) => (
            <SkillGroup key={skill.category} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
