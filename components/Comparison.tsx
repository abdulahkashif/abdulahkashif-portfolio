"use client";

import SmoothReveal from "./SmoothReveal";
import SpeedGauge from "./SpeedGauge";
import { CheckCircle2, XCircle } from "lucide-react";

export default function Comparison() {
  const points = [
    {
      feature: "Speed",
      custom: "Sub-second (Custom React/Next.js)",
      template: "Slow (Plugin/Theme Bloat)",
    },
    {
      feature: "Security",
      custom: "Hardened Custom Architecture",
      template: "Vulnerable to Global Exploits",
    },
    {
      feature: "Scalability",
      custom: "Infinite (Handle 1M+ users)",
      template: "Limited by Platform Constraints",
    },
    {
      feature: "Ownership",
      custom: "You own 100% of the Source Code",
      template: "You're locked into a Monthly Sub",
    },
  ];

  return (
    <section id="why-custom" className="relative z-10 py-32 px-6 md:px-12 bg-[#121212] overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 w-full">
          <SmoothReveal>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-8">
              Why <span className="text-gradient">Custom?</span>
            </h2>
          </SmoothReveal>
          <p className="text-xl text-neutral-400 font-sans leading-relaxed mb-12">
            Stress-testing the status quo. Off-the-shelf templates limit your growth and introduce massive vulnerabilities. Custom engineering delivers untouchable ROI.
          </p>

          <div className="bg-neutral-900/40 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-md">
            <div className="grid grid-cols-3 bg-white/5 border-b border-white/5 p-4 md:p-6 text-xs md:text-sm font-mono uppercase tracking-widest font-bold text-neutral-300">
              <div>Feature</div>
              <div className="text-emerald-400">AI-Engineered</div>
              <div className="text-neutral-500">WordPress/Webflow</div>
            </div>
            
            <div className="flex flex-col">
              {points.map((point, i) => (
                <div key={i} className="grid grid-cols-3 p-4 md:p-6 border-b border-white/5 last:border-b-0 items-center justify-center">
                  <div className="font-display font-bold text-sm md:text-lg">{point.feature}</div>
                  <div className="flex items-start gap-2 text-white font-sans text-xs md:text-sm">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5 hidden md:block" />
                    <span>{point.custom}</span>
                  </div>
                  <div className="flex items-start gap-2 text-neutral-500 font-sans text-xs md:text-sm">
                    <XCircle size={16} className="shrink-0 mt-0.5 hidden md:block" />
                    <span>{point.template}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex flex-col gap-8 relative">
          <SpeedGauge />
        </div>
      </div>
    </section>
  );
}
