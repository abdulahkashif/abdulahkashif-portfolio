"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SmoothReveal from "./SmoothReveal";

export default function SpeedGauge() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    let current = 0;
    const target = 99;
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    const stepValue = target / steps;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setScore(Math.round(current));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const offset = 283 - (283 * score) / 100;

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-neutral-900/40 border border-white/5 rounded-3xl w-full">
      <SmoothReveal>
        <div className="text-center mb-6">
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">Lighthouse Performance</span>
          <h3 className="text-xl md:text-2xl font-display font-bold mt-2">Next.js Edge Speed</h3>
        </div>
      </SmoothReveal>

      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-white/10"
          />
          <motion.circle
            initial={{ strokeDashoffset: 283 }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            cx="96"
            cy="96"
            r="45"
            stroke="#10b981"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray="283"
            className="drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
            strokeLinecap="round"
          />
        </svg>
        <div className="z-10 flex flex-col items-center">
          <span className="text-5xl font-display font-bold text-[#10b981]">{score}</span>
        </div>
      </div>
      <p className="mt-4 text-sm text-neutral-400 font-sans text-center">
        Custom code guarantees sub-second load times. <br/> Leave WordPress bloat behind.
      </p>
    </div>
  );
}
