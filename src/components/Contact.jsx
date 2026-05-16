import { useTheme } from '../context/ThemeContext';
import { useIntersection } from '../hooks/useIntersection';
import { T } from '../constants/data';
import { SectionLabel } from './ui/atoms';

export default function Contact() {
  const { theme } = useTheme();
  const c = T[theme];
  const { ref, visible } = useIntersection();
  const links = [
    { label: 'Email', value: 'muhammadhegazy.m@gmail.com', href: 'mailto:muhammadhegazy.m@gmail.com' },
    { label: 'Phone', value: '01127650351', href: 'tel:01127650351' },
  ];

  return (
    <section id="contact" style={{ padding: '100px 24px' }}>
      <div ref={ref} style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
        <SectionLabel text="Contact" />
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 44, fontWeight: 800, color: c.text, marginBottom: 16, lineHeight: 1.1 }}>
          Let's build something
          <br />
          <span style={{ color: c.accent }}>great together.</span>
        </h2>
        <p style={{ color: c.textSub, fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.75, marginBottom: 48 }}>
          I'm currently open to new opportunities. Whether you have a project, a question, or just want to say hi — my inbox is always open.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 24px',
                border: `1px solid ${c.border}`,
                borderRadius: 8,
                textDecoration: 'none',
                background: c.bgCard,
                transition: 'all 0.25s',
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.borderColor = c.borderHover;
                event.currentTarget.style.background = c.bgCardHover;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.borderColor = c.border;
                event.currentTarget.style.background = c.bgCard;
              }}
            >
              <span style={{ color: c.contactLabel, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{link.label}</span>
              <span style={{ color: c.accent, fontFamily: "'JetBrains Mono', monospace", fontSize: 13 }}>{link.value}</span>
            </a>
          ))}
        </div>
        <a
          href="mailto:muhammadhegazy.m@gmail.com"
          style={{ display: 'inline-block', padding: '14px 40px', background: c.accent, color: c.btnTextColor, borderRadius: 6, textDecoration: 'none', fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, transition: 'transform 0.2s, box-shadow 0.2s' }}
          onMouseEnter={(event) => {
            event.currentTarget.style.transform = 'translateY(-2px)';
            event.currentTarget.style.boxShadow = '0 12px 40px rgba(180,120,0,0.3)';
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.transform = 'translateY(0)';
            event.currentTarget.style.boxShadow = 'none';
          }}
        >
          Say Hello →
        </a>
      </div>
    </section>
  );
}
