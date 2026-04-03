"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";
import { useScroll, useTransform, motion } from "framer-motion";

function CalligraphyStroke({ points, progress }: { points: THREE.Vector3[], progress: any }) {
  const lineRef = useRef<any>(null);

  // Animate the line drawing based on scroll progress
  useFrame(() => {
    if (lineRef.current) {
      // We use the progress from framer motion scroll
      const currentProgress = progress.get();
      lineRef.current.geometry.setDrawRange(0, Math.floor(points.length * currentProgress));
    }
  });

  return (
    <Line
      ref={lineRef}
      points={points}
      color="#c084fc"
      lineWidth={2}
      transparent
      opacity={0.8}
    />
  );
}

function CalligraphyScene() {
  const { scrollYProgress } = useScroll();
  // Map scroll progress to a specific range (e.g., when the section is in view)
  const drawProgress = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  // Generate a complex stroke representing "Logic Made Beautiful"
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < 500; i++) {
      const t = i / 10;
      const x = Math.sin(t * 0.5) * 2 + Math.cos(t * 0.2) * 1;
      const y = t * 0.1 - 2.5;
      const z = Math.sin(t * 0.3) * 0.5;
      p.push(new THREE.Vector3(x, y, z));
    }
    return p;
  }, []);

  return (
    <group position={[0, 0, 0]} rotation={[0, 0, Math.PI / 12]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <CalligraphyStroke points={points} progress={drawProgress} />
        {/* Additional accent strokes */}
        <CalligraphyStroke 
          points={points.map(p => new THREE.Vector3(p.x * 1.1, p.y, p.z * 1.1))} 
          progress={drawProgress} 
        />
      </Float>
    </group>
  );
}

export default function CalligraphySection() {
  return (
    <section className="relative z-10 h-screen flex items-center justify-center bg-black overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.5} />
          <CalligraphyScene />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-4 block">The Signature Move</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8">
            Complex Logic <br />
            <span className="text-gradient">Made Beautiful.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-neutral-400 font-sans">
            Inspired by the intricate flow of Arabic Calligraphy and the structural precision of Data Architecture. I don't just write code; I engineer digital legacies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
