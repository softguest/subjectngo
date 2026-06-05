"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Stories Crafted" },
  { value: "3+", label: "NGO Partners" },
  { value: "27M", label: "FCFA Raised by Clients" },
  { value: "4", label: "Years On The Ground" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.pexels.com/videos/27858252/african-black-children-health-27858252.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/27858252/12245702_3840_2160_24fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/60 to-dark-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/40 to-transparent" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-600/8 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-sm text-gold-300 tracking-wide">
            NGO Storytelling Videographer · Cameroon
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight max-w-5xl mx-auto mb-8"
        >
          Powerful storytelling videos that help NGOs{" "}
          <span className="gradient-text">inspire, raise funds</span> &amp; show
          real impact.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-dark-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          I help nonprofits, humanitarian organizations, and community projects
          turn their impact into emotional stories that donors remember — and
          fund again.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-950 font-semibold rounded-full text-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(226,160,75,0.4)] animate-pulse-glow"
          >
            Book a Free Consultation
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#work"
            className="px-8 py-4 rounded-full glass-light text-white font-medium text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + i * 0.15 }}
              className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm text-dark-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-dark-400 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border border-dark-500 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-gold-400 rounded-full animate-scroll" />
        </div>
      </motion.div>
    </section>
  );
}
