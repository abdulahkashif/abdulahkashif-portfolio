import AnimatedNavbar from "@/components/AnimatedNavbar";
import About from "@/components/About";
import Services from "@/components/Services";
import TrustSignals from "@/components/TrustSignals";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Re-enable Hero 3D engine with stable loading state
const Hero = dynamic(() => import("@/components/Hero"), { 
  ssr: false, 
  loading: () => <div className="h-screen flex items-center justify-center text-neutral-800">Initializing 3D Engine...</div> 
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <AnimatedNavbar />
      <div className="pt-32">
        <Suspense fallback={null}>
          <Hero />
        </Suspense>
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
