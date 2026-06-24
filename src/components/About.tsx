import { motion } from 'motion/react';
import { useInView } from '@/hooks/useInView';

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
            Full Stack Developer
            <br />
            <span className="bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] bg-clip-text text-transparent">
              MERN Stack Specialist
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/70 leading-relaxed space-y-6"
          >
            <p>
              I'm Muhammad Rehman, a Software Engineering student passionate about full-stack web development using the MERN stack (MongoDB, Express.js, React, Node.js). Currently pursuing my Bachelor's degree at the University of Central Punjab, I have maintained a strong academic record while building real-world applications that showcase modern web development practices.  
            </p>
            <p>
              I specialize in creating scalable, responsive web applications with expertise in React for dynamic frontends, Node.js/Express for robust backends, and MongoDB for flexible data storage. My projects demonstrate proficiency in crafting seamless user experiences, implementing RESTful APIs, database design, and full-stack architecture patterns. I'm passionate about writing clean, maintainable code and staying current with modern web technologies.  </p>
            <p>I am driven by continuous learning and problem-solving, aiming to build impactful applications that deliver real value to users. I believe in writing well-structured code, following best practices, and creating intuitive user interfaces that make a difference.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}