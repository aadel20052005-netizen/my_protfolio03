import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion';
import { MapPin, Download, ArrowDown, Linkedin, Github, Mail } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profile.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
    }),
  };

  const socialIcons: Record<string, typeof Linkedin> = {
    Linkedin,
    Github,
    Mail,
  };

  return (
    <section
      id="about"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center overflow-hidden pt-16 scroll-mt-24"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Text column */}
        <div className="order-2 lg:order-1">
          <motion.span
            custom={0}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            Open to opportunities
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            id="hero-heading"
            className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I'm <span className="text-primary">Ahmed Adel</span>
          </motion.h1>

          <motion.div
            custom={2}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-3 h-8 overflow-hidden text-xl font-semibold text-foreground sm:text-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {profile.roles[roleIndex]}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.p
            custom={3}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-4 flex items-center gap-2 text-muted-foreground"
          >
            <MapPin size={18} className="text-primary" />
            <span>{profile.location}</span>
          </motion.div>

          <motion.div
            custom={6}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={profile.cv}
              download="Ahmed_Adel_CV.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
            >
              <Download size={18} />
              Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              View Projects
              <ArrowDown size={18} />
            </a>
          </motion.div>

          {/* Social row */}
          <motion.div
            custom={7}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex items-center gap-3"
          >
            {[
              { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
              { label: 'GitHub', href: profile.github, icon: Github },
              { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:scale-110 hover:border-primary/50 hover:text-primary hover:shadow-lg hover:shadow-primary/20"
              >
                <social.icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Photo column */}
        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            {/* Rotating dashed ring */}
            <div className="absolute inset-0 -z-10 animate-spin-slow rounded-full border-2 border-dashed border-primary/30" />

            {/* Glowing border wrapper */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/40 shadow-2xl shadow-primary/20 animate-glow-pulse sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <img
                src={profile.photo}
                alt="Ahmed Adel — Machine Learning Engineer & Data Scientist"
                width={384}
                height={384}
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    'data:image/svg+xml,' +
                    encodeURIComponent(
                      `<svg xmlns="http://www.w3.org/2000/svg" width="384" height="384"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%2316a34a"/><stop offset="100%" stop-color="%23052e16"/></linearGradient></defs><rect width="384" height="384" fill="url(%23g)"/><text x="50%" y="50%" font-size="120" font-family="system-ui" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="central">AA</text></svg>`
                    );
                }}
              />
            </div>

            {/* Floating accent dots */}
            <motion.div
              animate={reducedMotion ? {} : { y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 top-12 h-4 w-4 rounded-full bg-primary/60"
            />
            <motion.div
              animate={reducedMotion ? {} : { y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-6 bottom-16 h-3 w-3 rounded-full bg-primary/40"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
