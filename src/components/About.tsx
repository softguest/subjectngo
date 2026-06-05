"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import portrait from "@/assets/img/portrait.png";
import Image from "next/image";

const timeline = [
  {
    year: "2022",
    text: "Picked up a camera in Douala to document a local health drive.",
  },
  {
    year: "2023",
    text: "First feature documentary screened at regional NGO summit.",
  },
  {
    year: "2024",
    text: "Began partnering with national humanitarian organizations.",
  },
  {
    year: "2025",
    text: "Films seen by 4M+ people across donor and media channels.",
  },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image
                src={portrait}
                alt="Documentary filmmaker with camera"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 md:right-8 glass rounded-2xl p-5 animate-float"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <div>
                  <div className="text-sm font-semibold">Bamenda · Cameroon</div>
                  <div className="text-xs text-dark-400">Available for projects</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-sm text-gold-400 tracking-widest uppercase mb-4 block">
              About
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Human stories, told with{" "}
              <span className="gradient-text">dignity.</span>
            </h2>
            <p className="text-lg text-dark-300 mb-4 leading-relaxed">
              I&apos;m a Cameroon-based documentary videographer obsessed with one
              thing: helping the people doing real good get the recognition — and
              resources — they deserve.
            </p>
            <p className="text-dark-400 mb-10 leading-relaxed">
              From rural clinics to urban classrooms, my work centers the humans
              behind the mission.
            </p>

            {/* Timeline */}
            <div className="space-y-0 relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-gold-500/50 to-transparent" />
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                  className="flex gap-6 pb-6 last:pb-0 group"
                >
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full border-2 border-gold-500 bg-dark-950 group-hover:bg-gold-500 transition-colors duration-300 flex-shrink-0" />
                  </div>
                  <div>
                    <span className="text-gold-400 text-sm font-semibold">{item.year}</span>
                    <p className="text-dark-300 mt-1">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
