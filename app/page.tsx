import AnimatedNavbar from "@/components/AnimatedNavbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <AnimatedNavbar />
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold uppercase tracking-widest">System Operational</h1>
      </div>
    </main>
  );
}
