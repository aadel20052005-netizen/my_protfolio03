import { motion } from 'framer-motion';
import { Code2, Database, BrainCircuit, Sigma, Workflow, Award } from 'lucide-react';
import { skillCategories, certifications } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

const iconMap: Record<string, typeof Code2> = {
  Code2,
  Database,
  BrainCircuit,
  Sigma,
  Workflow,
};

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Expertise"
          title="Skills & Tech Stack"
          subtitle="The tools and technologies I use to build data-driven solutions."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon] ?? Code2;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="cursor-default rounded-full border border-border bg-muted/40 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Certifications card spanning full width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: skillCategories.length * 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 sm:col-span-2 lg:col-span-3"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Award size={20} />
              </div>
              <h3 className="text-lg font-bold text-foreground">Certifications</h3>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {certifications.map((cert, certIndex) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: certIndex * 0.1 }}
                  className="flex items-start gap-3 rounded-xl border border-border bg-muted/30 p-4"
                >
                  <Award size={20} className="mt-0.5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{cert.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
