"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MousePointer2 } from "lucide-react";

export default function AutomationSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ("touches" in e ? e.touches[0].clientX : e.clientX) - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(position);
  };

  return (
    <div 
      className="relative w-full h-64 rounded-2xl overflow-hidden border border-white/10 cursor-ew-resize group"
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
    >
      {/* "AFTER" Layer (Clean Logic) */}
      <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center p-8">
        <div className="w-full space-y-4">
          <div className="h-2 w-full bg-purple-500/20 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-full bg-purple-500" 
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="h-8 w-1/3 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center text-[10px] text-purple-400 font-mono uppercase tracking-widest font-bold">Validated</div>
            <div className="h-8 w-1/3 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center text-[10px] text-purple-400 font-mono uppercase tracking-widest font-bold">Synced</div>
            <div className="h-8 w-1/3 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center text-[10px] text-purple-400 font-mono uppercase tracking-widest font-bold">Deployed</div>
          </div>
          <div className="text-center">
            <span className="text-xs font-mono text-purple-500 uppercase tracking-widest font-bold">100% Automated System</span>
          </div>
        </div>
      </div>

      {/* "BEFORE" Layer (Messy Workflow) */}
      <div 
        className="absolute inset-0 bg-neutral-950 flex items-center justify-center p-8 z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <div className="w-full space-y-4 opacity-40">
          <div className="flex flex-wrap gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="px-2 py-1 bg-red-500/10 border border-red-500/20 rounded text-[8px] text-red-400 font-mono uppercase">Manual Data Entry</div>
            ))}
          </div>
          <div className="h-2 w-2/3 bg-red-500/20 rounded-full" />
          <div className="h-2 w-full bg-red-500/20 rounded-full" />
          <div className="text-center">
            <span className="text-xs font-mono text-red-500 uppercase tracking-widest font-bold">Manual Bottleneck</span>
          </div>
        </div>
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-px bg-white z-20"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
          <MousePointer2 size={14} />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-30 pointer-events-none px-2 py-1 bg-black/50 backdrop-blur-md rounded text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">Before</div>
      <div className="absolute top-4 right-4 z-30 pointer-events-none px-2 py-1 bg-black/50 backdrop-blur-md rounded text-[10px] font-mono text-purple-500 uppercase tracking-widest font-bold">After</div>
    </div>
  );
}
