import { motion } from 'framer-motion';
import { FolderGit2, Award, Heart } from 'lucide-react';
import { stats } from '@/data/portfolio';
import { useCountUp } from '@/hooks/useCountUp';

const iconMap: Record<string, typeof FolderGit2> = {
  FolderGit2,
  Award,
  Heart,
};

function StatCard({ stat, index }: { stat: (typeof stats)[number]; index: number }) {
  const { ref, count } = useCountUp(stat.value);
  const Icon = iconMap[stat.icon] ?? FolderGit2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-shadow hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
        <Icon size={24} />
      </div>
      <div className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        <span ref={ref}>{count}</span>
        <span className="text-primary">{stat.suffix}</span>
      </div>
      <div className="mt-2 text-sm font-semibold text-foreground">{stat.label}</div>
      <div className="mt-1 text-xs text-muted-foreground">{stat.subtext}</div>
    </motion.div>
  );
}

export default function StatsBar() {
  return (
    <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8" aria-label="Quick stats">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} />
        ))}
      </div>
    </section>
  );
}
