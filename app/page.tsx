import dynamic from "next/dynamic";
import { Suspense } from "react";

// FORCE UPDATE V5 - STEP 5
const Scene = dynamic(() => import("@/components/Scene"), { 
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-[9999] bg-yellow-500 flex items-center justify-center">
      <span className="text-black font-mono text-2xl font-bold uppercase tracking-widest animate-pulse">
        LOADING SCENE (YELLOW)
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
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Scene - Step 5 of re-enabling */}
      <Scene />

      <div className="relative z-10 w-full overflow-hidden">
        <section className="h-screen flex items-center justify-center text-center px-6 bg-red-950/20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-8 text-white">
              FORCE UPDATE V5
            </h1>
            <p className="text-xl text-neutral-400">Step 5: Diagnostic. If you see a green or yellow screen, the component system is finally working.</p>
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
