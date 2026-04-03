import AnimatedNavbar from "@/components/AnimatedNavbar";
import About from "@/components/About";
import Services from "@/components/Services";
import TrustSignals from "@/components/TrustSignals";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <AnimatedNavbar />
      <div className="pt-32">
        <div className="flex items-center justify-center py-20">
          <h1 className="text-4xl font-bold uppercase tracking-widest">System Operational</h1>
        </div>
        <TrustSignals />
        <About />
        <Services />
      </div>
    </main>
  );
}
