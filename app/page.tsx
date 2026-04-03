import dynamic from "next/dynamic";
import { Suspense } from "react";

// Re-enabling Scene first for diagnostics
const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

// Keeping others disabled for now
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
      {/* Background Scene - Step 1 of re-enabling */}
      <Suspense fallback={null}>
        <Scene />
      </Suspense>

      <div className="relative z-10 w-full overflow-hidden">
        <section className="h-screen flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-8 text-gradient">
              Architecting <br /> Revenue.
            </h1>
            <p className="text-xl text-neutral-400">Step 1: Background Scene re-enabled. Checking for stability...</p>
          </div>
        </section>
        
        <TrustSignals />
        <About />
        <Services />
        <Projects />
        <FAQ />
        <Contact />
      </div>
    </main>
  );
}
