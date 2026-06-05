"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const metrics = [
  { value: "8 sec", desc: "Attention is the new currency" },
  { value: "55%", desc: "Emotion drives giving" },
  { value: "12×", desc: "Video multiplies reach" },
  { value: "2.3×", desc: "Trust compounds funding" },
];

const withoutItems = [
  "Reports that get archived",
  "Static PDFs no one reads",
  "Generic photos",
  "Donors disengage",
  "Grants harder to renew",
];

const withItems = [
  "Films that get shared",
  "Donors feel the mission",
  "Beneficiaries become real",
  "Campaigns convert",
  "Grant applications stand out",
];

export default function WhyStorytelling() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/[0.02] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-gold-400 tracking-widest uppercase mb-4 block">
            Why It Matters
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            The world has too much data and{" "}
            <span className="gradient-text">too few stories.</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-3xl mx-auto leading-relaxed">
            Donors aren&apos;t moved by spreadsheets. They give when they feel something
            real. Cinematic storytelling is how modern NGOs cut through the noise.
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.value}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="glass rounded-2xl p-8 text-center group hover:bg-white/10 transition-all duration-500"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform">
                {m.value}
              </div>
              <p className="text-sm text-dark-400">{m.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-3xl p-8 md:p-10 border border-red-500/20 bg-red-500/[0.03]"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                ✕
              </div>
              <h3 className="text-xl font-semibold text-red-400">Without Storytelling</h3>
            </div>
            <div className="space-y-4">
              {withoutItems.map((item) => (
                <div key={item} className="flex items-center gap-3 text-dark-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="rounded-3xl p-8 md:p-10 border border-gold-500/20 bg-gold-500/[0.03] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold-500/10 rounded-full blur-[80px]" />
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-gold-400">With Cinematic Storytelling</h3>
            </div>
            <div className="space-y-4 relative z-10">
              {withItems.map((item) => (
                <div key={item} className="flex items-center gap-3 text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
