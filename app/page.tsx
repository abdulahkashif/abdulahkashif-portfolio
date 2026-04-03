import dynamic from "next/dynamic";
import { Suspense } from "react";

// Using a visible fallback for diagnostics
const Scene = dynamic(() => import("@/components/Scene"), { 
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-[1] bg-yellow-500/20 flex items-center justify-center">
      <span className="text-yellow-500 font-mono text-xs uppercase tracking-widest animate-pulse">
        Loading Scene...
      </span>
    </div>
  )
});

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
      {/* Background Scene - Step 4 of re-enabling */}
      <Scene />

      <div className="relative z-10 w-full overflow-hidden">
        <section className="h-screen flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-8 text-gradient">
              Architecting <br /> Revenue.
            </h1>
            <p className="text-xl text-neutral-400">Step 4: Using visible Suspense loading state for Scene. Is the yellow text appearing?</p>
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
