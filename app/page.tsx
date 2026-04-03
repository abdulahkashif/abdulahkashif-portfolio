import AnimatedNavbar from "@/components/AnimatedNavbar";
import About from "@/components/About";
import Services from "@/components/Services";
import TrustSignals from "@/components/TrustSignals";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <AnimatedNavbar />
      <div className="pt-32">
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
