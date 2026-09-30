import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const reducedMotion = useReducedMotion();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Wordmark */}
        <a
          href="#about"
          className="font-heading text-xl font-bold tracking-tight"
          aria-label="Ahmed Adel home"
        >
          Ahmed<span className="text-primary">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                activeSection === link.href.slice(1)
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-lg bg-primary/10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle theme={theme} toggle={toggleTheme} />
          <a
            href={profile.cv}
            download="Ahmed_Adel_CV.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} toggle={toggleTheme} />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-primary/10 ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary'
                      : 'text-foreground'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.cv}
                download="Ahmed_Adel_CV.pdf"
                onClick={handleLinkClick}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
