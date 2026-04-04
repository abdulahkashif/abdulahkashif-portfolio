"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Zap, Rocket, LineChart } from "lucide-react";
import AutomationSlider from "./AutomationSlider";
import SmoothReveal from "./SmoothReveal";

const services = [
  {
    title: "Landing Page Sprint",
    description: "For businesses needing immediate lead generation. I build high-conversion, sub-second loading landing pages designed to turn cold traffic into loyal customers in days.",
    icon: Rocket,
  },
  {
    title: "Corporate Authority Site",
    description: "A professional refresh for established businesses. I overhaul outdated digital presences into premium, authoritative platforms that build instant trust and dominate SEO.",
    icon: LineChart,
  },
  {
    title: "Automation & Custom Apps",
    description: "For businesses looking to optimize operations. I engineer custom internal tools and automated workflows that eliminate manual tasks and save your team 20+ hours a week.",
    icon: Zap,
    interactive: <AutomationSlider />
  }
];

export default function Services() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".service-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: container });

  return (
    <section id="services" ref={container} className="relative z-10 py-32 px-6 md:px-12 bg-neutral-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <SmoothReveal>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight">
              Premium <span className="text-gradient">Services</span>
            </h2>
          </SmoothReveal>
          <SmoothReveal delay={0.2}>
            <p className="mt-4 text-xl text-neutral-400 max-w-2xl font-sans">
              Specialized solutions designed purely for business scaling, conversion, and undeniable market presence.
            </p>
          </SmoothReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFullWidth = !!service.interactive;
            
            return (
              <div
                key={index}
                className={`service-card group relative p-8 md:p-10 rounded-[40px] bg-neutral-900/40 border border-white/5 hover:border-purple-500/30 transition-all duration-500 flex flex-col ${isFullWidth ? 'lg:col-span-1' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px] pointer-events-none" />
                
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-colors">
                  <Icon className="w-6 h-6 text-neutral-300 group-hover:text-purple-400 transition-colors" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-400 font-sans leading-relaxed mb-8">
                  {service.description}
                </p>

                {service.interactive && (
                  <div className="mt-auto pt-8 border-t border-white/5">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold mb-4 block">Interactive Demo (Slide)</span>
                    {service.interactive}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
