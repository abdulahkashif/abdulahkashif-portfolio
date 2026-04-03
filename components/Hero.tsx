"use client";

import { useRef, useState, Suspense, lazy } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Hero() {
  const container = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-text",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" }
    ).fromTo(
      ".hero-sub",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.6"
    ).fromTo(
      ".hero-cta",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.4"
    );
  }, { scope: container });

  return (
    <section ref={container} className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 overflow-hidden">
      {/* Spline 3D Interaction Engine */}
      <div className="absolute top-0 right-0 w-full h-full lg:w-1/2 z-0 opacity-60 pointer-events-none">
        <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-neutral-800 font-mono text-xs uppercase tracking-widest">Initialising 3D Engine...</div>}>
          <Spline 
            className={`w-full h-full transition-transform duration-1000 ${isHovered ? "scale-110" : "scale-100"}`}
            scene="https://prod.spline.design/6Wq1Q7YGyVu7Gog1/scene.splinecode" 
          />
        </Suspense>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col items-start pt-20 relative z-10">
        <div className="overflow-hidden">
          <h1 className="hero-text text-5xl md:text-7xl lg:text-9xl font-display font-bold leading-[0.9] uppercase tracking-tighter">
            Architecting
          </h1>
        </div>
        <div className="overflow-hidden flex items-center gap-4 md:gap-8 mt-2 md:mt-4">
          <div className="hero-text hidden md:flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md">
            <ArrowDownRight className="w-8 h-8 md:w-12 md:h-12 text-purple-400" />
          </div>
          <h1 className="hero-text text-5xl md:text-7xl lg:text-9xl font-display font-bold leading-[0.9] uppercase tracking-tighter text-gradient">
            Revenue
          </h1>
        </div>
        <div className="overflow-hidden mt-2 md:mt-4">
          <h1 className="hero-text text-4xl md:text-6xl lg:text-8xl font-display font-bold leading-[0.9] uppercase tracking-tighter text-neutral-500">
            Through Logic.
          </h1>
        </div>
        
        <div className="mt-12 md:mt-16 max-w-3xl hero-sub">
          <p className="text-xl md:text-3xl text-neutral-400 font-sans leading-tight">
            I build <span className="text-white font-medium">high-performance web solutions</span> that strip away complexity to drive <span className="text-white font-medium">measurable business growth</span>. Precision-engineered for scale.
          </p>
        </div>

        <div 
          className="mt-12 hero-cta"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <MagneticButton>
            <button
              className={`group relative px-8 py-4 bg-white text-black font-display font-bold uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all duration-500 ${isHovered ? "ring-4 ring-purple-500/30" : ""}`}
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project <ArrowDownRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
