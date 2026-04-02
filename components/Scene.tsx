"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useState, useRef, useEffect, Suspense } from "react";

function ParticleSwarm(props: Record<string, unknown>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>();
  const mouse = useRef({ x: 0, y: 0 });
  const targetSpeed = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Create an invisible center: Normalize mouse coordinates from -1 to 1 based on screen size
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [sphere] = useState(() => {
    const array = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const radius = 1.5;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      array[i * 3] = x;
      array[i * 3 + 1] = y;
      array[i * 3 + 2] = z;
    }
    return array;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      // Smoothly interpolate the target rotation speed to match the mouse distance from center
      targetSpeed.current.x += (mouse.current.x * 1.5 - targetSpeed.current.x) * 0.05;
      targetSpeed.current.y += (mouse.current.y * 1.5 - targetSpeed.current.y) * 0.05;

      // Change rotation based on mouse position (above/below/sides)
      // mouse.y > 0 (above center) -> subtract from rotation.x (rotates top-down, moves surface UP)
      ref.current.rotation.x -= targetSpeed.current.y * delta;
      
      // mouse.x > 0 (right of center) -> add to rotation.y (rotates left-right, moves surface RIGHT)
      ref.current.rotation.y += targetSpeed.current.x * delta;

      // Slight 3D parallax position shift in the direction of the arrow (mouse)
      ref.current.position.x += (mouse.current.x * 0.4 - ref.current.position.x) * 0.05;
      ref.current.position.y += (mouse.current.y * 0.4 - ref.current.position.y) * 0.05;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#c084fc"
          size={0.008}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none h-screen w-full">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Suspense fallback={null}>
          <ParticleSwarm />
        </Suspense>
      </Canvas>
    </div>
  );
}
