"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import SmoothReveal from "./SmoothReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const container = useRef(null);

  useGSAP(() => {
    // GSAP logic
  }, { scope: container });

  return (
    <section id="about" ref={container} className="relative z-10 py-32 px-6 md:px-12 bg-[#121212]/50 backdrop-blur-md border-y border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 justify-between items-center">
        
        {/* Professional Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative lg:w-1/3 aspect-square rounded-[40px] overflow-hidden bg-neutral-900 border border-white/10 group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 to-transparent z-10" />
          <img src="/profile.jpg" alt="Abdullah Kashif" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
        </motion.div>

        <div className="lg:w-2/3 flex flex-col gap-8 text-xl md:text-3xl font-sans text-neutral-300 leading-snug">
          <SmoothReveal>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4">
              The <span className="text-gradient">Philosophy</span>
            </h2>
          </SmoothReveal>

          <SmoothReveal delay={0.2}>
            <p className="text-xl font-medium text-white italic border-l-2 border-purple-500 pl-4 py-2 mt-4 mb-4 bg-purple-500/5 rounded-r-lg">
              I don&apos;t just write code; I partner with you because your business growth and success is the only true measure of my work.
            </p>
          </SmoothReveal>
          
          <SmoothReveal delay={0.3}>
            <p>
              I bridge the gap between <span className="text-white">complex logic</span> and <span className="text-white">profitable user experiences</span>. Digital products shouldn&apos;t just exist—they should perform as high-tier revenue engines.
            </p>
          </SmoothReveal>
          
          <SmoothReveal delay={0.4}>
            <p className="text-neutral-500">
              My approach is rooted in an <span className="text-white">obsessive eye for detail</span> forged through years of practicing <span className="text-white">high-precision Arabic Calligraphy</span>. I bring that same discipline to architecture: where every line of code must be as intentional as a master&apos;s stroke.
            </p>
          </SmoothReveal>

          <SmoothReveal delay={0.6}>
            <p className="text-neutral-500">
              By merging high-fidelity aesthetics with rigorous performance engineering, I build trust through precision. Every interaction is designed to eliminate friction and drive business growth.
            </p>
          </SmoothReveal>
        </div>
      </div>
    </section>
  );
}
