"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const categories = [
  "All",
  "NGO Events",
  "Community Outreach",
  "Humanitarian Projects",
  "Education Programs",
  "Health Campaigns",
];

const projects = [
  {
    title: "NGO Storytelling",
    category: "NGO Events",
    image: "https://images.pexels.com/photos/6647178/pexels-photo-6647178.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    description: "A cinematic documentary capturing the heart of community-driven humanitarian efforts.",
    year: "2024",
  },
  {
    title: "Documentary Story",
    category: "Humanitarian Projects",
    image: "https://images.pexels.com/photos/6646884/pexels-photo-6646884.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    description: "Following frontline workers delivering essential aid to underserved communities.",
    year: "2024",
  },
  {
    title: "Field Report",
    category: "Community Outreach",
    image: "https://images.pexels.com/photos/6647008/pexels-photo-6647008.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    description: "On-the-ground documentation of community health programs making real change.",
    year: "2023",
  },
  {
    title: "Community Impact",
    category: "Education Programs",
    image: "https://images.pexels.com/photos/6647173/pexels-photo-6647173.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    description: "Amplifying the voices of grassroots education initiatives in rural Cameroon.",
    year: "2023",
  },
  {
    title: "Health Outreach",
    category: "Health Campaigns",
    image: "https://images.pexels.com/photos/6647176/pexels-photo-6647176.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    description: "A moving documentary on mobile health clinics reaching remote villages.",
    year: "2024",
  },
  {
    title: "Community Voices",
    category: "Community Outreach",
    image: "https://images.pexels.com/photos/6646857/pexels-photo-6646857.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    description: "Capturing the spirit and resilience of volunteer-led community projects.",
    year: "2023",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-sm text-gold-400 tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Stories that moved donors and{" "}
            <span className="gradient-text">changed funding.</span>
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-gold-500 to-gold-600 text-dark-950"
                  : "glass-light text-dark-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-16 h-16 rounded-full bg-gold-500/90 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-dark-950 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-xs text-gold-400 mb-1">{project.category} · {project.year}</div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark-950/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full glass rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
              </div>
              <div className="p-8">
                <div className="text-sm text-gold-400 mb-2">
                  {selectedProject.category} · {selectedProject.year}
                </div>
                <h3 className="text-2xl font-bold mb-3">{selectedProject.title}</h3>
                <p className="text-dark-300 mb-6">{selectedProject.description}</p>
                <div className="flex gap-4">
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-950 font-semibold rounded-full hover:from-gold-400 hover:to-gold-500 transition-all"
                  >
                    Discuss Similar Project
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 glass-light rounded-full text-dark-300 hover:text-white transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
