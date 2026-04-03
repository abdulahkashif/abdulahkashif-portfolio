"use client";

import AnimatedNavbar from "@/components/AnimatedNavbar";
import About from "@/components/About";
import Services from "@/components/Services";
import TrustSignals from "@/components/TrustSignals";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Hero = dynamic(() => import("@/components/Hero"), { 
  ssr: false, 
  loading: () => <div className="h-screen flex items-center justify-center text-neutral-800">Initializing 3D Engine...</div> 
});

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      
      <AnimatedNavbar />
      
      {/* Remove pt-32 to allow Hero to take full screen */}
      <Suspense fallback={null}>
        <Hero />
      </Suspense>
        
      <TrustSignals />
      <About />
      <Services />
      <Projects />
      <FAQ />
      <Contact />
    </main>
  );
}
