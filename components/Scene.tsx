"use client";

import { motion } from "framer-motion";

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none h-screen w-full bg-[#030303] overflow-hidden">
      {/* Premium CSS-only Animated Sphere */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-transparent blur-[120px]" />
      </motion.div>

      {/* Logic Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} 
      />
    </div>
  );
}
