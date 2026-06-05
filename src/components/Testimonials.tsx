"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    quote:
      "He doesn't just film — he listens. Our beneficiaries felt safe, seen, and proud. That's rare.",
    author: "Pastor Emmanuel Tchana",
    org: "Faith & Community Network",
  },
  {
    quote:
      "The documentary helped us raise 3× more than our previous campaign. Donors finally saw our impact.",
    author: "Dr. Ngwa Bernice",
    org: "Community Health Alliance",
  },
  {
    quote:
      "We needed someone who understood our mission deeply. Subjectspot delivered a film that moved our entire board to tears.",
    author: "Jean-Pierre Fomba",
    org: "Cameroon Youth Development Fund",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-gold-400 tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            What partner organizations{" "}
            <span className="gradient-text">say.</span>
          </h2>
        </motion.div>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="glass rounded-3xl p-10 md:p-14 relative overflow-hidden">
                <div className="absolute top-6 left-8 text-6xl text-gold-500/20 font-serif">&ldquo;</div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold-500/5 rounded-full blur-[60px]" />
                
                <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-8 relative z-10 italic text-white/90">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <div className="relative z-10">
                  <p className="text-gold-400 font-semibold text-lg">
                    {testimonials[current].author}
                  </p>
                  <p className="text-dark-400 text-sm">
                    {testimonials[current].org}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-gold-400"
                  : "w-2 bg-dark-600 hover:bg-dark-400"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-8 border-t border-white/5"
        >
          {["Faith & Community Network", "Community Health Alliance", "Cameroon Youth Development Fund"].map(
            (org) => (
              <span
                key={org}
                className="text-sm text-dark-500 tracking-wide uppercase"
              >
                {org}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
