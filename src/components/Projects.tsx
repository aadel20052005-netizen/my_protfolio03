import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { projects, profile } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="A selection of real-world projects showcasing my work in Python OOP, SQL data analysis, and database modeling."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            <Github size={18} />
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
