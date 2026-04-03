"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, RoundedBox } from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

function ArchitecturalCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current || !groupRef.current) return;
    
    // Mouse interaction for "Precision and Control"
    const { x, y } = state.mouse;
    
    // Smoothly rotate based on mouse position
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * Math.PI * 0.2, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * Math.PI * 0.2, 0.05);

    // Subtle continuous rotation
    meshRef.current.rotation.z += 0.005;
  });

  // Create a lattice structure
  const latticeGeometry = useMemo(() => new THREE.IcosahedronGeometry(1.2, 1), []);

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* The "Logic" Core */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1, 15]} />
          <MeshDistortMaterial
            color="#c084fc"
            speed={2}
            distort={0.3}
            radius={1}
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Inner Solid Core symbolizing "Stability" */}
        <mesh>
          <icosahedronGeometry args={[0.4, 1]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#7c3aed"
            emissiveIntensity={1}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Outer Architectural Lattice */}
        <mesh geometry={latticeGeometry}>
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.05} />
        </mesh>
      </Float>
      
      {/* Lighting for when Environment is not used */}
      <pointLight position={[2, 2, 2]} intensity={10} color="#c084fc" />
      <pointLight position={[-2, -2, -2]} intensity={5} color="#7c3aed" />
    </group>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none h-screen w-full">
      <Canvas 
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={10} color="#ffffff" />
        <Suspense fallback={null}>
          <ArchitecturalCore />
        </Suspense>
      </Canvas>
    </div>
  );
}
