"use client";

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 h-screen w-full bg-red-500 opacity-20 pointer-events-none flex items-center justify-center">
      <span className="text-white font-mono text-4xl font-bold opacity-50 uppercase tracking-widest">
        Engine Test Active
      </span>
    </div>
  );
}
