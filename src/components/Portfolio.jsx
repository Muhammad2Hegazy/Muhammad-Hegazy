import { ThemeProvider } from '../context/ThemeContext';
import GlobalStyles from './GlobalStyles';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import ExperienceSection from './ExperienceSection';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { useTheme } from '../context/ThemeContext';
import { T } from '../constants/data';

function PortfolioPage() {
  const { theme } = useTheme();
  const c = T[theme];

  return (
    <>
      <GlobalStyles />
      <div style={{ fontFamily: "'DM Sans', sans-serif", background: c.bg, color: c.text, transition: 'background 0.35s, color 0.35s', minHeight: '100vh' }}>
        <Navbar />
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default function Portfolio() {
  return (
    <ThemeProvider>
      <PortfolioPage />
    </ThemeProvider>
  );
}
