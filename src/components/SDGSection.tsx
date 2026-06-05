"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sdgGoals = [
  { num: 1, name: "No Poverty", color: "#E5243B" },
  { num: 2, name: "Zero Hunger", color: "#DDA63A" },
  { num: 3, name: "Good Health and Well-being", color: "#4C9F38" },
  { num: 4, name: "Quality Education", color: "#C5192D" },
  { num: 5, name: "Gender Equality", color: "#FF3A21" },
  { num: 6, name: "Clean Water and Sanitation", color: "#26BDE2" },
  { num: 7, name: "Affordable and Clean Energy", color: "#FCC30B" },
  { num: 8, name: "Decent Work and Economic Growth", color: "#A21942" },
  { num: 9, name: "Industry, Innovation and Infrastructure", color: "#FD6925" },
  { num: 10, name: "Reduced Inequality", color: "#DD1367" },
  { num: 11, name: "Sustainable Cities and Communities", color: "#FD9D24" },
  { num: 12, name: "Responsible Consumption and Production", color: "#BF8B2E" },
  { num: 13, name: "Climate Action", color: "#3F7E44" },
  { num: 14, name: "Life Below Water", color: "#0A97D9" },
  { num: 15, name: "Life on Land", color: "#56C02B" },
  { num: 16, name: "Peace, Justice and Strong Institutions", color: "#00689D" },
  { num: 17, name: "Partnerships for the Goals", color: "#19486A" },
];

function SDGCard({ goal }: { goal: typeof sdgGoals[number] }) {
  return (
    <div
      className="flex-shrink-0 w-56 group cursor-pointer"
    >
      <div
        className="relative rounded-2xl p-6 h-40 flex flex-col justify-between overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
        style={{
          background: `linear-gradient(135deg, ${goal.color}22, ${goal.color}11)`,
          border: `1px solid ${goal.color}33`,
        }}
      >
        <div
          className="absolute top-0 right-0 w-20 h-20 rounded-full blur-[40px] opacity-30 group-hover:opacity-60 transition-opacity"
          style={{ background: goal.color }}
        />
        <div className="relative z-10">
          <span
            className="text-3xl font-bold opacity-60"
            style={{ color: goal.color }}
          >
            {String(goal.num).padStart(2, "0")}
          </span>
        </div>
        <div className="relative z-10">
          <p className="text-sm font-medium text-white leading-snug">{goal.name}</p>
        </div>
      </div>
    </div>
  );
}

export default function SDGSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-sm text-gold-400 tracking-widest uppercase mb-4 block">
            Global Goals
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            SDG Storytelling — <span className="gradient-text">Highlighting Every Goal</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            We craft stories aligned with the UN Sustainable Development Goals, amplifying the missions that matter most.
          </p>
        </motion.div>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-950 to-transparent z-10" />
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
          {[...sdgGoals, ...sdgGoals].map((goal, i) => (
            <SDGCard key={`row1-${i}`} goal={goal} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Reverse */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-950 to-transparent z-10" />
        <div
          className="flex gap-6 animate-marquee hover:[animation-play-state:paused]"
          style={{ animationDirection: "reverse", animationDuration: "40s" }}
        >
          {[...sdgGoals.slice().reverse(), ...sdgGoals.slice().reverse()].map((goal, i) => (
            <SDGCard key={`row2-${i}`} goal={goal} />
          ))}
        </div>
      </div>
    </section>
  );
}
