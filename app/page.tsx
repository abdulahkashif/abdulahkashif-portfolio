"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Rocket, ShieldCheck, Zap, BarChart3 } from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Re-enabling the 3D Background Sphere
const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-9xl font-display font-bold uppercase tracking-tighter leading-[0.9] text-white">
            Architecting <br /> <span className="text-purple-500">Revenue</span> <br /> Through Logic.
          </h1>
          <p className="mt-8 text-xl md:text-3xl text-neutral-400 max-w-2xl font-sans leading-tight">
            I build high-performance web solutions that strip away complexity to drive <span className="text-white">measurable business growth</span>.
          </p>
          <div className="mt-12">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
              Start Your Project <ArrowDownRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const services = [
  { title: "Landing Page Sprint", desc: "For businesses needing immediate lead generation. Sub-second loading, high-conversion design.", icon: Rocket },
  { title: "Corporate Authority Site", desc: "A professional refresh for established brands. Dominate SEO and build instant trust.", icon: BarChart3 },
  { title: "Automation & Custom Apps", desc: "Optimize operations and save 20+ hours a week through custom internal workflows.", icon: Zap },
];

function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-black relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-16">Premium <span className="text-purple-500">Solutions</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-purple-500/30 transition-all">
              <s.icon className="text-purple-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-neutral-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "NeuralNexus",
    challenge: "Brand struggling with low-quality leads and generic digital presence.",
    result: "40% increase in lead quality and 25% reduction in bounce rate.",
    tech: ["Conversion Strategy", "Revenue Optimization"]
  },
  {
    title: "GraphToken Pipeline",
    challenge: "Manual hours lost to multi-channel content publishing.",
    result: "Saved 120+ manual hours/month for the client.",
    tech: ["Workflow Automation", "Scalability"]
  }
];

function Work() {
  return (
    <section id="work" className="py-32 px-6 bg-neutral-950 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-16 text-center">Logical <span className="text-purple-500">Case Studies</span></h2>
        <div className="grid grid-cols-1 gap-12">
          {projects.map((p, i) => (
            <div key={i} className="p-8 md:p-12 rounded-[40px] bg-black border border-white/5 flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h3 className="text-3xl md:text-5xl font-bold mb-6">{p.title}</h3>
                <div className="flex gap-2 mb-8">
                  {p.tech.map((t, idx) => <span key={idx} className="text-[10px] uppercase font-mono px-3 py-1 bg-white/5 rounded-full">{t}</span>)}
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col gap-6">
                <div>
                  <span className="text-purple-500 text-xs font-mono uppercase font-bold tracking-widest block mb-2">The Challenge</span>
                  <p className="text-neutral-400 italic">"{p.challenge}"</p>
                </div>
                <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10">
                  <span className="text-purple-400 text-xs font-mono uppercase font-bold tracking-widest block mb-2">The Result</span>
                  <p className="text-white text-xl font-medium">{p.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      
      <Hero />
      
      <div className="w-full py-12 border-y border-white/5 flex justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all relative z-10 bg-black/50 backdrop-blur-sm">
        <div className="flex items-center gap-2"><ShieldCheck size={16} /> <span className="text-[10px] font-mono font-bold uppercase">SSL SECURED</span></div>
        <div className="flex items-center gap-2"><Zap size={16} /> <span className="text-[10px] font-mono font-bold uppercase">99+ PAGESPEED</span></div>
        <div className="flex items-center gap-2"><BarChart3 size={16} /> <span className="text-[10px] font-mono font-bold uppercase">SEO OPTIMIZED</span></div>
      </div>
      
      <Services />
      <Work />
      
      <section className="py-32 px-6 text-center relative z-10 bg-black">
        <h2 className="text-4xl md:text-6xl font-bold uppercase mb-8">Ready to <span className="text-purple-500">Scale?</span></h2>
        <a href="mailto:hello@abdullahkashif.com" className="text-2xl md:text-4xl font-display underline hover:text-purple-500 transition-colors">hello@abdullahkashif.com</a>
      </section>
    </main>
  );
}
