import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Download, Send } from 'lucide-react';
import { profile } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const contactCards = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: 'LinkedIn',
      value: 'ahmed-adel-ml',
      href: profile.linkedin,
      icon: Linkedin,
      external: true,
    },
    {
      label: 'GitHub',
      value: 'aadel20052005-netizen',
      href: profile.github,
      icon: Github,
      external: true,
    },
    {
      label: 'Location',
      value: profile.location,
      href: null,
      icon: MapPin,
      external: false,
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's Work Together"
          subtitle="Have a project in mind or just want to connect? I'm always open to discussing new opportunities and ideas."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {contactCards.map((card, index) => {
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <card.icon size={22} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {card.label}
                  </p>
                  <p className="mt-0.5 truncate text-sm font-semibold text-foreground">
                    {card.value}
                  </p>
                </div>
              </motion.div>
            );

            if (card.href) {
              return (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noopener noreferrer' : undefined}
                  aria-label={`${card.label}: ${card.value}`}
                  className="block"
                >
                  {content}
                </a>
              );
            }
            return (
              <div key={card.label}>{content}</div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
          >
            <Send size={18} />
            Send me an email
          </a>
          <a
            href={profile.cv}
            download="Ahmed_Adel_CV.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Download size={18} />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
