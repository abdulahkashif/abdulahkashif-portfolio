"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Zap, Rocket, LineChart, Lock, Database, Cuboid, MessageSquareCode } from "lucide-react";
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
    <section id="services" ref={container} className="relative z-10 py-32 px-6 md:px-12 bg-[#121212] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left relative z-10">
          <SmoothReveal>
            <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tight transform-gpu hover:scale-[1.01] transition-transform duration-500">
              Premium <span className="text-gradient">Services</span>
            </h2>
          </SmoothReveal>
          <SmoothReveal delay={0.2}>
            <p className="mt-4 text-xl text-neutral-400 max-w-2xl font-sans">
              Specialized solutions designed purely for business scaling, conversion, and undeniable market presence.
            </p>
          </SmoothReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFullWidth = !!service.interactive;
            
            return (
              <div
                key={index}
                className={`service-card group relative p-8 md:p-10 rounded-[40px] bg-neutral-900/40 border border-white/5 hover:border-purple-500/30 transition-all duration-500 flex flex-col ${isFullWidth ? 'md:col-span-2 lg:col-span-4 lg:flex-row lg:items-center gap-12' : 'md:col-span-1 lg:col-span-2'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px] pointer-events-none" />
                
                <div className={isFullWidth ? 'lg:w-1/2' : ''}>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-colors">
                    <Icon className="w-6 h-6 text-neutral-300 group-hover:text-purple-400 transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">{service.title}</h3>
                  <p className="text-neutral-400 font-sans leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {service.interactive && (
                  <div className="mt-auto pt-8 lg:pt-0 lg:w-1/2 lg:border-l lg:border-white/5 lg:pl-12">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold mb-4 block">Interactive Demo (Slide)</span>
                    {service.interactive}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* The Component Bento Grid */}
        <div className="mt-32">
          <SmoothReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h3 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight">The <span className="text-purple-500">Engine</span></h3>
                <p className="mt-2 text-neutral-400 font-sans max-w-xl">
                  We don&apos;t rely on 3rd party bloat plugins. Every feature is a custom-engineered modular piece of a high-performance machine.
                </p>
              </div>
              <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
                Modular Architecture
              </div>
            </div>
          </SmoothReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="group relative p-6 md:p-8 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <Lock className="w-8 h-8 text-neutral-400 group-hover:scale-110 group-hover:text-emerald-400 transition-all duration-300 mb-6" />
              <h4 className="text-lg md:text-xl font-display font-bold">Hardened Auth</h4>
              <p className="text-xs md:text-sm text-neutral-500 mt-2 font-sans">Enterprise-grade security protocols with zero friction.</p>
            </div>

            <div className="group relative p-6 md:p-8 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <Database className="w-8 h-8 text-neutral-400 group-hover:scale-110 group-hover:text-blue-400 transition-all duration-300 mb-6" />
              <h4 className="text-lg md:text-xl font-display font-bold">Edge Database</h4>
              <p className="text-xs md:text-sm text-neutral-500 mt-2 font-sans">Sub-second query speeds replicated globally.</p>
            </div>

            <div className="group relative p-6 md:p-8 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-purple-500/30 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <Cuboid className="w-8 h-8 text-neutral-400 group-hover:scale-110 group-hover:text-purple-400 transition-all duration-300 mb-6" />
              <h4 className="text-lg md:text-xl font-display font-bold">3D WebGL Engine</h4>
              <p className="text-xs md:text-sm text-neutral-500 mt-2 font-sans">Immersive experiences that capture high-ticket attention.</p>
            </div>

            <div className="group relative p-6 md:p-8 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-orange-500/30 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <MessageSquareCode className="w-8 h-8 text-neutral-400 group-hover:scale-110 group-hover:text-orange-400 transition-all duration-300 mb-6" />
              <h4 className="text-lg md:text-xl font-display font-bold">AI Interfaces</h4>
              <p className="text-xs md:text-sm text-neutral-500 mt-2 font-sans">LLM-driven logic embedded directly into the core.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
