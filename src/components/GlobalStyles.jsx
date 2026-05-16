import { useTheme } from '../context/ThemeContext';
import { T } from '../constants/data';

export default function GlobalStyles() {
  const { theme } = useTheme();
  const c = T[theme];

  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;600;700&display=swap');
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      ::-webkit-scrollbar { width: 5px; }
      ::-webkit-scrollbar-track { background: ${c.scrollTrack}; }
      ::-webkit-scrollbar-thumb { background: ${c.accentBorder}; border-radius: 10px; }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(24px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
      @media (max-width: 768px) {
        .about-grid, .exp-grid, .projects-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        .desktop-nav { display: none !important; }
        .hamburger { display: flex !important; }
      }
    `}</style>
  );
}
