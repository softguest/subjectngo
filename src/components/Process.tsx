"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We listen deeply to your mission, audience, and goals.",
    icon: "🎯",
  },
  {
    num: "02",
    title: "Story Planning",
    desc: "Narrative architecture, beneficiary mapping, logistics.",
    icon: "📝",
  },
  {
    num: "03",
    title: "Filming",
    desc: "Cinema-grade cameras, drone, sound.",
    icon: "🎬",
  },
  {
    num: "04",
    title: "Editing & Delivery",
    desc: "Color grading, sound design, music, and multi-platform delivery.",
    icon: "✨",
  },
];

export default function Process() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="process" ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-gold-400 tracking-widest uppercase mb-4 block">
            Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            A calm, considered way to{" "}
            <span className="gradient-text">make great films.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="relative group"
            >
              {/* Connector Line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] right-0 h-px bg-gradient-to-r from-gold-500/30 to-transparent" />
              )}
              
              <div className="glass rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden gradient-border">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-full blur-[40px] group-hover:bg-gold-500/10 transition-colors" />
                
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">
                  {step.icon}
                </div>
                <div className="text-xs text-gold-500 font-mono mb-2">{step.num}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gold-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-dark-400 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
