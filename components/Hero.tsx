"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDownRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import TerminalSnippet from "./TerminalSnippet";

export default function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-text",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" }
    );
  }, { scope: container });

  return (
    <section ref={container} className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col xl:flex-row items-center gap-16 pt-12 xl:pt-24">
        <div className="xl:w-3/5 w-full">
          <div className="overflow-hidden">
            <h1 className="hero-text text-5xl md:text-[5rem] lg:text-[5.5rem] font-display font-bold uppercase tracking-tighter leading-[0.9] text-white">
              High-Performance <br /> <span className="text-purple-500">Custom Engineering</span> <br /> For Businesses That Have Outgrown Templates.
            </h1>
          </div>
          <div className="mt-12 md:mt-16 max-w-3xl">
            <p className="hero-text text-xl md:text-3xl text-neutral-400 font-sans leading-tight">
              I build proprietary digital assets using AI-augmented custom code—zero bloat, infinite scalability, and sub-second performance.
            </p>
          </div>
          <div className="mt-12 hero-text w-max">
            <MagneticButton>
              <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
                Start Your Project <ArrowDownRight size={18} />
              </a>
            </MagneticButton>
          </div>
        </div>
        
        <div className="xl:w-2/5 hidden xl:block hero-text w-full">
          <TerminalSnippet />
        </div>
      </div>
    </section>
  );
}
