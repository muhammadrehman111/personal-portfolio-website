import { motion } from 'motion/react';
import { useInView } from '@/app/components/hooks/useInView';

export function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[var(--ai-purple)]/10 to-[var(--ai-cyan)]/10 border border-[var(--ai-purple)]/20 text-sm mb-6"
          >
            About Me
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl mb-8"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Aspiring DevOps Engineer
            <br />
            <span className="bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] bg-clip-text text-transparent">
              with Passion
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/70 leading-relaxed space-y-6"
          >
            <p>
              I’m Muhammad Rehman, a Software Engineering student with a strong interest in DevOps, cloud technologies, and full-stack development. Currently pursuing my Bachelor’s degree at the University of Central Punjab, I have maintained a solid academic record while working on multiple real-world projects that combine software development with modern deployment practices.  </p>
            <p>
              I enjoy building scalable, secure, and automated systems, and I have hands-on experience with tools like Docker, GitHub Actions, AWS, and MERN-stack technologies. My projects include developing containerized web applications, integrating CI/CD pipelines, and optimizing system performance through efficient architectures and caching mechanisms.  </p>
            <p>I am passionate about continuous learning and problem-solving, and I aim to grow as a DevOps engineer by working on impactful systems that improve reliability, efficiency, and user experience. I believe in writing clean, maintainable code and building solutions that bridge the gap between development and operations.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}