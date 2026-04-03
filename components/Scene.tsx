"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

function ArchitecturalCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current || !groupRef.current || !innerRef.current) return;
    
    const { x, y } = state.mouse;
    const time = state.clock.getElapsedTime();
    
    // Smoothly rotate group based on mouse position
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * Math.PI * 0.3, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * Math.PI * 0.3, 0.05);

    // Organic movement via manual vertex manipulation or simple rotation
    meshRef.current.rotation.z = time * 0.1;
    meshRef.current.scale.setScalar(1 + Math.sin(time * 0.5) * 0.05);
    
    innerRef.current.rotation.y = -time * 0.2;
  });

  const latticeGeometry = useMemo(() => new THREE.IcosahedronGeometry(1.5, 1), []);

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* The "Logic" Core - High Stability Version */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1, 4]} />
          <meshStandardMaterial
            color="#c084fc"
            wireframe
            transparent
            opacity={0.3}
            metalness={0.5}
            roughness={0.5}
          />
        </mesh>

        {/* Inner Solid Core */}
        <mesh ref={innerRef}>
          <icosahedronGeometry args={[0.45, 1]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#7c3aed"
            emissiveIntensity={1}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Outer Architectural Lattice */}
        <mesh geometry={latticeGeometry}>
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.05} />
        </mesh>
      </Float>
      
      {/* Reliable Lighting */}
      <pointLight position={[5, 5, 5]} intensity={10} color="#c084fc" />
      <pointLight position={[-5, -5, -5]} intensity={5} color="#7c3aed" />
    </group>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 h-screen w-full bg-[#030303] pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <ArchitecturalCore />
        </Suspense>
      </Canvas>
    </div>
  );
}
