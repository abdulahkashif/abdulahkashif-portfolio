"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import all 3D-heavy components with ssr: false
const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const CalligraphySection = dynamic(() => import("@/components/CalligraphySection"), { ssr: false });
const Process = dynamic(() => import("@/components/Process"), { ssr: false });

// Regular components
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import TrustSignals from "@/components/TrustSignals";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* 3D Space Background using Three.js & React Three Fiber */}
      <Suspense fallback={<div className="fixed inset-0 bg-black" />}>
        <Scene />
      </Suspense>

      {/* Content Layers with GSAP & Framer Motion Animations */}
      <div className="relative z-10 w-full overflow-hidden">
        <Suspense fallback={<div className="h-screen bg-black" />}>
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
