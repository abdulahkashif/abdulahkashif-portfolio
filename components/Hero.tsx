"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-text",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power4.out" }
    ).fromTo(
      ".hero-sub",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );
  }, { scope: container });

  return (
    <section ref={container} className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start pt-20">
        <div className="overflow-hidden">
          <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-none uppercase tracking-tighter">
            High-Performance
          </h1>
        </div>
        <div className="overflow-hidden flex items-center gap-4 md:gap-8 mt-2 md:mt-4">
          <div className="hero-text hidden md:flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md">
            <ArrowDownRight className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
          </div>
          <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-none uppercase tracking-tighter text-gradient">
            Web Solutions
          </h1>
        </div>
        <div className="overflow-hidden mt-2 md:mt-4">
          <h1 className="hero-text text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-none uppercase tracking-tighter text-neutral-400">
            That Drive Growth.
          </h1>
        </div>
        <div className="mt-12 md:mt-24 max-w-2xl hero-sub">
          <p className="text-xl md:text-2xl text-neutral-400 font-sans leading-relaxed">
            Hi, I&apos;m <span className="text-white font-medium">Abdullah Kashif</span>. I translate complex business logic into beautiful, engineered products designed to scale revenue, optimize workflows, and dominate markets.
          </p>
        </div>
      </div>
    </section>
  );
}
