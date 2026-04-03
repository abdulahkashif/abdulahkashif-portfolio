"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, MeshWobbleMaterial } from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

function ArchitecturalCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current || !groupRef.current || !innerRef.current) return;
    
    const { x, y } = state.mouse;
    
    // Smoothly rotate group based on mouse position (Precision and Control)
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * Math.PI * 0.4, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * Math.PI * 0.4, 0.05);

    // Subtle continuous rotation for different parts
    meshRef.current.rotation.z += 0.005;
    innerRef.current.rotation.y -= 0.01;
  });

  const latticeGeometry = useMemo(() => new THREE.IcosahedronGeometry(1.5, 1), []);

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* The "Logic" Core - Outer Distorted Shell */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1, 15]} />
          <MeshDistortMaterial
            color="#c084fc"
            speed={2}
            distort={0.4}
            radius={1}
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>

        {/* Inner Solid Core - The Stable Logic */}
        <mesh ref={innerRef}>
          <icosahedronGeometry args={[0.45, 1]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#7c3aed"
            emissiveIntensity={2}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Outer Architectural Lattice - Structure */}
        <mesh geometry={latticeGeometry}>
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.08} />
        </mesh>

        {/* Secondary Wobble Layer for Depth */}
        <mesh scale={1.2}>
          <icosahedronGeometry args={[1, 2]} />
          <MeshWobbleMaterial
            color="#c084fc"
            speed={1}
            factor={0.4}
            wireframe
            transparent
            opacity={0.1}
          />
        </mesh>
      </Float>
      
      {/* Precision High-Tier Lighting */}
      <pointLight position={[5, 5, 5]} intensity={20} color="#c084fc" />
      <pointLight position={[-5, -5, -5]} intensity={10} color="#7c3aed" />
      <spotLight position={[0, 10, 0]} intensity={15} color="#ffffff" angle={0.3} />
    </group>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none h-screen w-full bg-[#030303]">
      <Canvas 
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true, stencil: false, depth: true }}
        dpr={[1, 2]} // High DPI support
      >
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <ArchitecturalCore />
        </Suspense>
      </Canvas>
    </div>
  );
}
