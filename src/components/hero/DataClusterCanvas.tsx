"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function DataParticles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(900);
    for (let i = 0; i < 300; i++) {
      const radius = 1.2 + Math.random() * 1.8;
      const angle = Math.random() * Math.PI * 2;
      arr[i * 3] = Math.cos(angle) * radius;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 2.4;
      arr[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.12 + state.pointer.x * 0.25;
    ref.current.rotation.x = state.pointer.y * 0.08;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#60a5fa" size={0.035} sizeAttenuation depthWrite={false} opacity={0.78} />
    </Points>
  );
}

export function DataClusterCanvas() {
  return (
    <div className="relative h-[440px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/40 shadow-2xl shadow-blue-950/30">
      <Canvas camera={{ position: [0, 0, 5], fov: 55 }} dpr={[1, 1.6]}>
        <ambientLight intensity={0.7} />
        <pointLight position={[4, 4, 4]} intensity={1.5} />
        <DataParticles />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-xl">
        <div className="text-xs uppercase tracking-[0.25em] text-slate-400">Live transformation</div>
        <div className="mt-2 grid grid-cols-3 gap-2 text-sm text-white">
          <span>Raw Data</span><span>Insight Graph</span><span>Automation</span>
        </div>
      </div>
    </div>
  );
}
