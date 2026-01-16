import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';
import { useInView } from '@/app/components/hooks/useInView';

export function Certificates() {
  const { ref, inView } = useInView();

  const certificates = [
    {
      title: 'AWS Certified Solutions Architect',
      institute: 'Amazon Web Services',
      duration: '2023 - 2026',
      score: 'Professional Level',
      link: 'https://aws.amazon.com/certification/'
    },
    {
      title: 'Google Cloud Professional Developer',
      institute: 'Google Cloud Platform',
      duration: '2022 - 2025',
      score: '95%',
      link: 'https://cloud.google.com/certification'
    },
    {
      title: 'Meta Front-End Developer Professional',
      institute: 'Meta (Facebook)',
      duration: '2022',
      score: '98%',
      link: 'https://www.coursera.org/professional-certificates/meta-front-end-developer'
    },
    {
      title: 'Microsoft Azure AI Engineer',
      institute: 'Microsoft',
      duration: '2023 - 2025',
      score: 'Associate Level',
      link: 'https://learn.microsoft.com/en-us/certifications/'
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[var(--ai-purple)]/10 to-[var(--ai-cyan)]/10 border border-[var(--ai-purple)]/20 text-sm mb-6">
            Certifications
          </span>
          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Professional{' '}
            <span className="bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl border border-border bg-card relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--ai-purple)]/5 to-[var(--ai-cyan)]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)]">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-[var(--ai-cyan)]" />
                  </a>
                </div>

                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {cert.title}
                </h3>

                <div className="text-[var(--ai-purple)] mb-4">
                  {cert.institute}
                </div>

                <div className="flex items-center justify-between">
                  <div className="px-3 py-1.5 rounded-lg bg-muted/50 border border-border text-sm">
                    {cert.duration}
                  </div>
                  <div className="text-sm bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] bg-clip-text text-transparent">
                    {cert.score}
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
