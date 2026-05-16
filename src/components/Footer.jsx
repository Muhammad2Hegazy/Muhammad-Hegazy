import { useTheme } from '../context/ThemeContext';
import { T } from '../constants/data';

export default function Footer() {
  const { theme } = useTheme();
  const c = T[theme];

  return (
    <footer style={{ borderTop: `1px solid ${c.footerBorder}`, padding: 24, display: 'flex', justifyContent: 'center' }}>
      <p style={{ color: c.footerText, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.1em' }}>
        © 2025 Muhammad Hegazy — Built with React + TypeScript
      </p>
    </footer>
  );
}
