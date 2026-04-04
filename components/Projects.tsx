"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, CheckCircle2, Target, Lightbulb } from "lucide-react";
import SmoothReveal from "./SmoothReveal";

const projects = [
  {
    title: "NeuralNexus",
    challenge: "Premium brand struggling with low-quality leads and generic digital presence.",
    pivot: "Re-architected the entire front-end funnel using WebGL and Framer Motion to instantly capture high-ticket audience attention instead of relying solely on copy.",
    strategy: "Architected an immersive storytelling site with precision animations to capture high-ticket audience attention.",
    result: "40% increase in lead quality and a 25% reduction in bounce rate within 30 days.",
    tech: ["Conversion Strategy", "Revenue Optimization", "Premium UI"],
    link: "#",
    github: "#"
  },
  {
    title: "GraphToken Pipeline",
    challenge: "Business owners spending 30+ manual hours/week on multi-channel content publishing.",
    pivot: "The original third-party APIs failed under rate limits; I custom-engineered a staggered background queue system to ensure 100% successful deliveries.",
    strategy: "Engineered an automated publishing engine with real-time data sync and AI-driven scheduling.",
    result: "Saved 120+ manual hours/month, allowing the team to scale output without increasing headcount.",
    tech: ["Workflow Automation", "Operational Efficiency", "Scalability"],
    link: "#",
    github: "#"
  },
  {
    title: "Onyx Commerce",
    challenge: "Sub-optimal SEO and cart abandonment due to sluggish mobile load times.",
    pivot: "Original database queries were blocking the critical render path. I decoupled the architecture and implemented extreme edge-caching to bypass the bottlenecks.",
    strategy: "Designed a headless architecture with sub-second performance and edge-caching optimization.",
    result: "25% decrease in cart abandonment and immediate leap to top-3 SEO rankings for core keywords.",
    tech: ["Performance Engineering", "SEO Domination", "Growth Infrastructure"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="work" className="relative z-10 py-32 px-6 md:px-12 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <SmoothReveal>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-16">
            Logical <span className="text-gradient">Case Studies</span>
          </h2>
        </SmoothReveal>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative p-8 md:p-12 rounded-[40px] bg-neutral-900/40 border border-white/5 hover:border-purple-500/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px] pointer-events-none" />
              
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2">
                  <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">{project.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    <a href={project.link} className="flex items-center gap-2 text-sm font-medium hover:text-purple-400 transition-colors uppercase tracking-widest">
                      <ExternalLink size={16} /> Live Solution
                    </a>
                    <a href={project.github} className="flex items-center gap-2 text-sm font-medium hover:text-purple-400 transition-colors uppercase tracking-widest">
                      <Code2 size={16} /> Architecture
                    </a>
                  </div>
                </div>

                <div className="lg:w-1/2 flex flex-col gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-neutral-500 text-xs font-mono uppercase tracking-widest font-bold">
                      <Target size={14} className="text-purple-500" /> The Challenge
                    </div>
                    <p className="text-neutral-300 font-sans text-lg italic leading-relaxed">
                      &quot;{project.challenge}&quot;
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-neutral-500 text-xs font-mono uppercase tracking-widest font-bold">
                      <Code2 size={14} className="text-purple-500" /> The Technical Hurdle
                    </div>
                    <p className="text-neutral-400 font-sans leading-relaxed border-l border-purple-500/30 pl-4">
                      {project.pivot}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-neutral-500 text-xs font-mono uppercase tracking-widest font-bold">
                      <Lightbulb size={14} className="text-purple-500" /> The Strategy
                    </div>
                    <p className="text-neutral-400 font-sans leading-relaxed">
                      {project.strategy}
                    </p>
                  </div>

                  <div className="mt-4 p-6 rounded-3xl bg-purple-500/5 border border-purple-500/10">
                    <div className="flex items-center gap-2 text-purple-400 text-xs font-mono uppercase tracking-widest font-bold mb-2">
                      <CheckCircle2 size={14} /> The Result
                    </div>
                    <p className="text-white font-sans text-xl font-medium leading-tight">
                      {project.result}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
