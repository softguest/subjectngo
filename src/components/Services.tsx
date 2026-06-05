"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: "🎬",
    title: "NGO Impact Storytelling",
    desc: "Cinematic documentary films that capture your mission's human impact, designed to move donors and stakeholders to action.",
  },
  {
    icon: "🎤",
    title: "Event Coverage",
    desc: "Multi-camera coverage of conferences, summits, fundraisers, and community events with same-day highlight reels.",
  },
  {
    icon: "💰",
    title: "Fundraising Campaign Videos",
    desc: "Emotionally compelling videos crafted specifically to boost donations, crowdfunding, and grant applications.",
  },
  {
    icon: "🎥",
    title: "Community Documentary Films",
    desc: "Long-form documentary storytelling that immerses viewers in the lives and realities of the communities you serve.",
  },
  {
    icon: "📱",
    title: "Social Media Reels",
    desc: "Scroll-stopping short-form content optimized for Instagram, TikTok, and YouTube Shorts to maximize reach.",
  },
  {
    icon: "🗣️",
    title: "Beneficiary Interviews",
    desc: "Intimate, respectful interviews that let the people at the center of your work share their stories with dignity.",
  },
  {
    icon: "🚁",
    title: "Drone Coverage",
    desc: "Stunning aerial cinematography that reveals the scale and beauty of your projects and the communities they serve.",
  },
  {
    icon: "📸",
    title: "Photography",
    desc: "Documentary-style photography that complements your video content across reports, social media, and press materials.",
  },
];

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="services" ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-gold-400 tracking-widest uppercase mb-4 block">
            Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto">
            Every format your mission needs —{" "}
            <span className="gradient-text">crafted with cinema-grade care.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(226,160,75,0.1)] gradient-border"
            >
              <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-gold-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-dark-400 mb-6 leading-relaxed">{service.desc}</p>
              <a
                href="#contact"
                className="inline-flex items-center text-sm text-gold-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
              >
                Request Quote
                <span className="ml-1">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
