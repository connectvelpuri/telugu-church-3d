import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Stars,
  MeshDistortMaterial,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

function Cross() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 2.5, 0]}>
        <boxGeometry args={[0.25, 4.5, 0.25]} />
        <MeshDistortMaterial
          color="#d4a853"
          emissive="#d4a853"
          emissiveIntensity={0.6}
          metalness={0.9}
          roughness={0.1}
          distort={0.05}
        />
      </mesh>
      <mesh position={[0, 4.2, 0]}>
        <boxGeometry args={[2.5, 0.25, 0.25]} />
        <MeshDistortMaterial
          color="#d4a853"
          emissive="#d4a853"
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.1}
          distort={0.05}
        />
      </mesh>
      <mesh position={[0.4, 3.3, 0]} rotation={[0, 0, Math.PI / 6]}>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <MeshDistortMaterial
          color="#d4a853"
          emissive="#d4a853"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <mesh position={[-0.4, 3.3, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <MeshDistortMaterial
          color="#d4a853"
          emissive="#d4a853"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <pointLight position={[0, 3, 4]} intensity={2} color="#d4a853" distance={12} decay={2} />
    </group>
  );
}

function LightRays() {
  const count = 40;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 3 + Math.random() * 8;
      pos[i * 3] = Math.cos(angle) * radius * 0.5;
      pos[i * 3 + 1] = 2 + Math.random() * 6;
      pos[i * 3 + 2] = Math.sin(angle) * radius * 0.3 - 3;
      colors[i * 3] = 0.83 + Math.random() * 0.17;
      colors[i * 3 + 1] = 0.66 + Math.random() * 0.2;
      colors[i * 3 + 2] = 0.33 + Math.random() * 0.15;
    }
    return { pos, colors };
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
      pointsRef.current.material.opacity = 0.3 + Math.sin(clock.getElapsedTime() * 0.5) * 0.15;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.pos}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={positions.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function Pews() {
  const rows = 6;
  const seatsPerRow = 5;
  const pews: JSX.Element[] = [];

  for (let r = 0; r < rows; r++) {
    for (let s = 0; s < seatsPerRow; s++) {
      const xOffset = (s - Math.floor(seatsPerRow / 2)) * 1.2;
      const zOffset = -r * 1.5 - 2;
      pews.push(
        <group key={`${r}-${s}`} position={[xOffset, 0, zOffset]}>
          <mesh position={[0, 0.3, 0]}>
            <boxGeometry args={[1.0, 0.6, 0.8]} />
            <meshStandardMaterial color="#2d1f0e" roughness={0.9} metalness={0.1} />
          </mesh>
          <mesh position={[0, 0.8, -0.3]}>
            <boxGeometry args={[0.9, 0.05, 0.15]} />
            <meshStandardMaterial color="#4a3728" roughness={0.8} />
          </mesh>
        </group>
      );
    }
  }
  return <>{pews}</>;
}

function Altar() {
  return (
    <group position={[0, 0, -3]}>
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[2.5, 0.8, 1.2]} />
        <meshStandardMaterial color="#3a2a1a" roughness={0.7} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0.9, 0]}>
        <boxGeometry args={[2.2, 0.1, 1.0]} />
        <meshStandardMaterial color="#8b0000" roughness={0.6} metalness={0.3} />
      </mesh>
      <mesh position={[0, 1.0, 0]}>
        <boxGeometry args={[1.8, 0.05, 0.8]} />
        <meshStandardMaterial color="#d4a853" roughness={0.4} metalness={0.6} />
      </mesh>
      <mesh position={[0.8, 0.7, 0.55]}>
        <boxGeometry args={[0.4, 0.4, 0.05]} />
        <meshStandardMaterial color="#d4a853" roughness={0.3} metalness={0.7} />
      </mesh>
      <mesh position={[-0.8, 0.7, 0.55]}>
        <boxGeometry args={[0.4, 0.4, 0.05]} />
        <meshStandardMaterial color="#d4a853" roughness={0.3} metalness={0.7} />
      </mesh>
    </group>
  );
}

