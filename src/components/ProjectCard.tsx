import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/data/portfolio';

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, delay: index * 0.12 }}
      whileHover={{ y: -8 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={`${project.title} — project screenshot`}
          width={480}
          height={270}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.onerror = null;
            target.src =
              'data:image/svg+xml,' +
              encodeURIComponent(
                `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="270"><defs><linearGradient id="g${project.id}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%2316a34a"/><stop offset="100%" stop-color="%23052e16"/></linearGradient></defs><rect width="480" height="270" fill="url(%23g${project.id})"/><text x="50%" y="50%" font-size="24" font-family="system-ui" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="central">${project.title}</text></svg>`
              );
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub link */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
        >
          <Github size={16} />
          View on GitHub
          <ExternalLink size={14} className="opacity-60" />
        </a>
      </div>
    </motion.article>
  );
}
