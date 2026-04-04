"use client";

import { motion } from "framer-motion";
import { Terminal, Circle, Code2 } from "lucide-react";

export default function TerminalSnippet() {
  const codeLines = [
    { type: "comment", text: "// AI-Augmented Architecture Initialization" },
    { type: "keyword", text: "import" },
    { type: "plain", text: " { Nextjs, VercelEdge } " },
    { type: "keyword", text: "from" },
    { type: "string", text: ' "@infrastructure/core"' },
    { break: true },
    { type: "comment", text: "// Initialize proprietary Digital Asset" },
    { type: "keyword", text: "const" },
    { type: "plain", text: " businessEngine " },
    { type: "operator", text: "=" },
    { type: "keyword", text: " new" },
    { type: "plain", text: " Nextjs({" },
    { break: true },
    { type: "property", text: "  performanceMode:" },
    { type: "string", text: " 'extreme'" },
    { type: "plain", text: "," },
    { break: true },
    { type: "property", text: "  templateBloat:" },
    { type: "number", text: " 0" },
    { type: "plain", text: "," },
    { break: true },
    { type: "property", text: "  aiIntegration:" },
    { type: "keyword", text: " true" },
    { break: true },
    { type: "plain", text: "});" },
    { break: true },
    { break: true },
    { type: "keyword", text: "await" },
    { type: "plain", text: " businessEngine.deploy({ " },
    { type: "property", text: "edgeNetwork:" },
    { type: "keyword", text: " true" },
    { type: "plain", text: " });" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="rounded-xl overflow-hidden bg-[#0d0d0d] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] font-mono text-sm max-w-lg w-full ring-1 ring-white/5"
    >
      <div className="flex items-center justify-between px-4 py-3 bg-[#161616] border-b border-white/5">
        <div className="flex items-center gap-2">
          <Circle size={10} className="fill-red-500 text-red-500" />
          <Circle size={10} className="fill-yellow-500 text-yellow-500" />
          <Circle size={10} className="fill-green-500 text-green-500" />
        </div>
        <div className="flex items-center gap-2 text-neutral-500 text-[10px] uppercase font-bold tracking-widest">
          <Terminal size={12} /> execution_node.ts
        </div>
        <div className="w-10"></div>
      </div>
      
      <div className="p-6 overflow-x-auto text-sm leading-relaxed">
        <div className="flex">
          <div className="flex flex-col text-neutral-600 pr-4 select-none border-r border-white/5 mr-4 text-right">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
          </div>
          <div className="flex flex-col whitespace-pre">
            {codeLines.map((line, i) => {
              if (line.break) return <div key={i} className="h-6"></div>;
              
              let color = "text-neutral-300";
              if (line.type === "keyword") color = "text-purple-400";
              if (line.type === "string") color = "text-emerald-400";
              if (line.type === "comment") color = "text-neutral-500 italic";
              if (line.type === "number") color = "text-blue-400";
              if (line.type === "operator") color = "text-pink-500";
              if (line.type === "property") color = "text-blue-300";

              return <span key={i} className={`inline ${color}`}>{line.text}</span>;
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
