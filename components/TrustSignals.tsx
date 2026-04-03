"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, BarChart3, Globe2, Cpu, Code2 } from "lucide-react";

const stack = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Globe2 },
  { name: "Three.js", icon: Cpu },
  { name: "Tailwind", icon: Zap },
  { name: "GSAP", icon: BarChart3 },
];

const badges = [
  { name: "Enterprise SSL", icon: ShieldCheck, desc: "Airtight Security" },
  { name: "SEO Domination", icon: BarChart3, desc: "Market Visibility" },
  { name: "Sub-Second Speed", icon: Zap, desc: "Instant Load" },
];

export default function TrustSignals() {
  return (
    <div className="relative z-10 w-full py-12 border-y border-white/5 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Tech Stack - Scrolling Row for mobile, flex for desktop */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-40">
            {stack.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-2 group hover:opacity-100 transition-opacity">
                  <Icon size={20} className="text-neutral-400 group-hover:text-purple-400" />
                  <span className="text-xs font-mono uppercase tracking-widest font-bold">{item.name}</span>
                </div>
              );
            })}
          </div>

          <div className="h-px w-24 bg-white/10 hidden lg:block" />

          {/* Performance Badges */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {badges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center lg:items-start"
                >
                  <div className="flex items-center gap-2 text-purple-400 mb-1">
                    <Icon size={18} />
                    <span className="text-xs font-mono font-bold uppercase tracking-tighter">{badge.name}</span>
                  </div>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest">{badge.desc}</span>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
