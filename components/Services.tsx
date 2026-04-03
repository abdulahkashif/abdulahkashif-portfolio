"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Zap, Rocket, LineChart } from "lucide-react";

const services = [
  {
    title: "MVP Development",
    description: "Launch your visionary product flawlessly. I build robust, scalable Minimum Viable Products precisely engineered for initial market validation and seed-stage funding.",
    icon: Rocket,
  },
  {
    title: "Business Site Overhauls",
    description: "Transform outdated digital presences into high-converting revenue engines. Complete systemic revamp aligning aesthetics with strategic business goals.",
    icon: LineChart,
  },
  {
    title: "Performance Optimization",
    description: "Sub-second load times and seamless interactions. I eliminate bottlenecks and restructure architectures to dominate SEO rankings and retain user attention.",
    icon: Zap,
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
    <section ref={container} className="relative z-10 py-32 px-6 md:px-12 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight">
            Premium <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 text-xl text-neutral-400 max-w-2xl font-sans">
            Specialized solutions designed purely for business scaling, conversion, and undeniable market presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card group relative p-8 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-colors">
                  <Icon className="w-6 h-6 text-neutral-300 group-hover:text-purple-400 transition-colors" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-400 font-sans leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
