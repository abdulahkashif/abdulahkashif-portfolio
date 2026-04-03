"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

import SmoothReveal from "./SmoothReveal";

export default function About() {
  const container = useRef(null);

  useGSAP(() => {
    // GSAP logic preserved or enhanced
  }, { scope: container });

  return (
    <section ref={container} className="relative z-10 py-32 px-6 md:px-12 bg-black/50 backdrop-blur-md border-y border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 justify-between items-start">
        <div className="lg:w-1/3">
          <SmoothReveal>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight">
              The <br />
              <span className="text-gradient">Philosophy</span>
            </h2>
          </SmoothReveal>
        </div>
        <div className="lg:w-2/3 flex flex-col gap-8 text-xl md:text-3xl font-sans text-neutral-300 leading-snug">
          <SmoothReveal delay={0.2}>
            <p>
              I bridge the gap between <span className="text-white">complex logic</span> and <span className="text-white">profitable user experiences</span>. Digital products shouldn't just exist—they should perform as high-tier revenue engines.
            </p>
          </SmoothReveal>
          <SmoothReveal delay={0.4}>
            <p className="text-neutral-500">
              By merging high-fidelity aesthetics with rigorous performance architecture, I build trust through precision. Every animation and interaction is engineered with a single purpose: to eliminate friction and drive business growth.
            </p>
          </SmoothReveal>
        </div>
      </div>
    </section>
  );
}
