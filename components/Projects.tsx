"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "NeuralNexus",
    description: "Futuristic AI Agency landing page with Anti-Grid layout and Bioluminescent palette.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
    github: "#"
  },
  {
    title: "GraphToken",
    description: "Instagram automated publishing pipeline using Graph API with background tasks.",
    tech: ["Node.js", "Express", "Instagram API"],
    link: "#",
    github: "#"
  },
  {
    title: "Onyx E-Commerce",
    description: "High-performance headless e-commerce store focusing on micro-interactions and speed.",
    tech: ["React", "Three.js", "Shopify"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section className="relative z-10 py-32 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-16">
            Selected <span className="text-gradient">Works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative p-8 rounded-3xl bg-neutral-900/50 border border-white/10 hover:border-purple-500/50 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
              
              <h3 className="text-2xl font-display font-bold mb-4">{project.title}</h3>
              <p className="text-neutral-400 font-sans mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a href={project.link} className="flex items-center gap-2 text-sm font-medium hover:text-purple-400 transition-colors">
                  <ExternalLink size={16} /> Live Site
                </a>
                <a href={project.github} className="flex items-center gap-2 text-sm font-medium hover:text-purple-400 transition-colors">
                  <Code2 size={16} /> Source
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
