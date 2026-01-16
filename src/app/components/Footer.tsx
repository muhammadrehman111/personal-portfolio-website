import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[var(--ai-purple)] to-[var(--ai-cyan)] flex items-center justify-center">
                <span className="text-white font-bold text-xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>M</span>
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Muhammad Rehman
              </span>
            </div>
            <p className="text-foreground/60 leading-relaxed mb-6">
              Aspiring DevOps Engineer specializing in CI/CD pipelines, containerization,
              and cloud automation for scalable deployments.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, link: 'https://linkedin.com/in/muhammad-rehman' },
                { icon: Github, link: 'https://github.com/muhammadrehman' }
              ].map((social) => (
                <motion.a
                  key={social.link}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg border border-border bg-card hover:border-[var(--ai-purple)]/50 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Grab Clients */}
          <div>
            <h3 className="text-xl mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Let's Work Together
            </h3>
            <p className="text-foreground/60 mb-6">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] text-white"
            >
              Start a Project
            </motion.button>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Contact Details
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:muhammadrehmanm645@gmail.com"
                className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors group"
              >
                <div className="p-2 rounded-lg bg-card border border-border group-hover:border-[var(--ai-purple)]/50 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span>muhammadrehmanm645@gmail.com</span>
              </a>
              <a
                href="tel:+923209558259"
                className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors group"
              >
                <div className="p-2 rounded-lg bg-card border border-border group-hover:border-[var(--ai-purple)]/50 transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+92 320 955 8259</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground/60 text-sm flex items-center gap-2">
              © {currentYear} Muhammad Rehman. All rights reserved.
            </p>
            <p className="text-foreground/60 text-sm flex items-center gap-2">
              Designed & Built with{' '}
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              by Muhammad Rehman
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
