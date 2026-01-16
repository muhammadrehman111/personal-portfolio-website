import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { useInView } from '@/app/components/hooks/useInView';
import { useState } from 'react';

export function Contact() {
  const { ref, inView } = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'muhammadrehmanm645@gmail.com', link: 'mailto:muhammadrehmanm645@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+92 320 955 8259', link: 'tel:+923209558259' },
    { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan', link: '#' }
  ];

  const socials = [
    { icon: Linkedin, link: 'https://linkedin.com/in/muhammad-rehman', label: 'LinkedIn' },
    { icon: Github, link: 'https://github.com/muhammadrehman', label: 'GitHub' }
  ];

  return (
    <section id="contact" ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[var(--ai-purple)]/10 to-[var(--ai-cyan)]/10 border border-[var(--ai-purple)]/20 text-sm mb-6">
            Contact
          </span>
          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Get In{' '}
            <span className="bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-[var(--ai-purple)] transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-[var(--ai-purple)] transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-[var(--ai-purple)] transition-all"
                  placeholder="Project inquiry"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-[var(--ai-purple)] transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] text-white flex items-center justify-center gap-2 shadow-lg shadow-[var(--ai-purple)]/20"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card hover:border-[var(--ai-purple)]/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/60 mb-1">{info.label}</div>
                    <div className="text-lg">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="p-6 rounded-2xl border border-border bg-card"
            >
              <h3 className="text-xl mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl bg-gradient-to-r from-[var(--ai-purple)] to-[var(--ai-cyan)] text-white"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="p-6 rounded-2xl border border-border bg-gradient-to-br from-card to-muted/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--ai-purple)] to-[var(--ai-cyan)] rounded-full blur-3xl opacity-20" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-foreground/60">Available for work</span>
                </div>
                <p className="text-sm text-foreground/70">
                  I'm currently available for freelance projects and full-time opportunities.
                  Let's create something amazing together!
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
