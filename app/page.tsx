"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// --- DYNAMIC 3D COMPONENTS (Hydration Safe) ---
const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const CalligraphySection = dynamic(() => import("@/components/CalligraphySection"), { ssr: false });
const Process = dynamic(() => import("@/components/Process"), { ssr: false });

// --- PREMIUM STATIC COMPONENTS ---
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import TrustSignals from "@/components/TrustSignals";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* 3D Background Scene */}
      <Suspense fallback={null}>
        <Scene />
      </Suspense>

      <div className="relative z-10 w-full overflow-hidden">
        {/* Premium Hero with Spline */}
        <Suspense fallback={<div className="h-screen flex items-center justify-center text-neutral-800 font-mono text-xs uppercase tracking-widest">Initialising 3D Engine...</div>}>
          <Hero />
        </Suspense>
        
        <TrustSignals />
        <About />
        
        <Suspense fallback={<div className="h-screen bg-black" />}>
          <CalligraphySection />
        </Suspense>
        
        <Services />
        
        <Suspense fallback={<div className="h-96 bg-black" />}>
          <Process />
        </Suspense>
        
        <Projects />
        <FAQ />
        <Contact />
      </div>
    </main>
  );
}
