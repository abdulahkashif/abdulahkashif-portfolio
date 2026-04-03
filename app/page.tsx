"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// --- DYNAMIC COMPONENTS ---
// Only keeping Hero as the 3D interaction engine to prevent browser crash
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });

// Using standard components for stability
import Scene from "@/components/Scene";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import TrustSignals from "@/components/TrustSignals";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* 0% CPU CSS Background */}
      <Scene />

      <div className="relative z-10 w-full overflow-hidden">
        {/* The Single Spline 3D Engine */}
        <Suspense fallback={<div className="h-screen flex items-center justify-center text-neutral-800 font-mono text-xs uppercase tracking-widest">Initialising 3D Engine...</div>}>
          <Hero />
        </Suspense>
        
        <TrustSignals />
        <About />
        
        {/* Services & Solutions */}
        <Services />
        
        {/* Projects / Case Studies */}
        <Projects />
        
        <FAQ />
        <Contact />
      </div>
    </main>
  );
}
