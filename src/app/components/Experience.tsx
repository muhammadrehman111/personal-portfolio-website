import { motion } from 'motion/react';
import { ExternalLink, Briefcase } from 'lucide-react';
import { useInView } from '@/app/components/hooks/useInView';

export function Experience() {
  const { ref, inView } = useInView();

  const experiences = [
    {
      project: 'DevOps Engineering Internship',
      link: '#',
      company: 'AKSA-SDS Islamabad, Pakistan',
      description: 'Fixed VMware ESXi VM issues, improving environment stability. Assisted in CI/CD pipeline setup using Git/GitHub Actions, reducing deployment errors by 30%. Documented release processes and version-control guidelines for team use. Streamlined workflows, enabling faster deployments and smoother operations.',
      duration: 'October – December'
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[var(--ai-purple)]/10 to-[var(--ai-cyan)]/10 border border-[var(--ai-purple)]/20 text-sm mb-6">
            Work Experience
          </span>
          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Professional{' '}
            <span className="bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.project}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="p-8 rounded-2xl border border-border bg-card relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--ai-purple)]/5 to-[var(--ai-cyan)]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-6 items-start">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] mt-1">
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3
                            className="text-2xl"
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                          >
                            {exp.project}
                          </h3>
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--ai-cyan)] hover:text-[var(--ai-purple)] transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </div>
                        
                        <div className="text-lg text-[var(--ai-purple)] mb-3">
                          {exp.company}
                        </div>
                        
                        <p className="text-foreground/70 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-2 rounded-xl bg-muted/50 border border-border text-sm whitespace-nowrap">
                    {exp.duration}
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
