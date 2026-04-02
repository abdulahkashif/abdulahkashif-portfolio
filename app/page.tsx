import Scene from "@/components/Scene";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* 3D Space Background using Three.js & React Three Fiber */}
      <Scene />

      {/* Content Layers with GSAP & Framer Motion Animations */}
      <div className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
