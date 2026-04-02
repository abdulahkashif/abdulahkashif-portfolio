"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".about-title",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      ".about-text",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".about-text-container",
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="relative z-10 py-32 px-6 md:px-12 bg-black/50 backdrop-blur-md border-y border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 justify-between items-start">
        <h2 className="about-title text-4xl md:text-6xl font-display font-bold uppercase tracking-tight lg:w-1/3">
          The <br />
          <span className="text-gradient">Philosophy</span>
        </h2>
        <div className="about-text-container lg:w-2/3 flex flex-col gap-8 text-xl md:text-3xl font-sans text-neutral-300 leading-snug">
          <p className="about-text">
            I believe that the web should be more than just static pages. It should be a living, breathing environment where every interaction feels engaging and intentional.
          </p>
          <p className="about-text text-neutral-500">
            With a focus on cutting-edge aesthetics, fluid animations, and high-performance architecture, I craft digital products that elevate brands and build trust. I specialize in the modern web stack—React, Three.js, GSAP, and Tailwind—to deliver scalable and immersive user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