function StainedGlass() {
  const archPoints: [number, number, number][] = [];
  const colors = ["#8b0000", "#d4a853", "#1e3a5f", "#2d5a27", "#6b3fa0", "#c41e3a"];

  for (let i = 0; i < 5; i++) {
    const x = (i - 2) * 0.8;
    const y = Math.sqrt(9 - x * x) * 0.5 + 1;
    archPoints.push([x, y, -5]);
  }

  return (
    <group position={[0, 1.5, -5]}>
      {archPoints.slice(0, -1).map((point, i) => {
        const next = archPoints[i + 1];
        const midX = (point[0] + next[0]) / 2;
        const midY = (point[1] + next[1]) / 2;
        return (
          <mesh key={i} position={[midX, midY, 0]}>
            <planeGeometry args={[0.75, 0.7]} />
            <meshStandardMaterial
              color={colors[i % colors.length]}
              emissive={colors[i % colors.length]}
              emissiveIntensity={0.3}
              transparent
              opacity={0.7}
              roughness={0.2}
              metalness={0.1}
            />
          </mesh>
        );
      })}
      <mesh position={[0, 0.5, 0]}>
        <planeGeometry args={[3.5, 0.8]} />
        <meshStandardMaterial color="#1a1a3e" roughness={0.8} />
      </mesh>
    </group>
  );
}

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, -2]}>
      <planeGeometry args={[20, 14]} />
      <meshStandardMaterial
        color="#1a1a2e"
        roughness={0.9}
        metalness={0.05}
      />
    </mesh>
  );
}

function Pillars() {
  const positions = [
    [-3, 0, -4.5],
    [3, 0, -4.5],
    [-3, 0, 2],
    [3, 0, 2],
  ];
  return (
    <>
      {positions.map((pos, i) => (
        <group key={i} position={[pos[0], pos[1], pos[2]]}>
          <mesh>
            <cylinderGeometry args={[0.2, 0.25, 5, 16]} />
            <meshStandardMaterial color="#3a3a5c" roughness={0.6} metalness={0.3} />
          </mesh>
          <mesh position={[0, 2.6, 0]}>
            <cylinderGeometry args={[0.3, 0.2, 0.15, 16]} />
            <meshStandardMaterial color="#d4a853" roughness={0.4} metalness={0.5} />
          </mesh>
          <mesh position={[0, -2.5, 0]}>
            <cylinderGeometry args={[0.3, 0.35, 0.15, 16]} />
            <meshStandardMaterial color="#d4a853" roughness={0.4} metalness={0.5} />
          </mesh>
        </group>
      ))}
    </>
  );
}

function AmbientLighting() {
  const lightRef = useRef<THREE.SpotLight>(null);

  useFrame(({ clock }) => {
    if (lightRef.current) {
      lightRef.current.intensity = 15 + Math.sin(clock.getElapsedTime() * 1.5) * 3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} color="#4a3728" />
      <directionalLight position={[5, 10, 5]} intensity={0.5} color="#ffe4b5" />
      <spotLight
        ref={lightRef}
        position={[0, 7, 0]}
        angle={Math.PI / 4}
        penumbra={0.8}
        decay={1}
        distance={20}
        color="#d4a853"
      />
      <pointLight position={[-4, 3, -4]} intensity={0.8} color="#8b0000" />
      <pointLight position={[4, 3, -4]} intensity={0.8} color="#1e3a5f" />
      <hemisphereLight args={["#d4a853", "#0f0f23", 0.4]} />
    </>
  );
}

function SceneContent() {
  return (
    <group>
      <Floor />
      <Pillars />
      <Altar />
      <StainedGlass />
      <Pews />
      <Cross />
      <LightRays />
      <Sparkles
        count={80}
        scale={12}
        size={0.8}
        speed={0.2}
        color="#d4a853"
        opacity={0.15}
      />
    </group>
  );
}

export default function ChurchScene() {
  return (
    <Canvas
      camera={{ position: [0, 2.5, 8], fov: 50, near: 0.1, far: 30 }}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
      style={{ position: "fixed", inset: 0, pointerEvents: "none" }}
    >
      <AmbientLighting />
      <Stars
        radius={50}
        depth={50}
        count={2000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  );
}
