import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { useInView } from '@/app/components/hooks/useInView';

export function Education() {
  const { ref, inView } = useInView();

  const education = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      institute: 'University of Central Punjab (UCP) Lahore, Pakistan',
      duration: '2022 – present',
      gpa: '3.44 CGPA'
    },
    {
      degree: 'Intermediate (Pre-Engineering)',
      institute: 'Government Islamia College Kasur, Pakistan',
      duration: '2019 – 2021',
      gpa: 'A Grade'
    }
  ];

  return (
    <section id="education" ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[var(--ai-purple)]/10 to-[var(--ai-cyan)]/10 border border-[var(--ai-purple)]/20 text-sm mb-6">
            Education
          </span>
          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Academic{' '}
            <span className="bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] bg-clip-text text-transparent">
              Background
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-8 rounded-2xl border border-border bg-card relative overflow-hidden group"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--ai-purple)]/5 to-[var(--ai-cyan)]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] flex items-center justify-center mb-6">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>

                <h3
                  className="text-xl mb-4 leading-snug"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {edu.degree}
                </h3>

                <div className="text-[var(--ai-purple)] mb-4">
                  {edu.institute}
                </div>

                <div className="flex items-center justify-between">
                  <div className="px-4 py-2 rounded-xl bg-muted/50 border border-border text-sm">
                    {edu.duration}
                  </div>
                  <div className="text-sm">
                    <span className="text-foreground/60">GPA: </span>
                    <span className="bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] bg-clip-text text-transparent">
                      {edu.gpa}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
