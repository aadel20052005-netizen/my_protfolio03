import { Linkedin, Github, Mail } from 'lucide-react';
import { profile, navLinks } from '@/data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
    { label: 'GitHub', href: profile.github, icon: Github },
    { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
  ];

  return (
    <footer className="border-t border-border bg-card/50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Signature quote */}
        <div className="flex flex-col items-center text-center">
          <span className="text-5xl leading-none text-primary/30 select-none">&ldquo;</span>
          <p className="-mt-2 text-2xl font-bold italic tracking-tight text-foreground sm:text-3xl md:text-4xl">
            <span className="text-primary">In my mind,</span> I am always the best.
          </p>
          <span className="text-5xl leading-none text-primary/30 select-none">&rdquo;</span>
        </div>

        {/* Social icons */}
        <div className="mt-10 flex items-center justify-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('mailto') ? undefined : '_blank'}
              rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:scale-110 hover:border-primary/50 hover:text-primary"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>

        {/* Quick nav */}
        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {year} Ahmed Adel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
