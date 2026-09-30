import { motion, useReducedMotion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggle: () => void;
}

export default function ThemeToggle({ theme, toggle }: ThemeToggleProps) {
  const reducedMotion = useReducedMotion();

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/50 hover:text-primary"
    >
      <motion.span
        key={theme}
        initial={reducedMotion ? false : { opacity: 0, rotate: -90, scale: 0.5 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
      </motion.span>
    </button>
  );
}
