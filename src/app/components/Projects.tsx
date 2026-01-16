import { motion } from 'motion/react';
import { ExternalLink, Github, X } from 'lucide-react';
import { useInView } from '@/app/components/hooks/useInView';
import { useState } from 'react';

export function Projects() {
  const { ref, inView } = useInView();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1759978244716-ed4b77300a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBwcm9qZWN0fGVufDF8fHx8MTc2ODM4MDAxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'TravelEase Web App',
      description: 'A travel platform featuring booking cart, destination filtering, and seamless deployment workflows.',
      fullDescription: 'Designed a travel platform that featured a booking cart and destination filtering, directly contributing to the platform\'s successful deployment and positive feedback from 5+ users. Integrated CI/CD pipelines and automation for testing, deployment, and version control. Enhanced UX with secure data validation, session handling, and seamless deployment workflows.',
      tags: ['ReactJS', 'NodeJS', 'MongoDB', 'CI/CD', 'GitHub Actions'],
      link: 'https://github.com/muhammadrehman111/TravelEase',
      github: 'https://github.com/muhammadrehman111/TravelEase'
    },
    {
      image: 'https://images.unsplash.com/photo-1563486299190-d415ab26e837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY4MzgwMDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'CarFleet Web App',
      description: 'Containerized multi-service web app with Docker, secure environment variables, and Redis caching.',
      fullDescription: 'Developed and deployed a containerized multi-service app (backend, frontend, database) using Docker & Docker Compose. Configured secure environment variables and Docker networking, enabling seamless communication across 3+ services. Optimized performance with Redis caching and scalable architecture, improving response time by ~30%.',
      tags: ['Docker', 'Docker Compose', 'Redis', 'NodeJS', 'MongoDB'],
      link: 'https://github.com/muhammadrehman111/carfleet-web-app',
      github: 'https://github.com/muhammadrehman111/carfleet-web-app'
    },
    {
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0JTIwYXBwbGljYXRpb258ZW58MXx8fHwxNzY4MzgwMDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Backend Chatting App',
      description: 'A simple backend messaging server built with JavaScript for real-time chat applications.',
      fullDescription: 'This project implements core backend logic needed for a real-time chat application. It focuses on REST endpoints and data handling for sending and retrieving messages. A solid foundation for expanding into real-time applications with potential for websocket integration.',
      tags: ['Node.js', 'Express', 'JavaScript', 'REST APIs'],
      link: 'https://github.com/muhammadrehman111/backend-chatting-app',
      github: 'https://github.com/muhammadrehman111/backend-chatting-app'
    },
    {
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrZ3JvdW5kJTIwY2hhbmdlcnxlbnwxfHx8fDE3NjgzODAwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Background Changer Project',
      description: 'Interactive front-end utility to change background styles dynamically with DOM manipulation.',
      fullDescription: 'This small but engaging UI project allows users to change page backgrounds through button interaction. A fun way to explore DOM manipulation and event handling with a simple and responsive interface.',
      tags: ['JavaScript', 'HTML', 'CSS','React', 'DOM Manipulation'],
      link: 'https://github.com/muhammadrehman111/background-changer-project',
      github: 'https://github.com/muhammadrehman111/background-changer-project'
    },
    {
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcm9udGVuZCUyMHNwZWVkfGVufDF8fHx8MTc2ODM4MDAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Frontend Speed Quantum',
      description: 'A basic front-end HTML project focused on layout and interaction principles.',
      fullDescription: 'Static web interface built with HTML focused on UI layout and design basics. Features responsive page structure and clean visual layout for practicing fundamental front-end development concepts.',
      tags: ['HTML', 'CSS', 'Responsive Design'],
      link: 'https://github.com/muhammadrehman111/frontend-speed-quantum',
      github: 'https://github.com/muhammadrehman111/frontend-speed-quantum'
    },
    {
      image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.1.0&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWxvZ3xlbnwxfHx8fDE3NjgzODAwMjF8MA&q=80&w=1080',
      title: 'Blogging-Website',
      description: 'Forked blogging site to study CMS-style page structure with static HTML.',
      fullDescription: 'A simple static website designed as a blog layout. Forking this project helped with understanding templated web design and CMS-style page structures.',
      tags: ['HTML', 'CSS'],
      link: 'https://github.com/muhammadrehman111/blogging-website',
      github: 'https://github.com/muhammadrehman111/blogging-website'
    }
  ];

  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" ref={ref} className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[var(--ai-purple)]/10 to-[var(--ai-cyan)]/10 border border-[var(--ai-purple)]/20 text-sm mb-6">
            Portfolio
          </span>
          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Featured{' '}
            <span className="bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(index)}
              className="group rounded-2xl border border-border bg-card overflow-hidden cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.link, '_blank');
                    }}
                    className="p-2 rounded-lg bg-white/90 hover:bg-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-black" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, '_blank');
                    }}
                    className="p-2 rounded-lg bg-white/90 hover:bg-white transition-colors"
                  >
                    <Github className="w-5 h-5 text-black" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {project.title}
                </h3>

                <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-muted/50 border border-border text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Project Image */}
              <div className="relative h-64 md:h-96 overflow-hidden rounded-t-3xl">
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-8 md:p-10">
                <h2
                  className="text-3xl md:text-4xl mb-4"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {projects[selectedProject].title}
                </h2>

                <p className="text-foreground/70 leading-relaxed mb-6">
                  {projects[selectedProject].fullDescription}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-lg mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--ai-purple)]/10 to-[var(--ai-cyan)]/10 border border-[var(--ai-purple)]/20 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href={projects[selectedProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] text-white flex items-center gap-2 shadow-lg shadow-[var(--ai-purple)]/20"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>View Live Project</span>
                  </motion.a>

                  <motion.a
                    href={projects[selectedProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl border border-border bg-card hover:bg-accent transition-colors flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}