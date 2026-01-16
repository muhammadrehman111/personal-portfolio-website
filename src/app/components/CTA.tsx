import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useInView } from '@/app/components/hooks/useInView';

export function CTA() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          className="relative rounded-3xl border border-border bg-gradient-to-br from-card to-muted/30 overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--ai-purple)] rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--ai-cyan)] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative z-10 p-12 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--ai-purple)]/10 to-[var(--ai-cyan)]/10 border border-[var(--ai-purple)]/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-[var(--ai-purple)]" />
              <span className="text-sm">Let's Work Together</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl mb-6 leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Ready to Start Your
              <br />
              <span className="bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] bg-clip-text text-transparent">
                Next Project?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto"
            >
              Let's collaborate to bring your vision to life with innovative solutions
              and cutting-edge technology.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] text-white text-lg flex items-center gap-3 mx-auto shadow-xl shadow-[var(--ai-purple)]/30"
            >
              Start a Conversation
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
