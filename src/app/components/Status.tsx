import { motion } from 'motion/react';
import { Wifi, Briefcase, CheckCircle } from 'lucide-react';
import { useInView } from '@/app/components/hooks/useInView';

export function Status() {
  const { ref, inView } = useInView();

  const statuses = [
    {
      icon: Wifi,
      label: 'Work Remotely',
      description: 'Available for remote opportunities worldwide',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Briefcase,
      label: 'Open to Work',
      description: 'Currently seeking new challenges',
      color: 'from-[var(--ai-purple)] to-[var(--ai-cyan)]'
    },
    {
      icon: CheckCircle,
      label: 'Available',
      description: 'Ready to start immediately',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section ref={ref} className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {statuses.map((status, index) => (
            <motion.div
              key={status.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 rounded-2xl border border-border bg-card relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${status.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${status.color} flex items-center justify-center mb-4`}>
                  <status.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {status.label}
                </h3>
                
                <p className="text-foreground/60 text-sm">
                  {status.description}
                </p>
              </div>

              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${status.color}`}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
