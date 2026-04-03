"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDownRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

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
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="overflow-hidden">
          <h1 className="hero-text text-5xl md:text-9xl font-display font-bold uppercase tracking-tighter leading-[0.9] text-white">
            Architecting <br /> <span className="text-purple-500">Revenue</span> <br /> Through Logic.
          </h1>
        </div>
        <div className="mt-12 md:mt-16 max-w-3xl">
          <p className="hero-text text-xl md:text-3xl text-neutral-400 font-sans leading-tight">
            I build high-performance web solutions that strip away complexity to drive measurable business growth. Precision-engineered for scale.
          </p>
        </div>
        <div className="mt-12 hero-text">
          <MagneticButton>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
              Start Your Project <ArrowDownRight size={18} />
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
