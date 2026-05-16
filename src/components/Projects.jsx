import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useIntersection } from '../hooks/useIntersection';
import { T, PROJECTS } from '../constants/data';
import { SectionLabel, Badge } from './ui/atoms';

function ProjectCard({ project, index }) {
  const { theme } = useTheme();
  const c = T[theme];
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: 32,
        border: `1px solid ${hover ? c.borderHover : c.border}`,
        borderRadius: 12,
        background: hover ? c.bgCardHover : c.bgCard,
        transition: 'all 0.3s ease',
        transform: hover ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hover ? '0 20px 60px rgba(0,0,0,0.1)' : 'none',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', top: 16, right: 20, fontFamily: "'JetBrains Mono', monospace", color: c.cardGhost, fontSize: 48, fontWeight: 800, lineHeight: 1, userSelect: 'none' }}>
        {String(index + 1).padStart(2, '0')}
      </div>
      <p style={{ color: c.accent, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.15em', marginBottom: 10, textTransform: 'uppercase' }}>{project.subtitle}</p>
      <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: c.text, fontSize: 24, marginBottom: 12 }}>{project.title}</h3>
      <p style={{ color: c.textSub, lineHeight: 1.75, fontSize: 14, fontFamily: "'DM Sans', sans-serif", marginBottom: 20 }}>{project.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {project.tech.map((item) => (
          <Badge key={item} text={item} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, visible } = useIntersection();

  return (
    <section id="projects" style={{ padding: '100px 24px' }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
        <SectionLabel text="Projects" />
        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
