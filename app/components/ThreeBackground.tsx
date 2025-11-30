'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

function RotatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state: any, delta: number) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#4f46e5" 
          wireframe 
          transparent 
          opacity={0.3} 
          emissive="#4f46e5"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <RotatingShape />
      </Canvas>
    </div>
  );
}
