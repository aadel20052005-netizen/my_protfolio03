import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  children,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${alignment} gap-3`}
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && (
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
      {children}
    </motion.div>
  );
}
