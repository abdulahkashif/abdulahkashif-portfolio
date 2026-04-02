"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Contact() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".contact-elem",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="relative z-10 py-32 px-6 md:px-12 bg-black/80 backdrop-blur-lg border-t border-white/5 min-h-[60vh] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="contact-elem text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter mb-8 leading-none">
          Let&apos;s <span className="text-gradient">Talk</span>
        </h2>
        <p className="contact-elem text-xl md:text-2xl font-sans text-neutral-400 mb-16 max-w-2xl mx-auto">
          Currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        <a 
          href="mailto:hello@abdullahkashif.com" 
          className="contact-elem inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-white rounded-full hover:bg-purple-400 hover:scale-105 transition-all duration-300 font-sans"
        >
          Say Hello
        </a>

        <div className="contact-elem mt-32 flex justify-center gap-8 text-neutral-500 font-mono text-sm uppercase">
          <a href="#" className="hover:text-purple-400 transition-colors">Twitter</a>
          <a href="#" className="hover:text-purple-400 transition-colors">GitHub</a>
          <a href="#" className="hover:text-purple-400 transition-colors">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
