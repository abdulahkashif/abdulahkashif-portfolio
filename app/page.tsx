import Scene from "@/components/Scene";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import CalligraphySection from "@/components/CalligraphySection";
import TrustSignals from "@/components/TrustSignals";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* 3D Space Background using Three.js & React Three Fiber */}
      <Scene />

      {/* Content Layers with GSAP & Framer Motion Animations */}
      <div className="relative z-10 w-full overflow-hidden">
        <Hero />
        <TrustSignals />
        <About />
        <CalligraphySection />
        <Services />
        <Process />
        <Projects />
        <FAQ />
        <Contact />
      </div>
    </main>
  );
}
