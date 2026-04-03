import dynamic from "next/dynamic";
import { Suspense } from "react";

// Temporarily disabling 3D components to isolate the loading issue
// const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });
// const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
// const CalligraphySection = dynamic(() => import("@/components/CalligraphySection"), { ssr: false });
// const Process = dynamic(() => import("@/components/Process"), { ssr: false });

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
      <div className="relative z-10 w-full overflow-hidden">
        {/* Placeholder for Hero during diagnostics */}
        <section className="h-screen flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-8 text-gradient">
              Architecting <br /> Revenue.
            </h1>
            <p className="text-xl text-neutral-400">Diagnostic mode: 3D components temporarily disabled to isolate loading loop.</p>
          </div>
        </section>
        
        <TrustSignals />
        <About />
        
        {/* <CalligraphySection /> */}
        
        <Services />
        
        {/* <Process /> */}
        
        <Projects />
        <FAQ />
        <Contact />
      </div>
    </main>
  );
}
