import dynamic from "next/dynamic";
import { Suspense } from "react";

// Components with potential for runtime errors or heavy assets
const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const CalligraphySection = dynamic(() => import("@/components/CalligraphySection"), { ssr: false });
const Process = dynamic(() => import("@/components/Process"), { ssr: false });

// Statically optimized components
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import TrustSignals from "@/components/TrustSignals";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* 3D Background - isolated from other components */}
      <Suspense fallback={null}>
        <Scene />
      </Suspense>

      <div className="relative z-10 w-full overflow-hidden">
        {/* Hero - isolated */}
        <Suspense fallback={<div className="h-screen flex items-center justify-center text-neutral-800 font-mono text-xs uppercase tracking-widest">Initialising Hero Engine...</div>}>
          <Hero />
        </Suspense>
        
        <TrustSignals />
        <About />
        
        {/* Calligraphy - isolated */}
        <Suspense fallback={<div className="h-screen bg-black" />}>
          <CalligraphySection />
        </Suspense>
        
        <Services />
        
        {/* Process - isolated */}
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
