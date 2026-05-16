import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { T } from '../constants/data';

export default function ScrollToTop() {
  const { theme } = useTheme();
  const c = T[theme];
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) {
    return null;
  }

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        zIndex: 50,
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: c.accent,
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: c.btnTextColor,
        fontSize: 18,
        fontWeight: 700,
        boxShadow: '0 8px 30px rgba(180,120,0.3)',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={(event) => {
        event.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.transform = 'scale(1)';
      }}
    >
      ↑
    </button>
  );
}
