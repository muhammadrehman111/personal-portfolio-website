import { motion } from 'motion/react';
import { useInView } from '@/app/components/hooks/useInView';

export function Skills() {
  const { ref, inView } = useInView();

  const skills = [
    { name: 'Docker', percentage: 95 },
    { name: 'Kubernetes', percentage: 50 },
    { name: 'AWS', percentage: 80 },
    { name: 'GitHub Actions CI/CD', percentage: 85 },
    { name: 'ReactJS', percentage: 90 },
    { name: 'NodeJS', percentage: 85 },
    { name: 'MongoDB', percentage: 80 },
    { name: 'Java', percentage: 75 },
    { name: 'C/C++', percentage: 70 },
    { name: 'DevOps Practices', percentage: 80 },
  ];

  return (
    <section id="skills" ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[var(--ai-purple)]/10 to-[var(--ai-cyan)]/10 border border-[var(--ai-purple)]/20 text-sm mb-6">
            Skills
          </span>
          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Technical{' '}
            <span className="bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-foreground">{skill.name}</span>
                <span className="text-sm text-foreground/60">{skill.percentage}%</span>
              </div>

              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.percentage}%` } : {}}
                  transition={{ delay: index * 0.05 + 0.2, duration: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] rounded-full relative"
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}