import { motion } from 'motion/react';
import { ExternalLink, Briefcase, GraduationCap } from 'lucide-react';
import { useInView } from '@/app/components/hooks/useInView';
import { useState } from 'react';

type TabType = 'experience' | 'education';

export function Journey() {
  const { ref, inView } = useInView();
  const [activeTab, setActiveTab] = useState<TabType>('experience');

  const experiences = [
    {
      project: 'DevOps Engineer Intern',
      link: '#',
      company: 'AKSA-SDS Islamabad, Pakistan',
      description: 'Fixed VMware ESXi VM issues, improving environment stability. Assisted in CI/CD pipeline setup using Git/GitHub Actions, reducing deployment errors by 30%. Documented release processes and version-control guidelines for team use. Streamlined workflows, enabling faster deployments and smoother operations.',
      duration: 'October – December'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      institute: 'University of Central Punjab (UCP) Lahore, Pakistan',
      duration: '2022 – present',
      gpa: '3.44 CGPA',
      description: 'Maintained 3.44 CGPA while completing advanced software engineering courses. Developed 5+ MERN-stack & DevOps-related academic projects with real-world applications.'
    },
    {
      degree: 'Intermediate (Pre-Engineering)',
      institute: 'Government Islamia College Kasur, Pakistan',
      duration: '2019 – 2021',
      gpa: 'A Grade',
      description: 'Achieved an A Grade with full scholarship for academic excellence. Demonstrated strong skills in mathematics and foundational engineering concepts.'
    }
  ];

  const certificates = [
    // No certificates listed
  ];

  const tabs = [
    { id: 'experience' as TabType, label: 'Work Experience', icon: Briefcase, count: experiences.length },
    { id: 'education' as TabType, label: 'Education', icon: GraduationCap, count: education.length }
  ];

  return (
    <section id="experience" ref={ref} className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[var(--ai-purple)]/10 to-[var(--ai-cyan)]/10 border border-[var(--ai-purple)]/20 text-sm mb-6">
            My Journey
          </span>
          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Professional{' '}
            <span className="bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 rounded-xl flex items-center gap-3 transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] text-white shadow-lg shadow-[var(--ai-purple)]/20'
                  : 'bg-card border border-border hover:border-[var(--ai-purple)]/50'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                activeTab === tab.id ? 'bg-white/20' : 'bg-muted'
              }`}>
                {tab.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <div className="min-h-[600px]">
          {/* Experience */}
          {activeTab === 'experience' && (
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.project}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                  className="group relative"
                >
                  <div className="p-8 rounded-2xl border border-border bg-card relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--ai-purple)]/5 to-[var(--ai-cyan)]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-6 items-start">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] mt-1 shrink-0">
                            <Briefcase className="w-5 h-5 text-white" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2 flex-wrap">
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
          )}

          {/* Education */}
          {activeTab === 'education' && (
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="p-8 rounded-2xl border border-border bg-card relative overflow-hidden group"
                >
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

                    <div className="text-[var(--ai-purple)] mb-3">
                      {edu.institute}
                    </div>

                    <p className="text-foreground/60 text-sm mb-4">
                      {edu.description}
                    </p>

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
          )}
        </div>
      </div>
    </section>
  );
}
