"use client";

import { useRef, useMemo, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We analyze your business goals, target audience, and bottlenecks. No code is written until I understand your path to revenue."
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Mapping the blueprint. I craft high-fidelity interfaces and performance architectures designed specifically for your growth."
  },
  {
    num: "03",
    title: "Build",
    desc: "Translating logic to reality. Rigorous engineering ensuring sub-second speeds, scalability, and airtight security protocols."
  },
  {
    num: "04",
    title: "Launch",
    desc: "The go-live protocol. Quality assurance, final speed optimization, and seamless deployment delivering immediate digital authority."
  },
  {
    num: "05",
    title: "Growth",
    desc: "Post-launch support and analytics. I monitor your performance and optimize for continuous lead generation and conversion."
  }
];

function MorphingModel({ scrollProgress }: { scrollProgress: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    
    // Slow rotation
    mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    mesh.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.5) * 0.1;

    // Control wireframe opacity and distortion based on scroll
    if (materialRef.current) {
      // As scroll increases, wireframe fades and distortion settles
      materialRef.current.wireframe = scrollProgress < 0.6;
      materialRef.current.distort = THREE.MathUtils.lerp(0.4, 0, scrollProgress);
      materialRef.current.opacity = THREE.MathUtils.lerp(0.8, 1, scrollProgress);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <RoundedBox ref={mesh} args={[3, 4, 0.2]} radius={0.1} smoothness={4}>
        <MeshDistortMaterial 
          ref={materialRef}
          color="#c084fc" 
          speed={2}
          distort={0.4}
          radius={1}
          transparent 
          opacity={0.8}
        />
      </RoundedBox>
    </Float>
  );
}

export default function Process() {
  const container = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useGSAP(() => {
    const trigger = ScrollTrigger.create({
      trigger: container.current,
      start: "top center",
      end: "bottom center",
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      }
    });

    // Animate steps with smooth reveal
    gsap.utils.toArray(".process-step").forEach((step: any) => {
      gsap.fromTo(step, 
        { opacity: 0, x: -30 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            end: "top 60%",
            scrub: true
          }
        }
      );
    });

    return () => trigger.kill();
  }, { scope: container });

  return (
    <section ref={container} className="relative z-10 py-32 px-6 md:px-12 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        <div className="lg:w-1/2 flex flex-col gap-12">
          <div className="mb-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight">
              The <span className="text-gradient">Process</span>
            </h2>
            <p className="mt-4 text-xl text-neutral-400 font-sans">
              A meticulously engineered methodology designed to eliminate client anxiety and ensure flawless execution.
            </p>
          </div>

          <div className="flex flex-col gap-12 border-l border-white/10 pl-6 md:pl-10 relative">
            {steps.map((step, index) => (
              <div key={index} className="process-step relative">
                <div className="absolute -left-[35px] md:-left-[51px] top-0 w-4 h-4 rounded-full bg-black border border-purple-500" />
                <span className="text-sm font-mono text-purple-400 mb-2 block">{step.num}</span>
                <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
                <p className="text-neutral-400 font-sans leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 h-[600px] sticky top-32 hidden lg:block rounded-3xl overflow-hidden border border-white/5 bg-neutral-900/20 backdrop-blur-sm">
          {/* Blueprint to Product 3D Transition */}
          <Canvas camera={{ position: [0, 0, 8] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <MorphingModel scrollProgress={scrollProgress} />
          </Canvas>
          <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
            <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">Architecture in Motion</span>
          </div>
        </div>

      </div>
    </section>
  );
}
