import { motion } from 'motion/react';
import { ArrowRight, Download, Linkedin, Github, Mail } from 'lucide-react';
import heroImage from './images/hero-image.jpeg';

export function Hero() {
  const socials = [
    { icon: Linkedin, link: 'https://linkedin.com/in/muhammad-rehman', label: 'LinkedIn' },
    { icon: Github, link: 'https://github.com/muhammadrehman', label: 'GitHub' },
    { icon: Mail, link: 'mailto:muhammadrehmanm645@gmail.com', label: 'Email' }
  ];

  return (
    <section className="min-h-screen flex items-center pt-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[var(--ai-purple)]/10 to-[var(--ai-cyan)]/10 border border-[var(--ai-purple)]/20"
            >
              <span className="text-sm bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] bg-clip-text text-transparent">
                Aspiring DevOps Engineer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Muhammad
              <br />
              <span className="bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] bg-clip-text text-transparent">
                Rehman
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-foreground/70 leading-relaxed"
            >
              Aspiring DevOps Engineer with hands-on experience in CI/CD pipelines, containers, cloud services, and automation to improve deployment speed and reliability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] text-white flex items-center gap-2 shadow-lg shadow-[var(--ai-purple)]/20"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Replace this URL with your actual Google Drive download link
                  const cvUrl = 'https://drive.google.com/file/d/18K4dvusT6AXANcJJS0KbwS3GoCv2qeik/view?usp=drive_link';
                  window.open(cvUrl, '_blank');
                }}
                className="px-8 py-4 rounded-2xl border border-border bg-card hover:bg-accent transition-colors flex items-center gap-2"
              >
                Download CV
                <Download className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 pt-4"
            >
              {socials.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl border border-border bg-card hover:border-[var(--ai-purple)]/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border border-border shadow-2xl">
                <img
                  src={heroImage}
                  alt="Developer workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-[var(--ai-cyan)] to-[var(--ai-purple)] rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}