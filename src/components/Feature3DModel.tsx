"use client";

import { useRef } from 'react';
import { Canvas, Vector3, useFrame } from '@react-three/fiber';
import { Environment, Float, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

interface ModelProps {
  rotation?: [number, number, number];
  position?: [number, number, number];
}

function Model({ rotation = [0, 0, 0], position = [0, 0, 0] }: ModelProps) {
  const group = useRef<THREE.Group>(null);
  const orbitGroup = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (orbitGroup.current) {
      orbitGroup.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={group} position={position as Vector3} rotation={rotation}>
      {/* Base platform */}
      <mesh position={[0, -1, 0]} receiveShadow>
        <cylinderGeometry args={[2, 2, 0.2, 32]} />
        <meshStandardMaterial color="#1e40af" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Central pillar */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 2, 32]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.6} roughness={0.2} />
      </mesh>

      {/* Top sphere (representing technology hub) */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#60a5fa" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Orbiting spheres (representing connected devices) */}
      <group ref={orbitGroup}>
        <mesh position={[1.5, 0.5, 0]} castShadow>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#93c5fd" metalness={0.5} roughness={0.3} />
        </mesh>
        <mesh position={[-1.5, 0.5, 0]} castShadow>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#93c5fd" metalness={0.5} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.5, 1.5]} castShadow>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#93c5fd" metalness={0.5} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.5, -1.5]} castShadow>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#93c5fd" metalness={0.5} roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
}

export default function Feature3DModel() {
  return (
    <div className="h-[500px] w-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 2, 5], fov: 50 }}
      >
        <color attach="background" args={['#f7fafb']} />
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          shadow-mapSize={2048}
          castShadow
        />
        <PresentationControls
          enabled={true}
          global={true}
          cursor={true}
          speed={1}
          zoom={1}
          rotation={[0.13, 0.1, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
        >
          <Float rotationIntensity={0.2}>
            <Model />
          </Float>
        </PresentationControls>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
} 