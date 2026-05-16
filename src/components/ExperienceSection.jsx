import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useIntersection } from '../hooks/useIntersection';
import { T, EXPERIENCE, EDUCATION } from '../constants/data';
import { SectionLabel, Badge } from './ui/atoms';

function ExperienceCard({ exp }) {
  const { theme } = useTheme();
  const c = T[theme];
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '28px 32px',
        border: `1px solid ${hover ? c.borderHover : c.border}`,
        borderRadius: 10,
        background: hover ? c.bgCardHover : c.bgCard,
        position: 'relative',
        overflow: 'hidden',
        transform: hover ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'all 0.25s ease',
        boxShadow: hover ? '0 12px 40px rgba(0,0,0,0.07)' : 'none',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: c.accent, borderRadius: '10px 0 0 10px' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
        <div>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: c.text, fontSize: 18, marginBottom: 4 }}>{exp.role}</h3>
          <p style={{ color: c.accent, fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>{exp.company}</p>
        </div>
        <Badge text={exp.period} />
      </div>
      <p style={{ color: c.textSub, lineHeight: 1.75, fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>{exp.description}</p>
    </div>
  );
}

function EducationCard({ edu }) {
  const { theme } = useTheme();
  const c = T[theme];
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '20px 24px',
        border: `1px solid ${hover ? c.borderHover : c.border}`,
        borderRadius: 8,
        background: c.bgCard,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 8,
        transition: 'border-color 0.25s',
      }}
    >
      <div>
        <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: c.text, fontSize: 16 }}>{edu.school}</p>
        <p style={{ color: c.textSub, fontFamily: "'DM Sans', sans-serif", fontSize: 13, marginTop: 3 }}>{edu.degree}</p>
      </div>
      <Badge text={edu.period} />
    </div>
  );
}

export default function ExperienceSection() {
  const { theme } = useTheme();
  const c = T[theme];
  const { ref, visible } = useIntersection();

  return (
    <section id="experience" style={{ padding: '100px 24px', background: c.bgAlt, borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}` }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
        <SectionLabel text="Experience & Education" />
        <div className="exp-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 32 }}>
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", color: c.textMuted, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Work</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {EXPERIENCE.map((item, index) => (
                <ExperienceCard key={index} exp={item} />
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", color: c.textMuted, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Education</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {EDUCATION.map((item, index) => (
                <EducationCard key={index} edu={item} />
              ))}
            </div>
            <div style={{ marginTop: 20, padding: '20px 24px', border: `1px solid ${c.border}`, borderRadius: 8, background: c.bgCard }}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", color: c.textMuted, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>Certifications</p>
              {['React.JS — Udemy', 'JavaScript — Udemy'].map((certificate) => (
                <div key={certificate} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <span style={{ color: c.accent, fontSize: 12 }}>▸</span>
                  <span style={{ color: c.textSub, fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>{certificate}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
