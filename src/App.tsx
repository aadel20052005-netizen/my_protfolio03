import { useTheme } from '@/hooks/useTheme';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <StatsBar />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
