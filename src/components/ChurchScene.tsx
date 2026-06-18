import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WalkingJesus({ clockOffset = 0 }: { clockOffset?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Group>(null);
  const rightLegRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() + clockOffset;
    if (groupRef.current) {
      groupRef.current.position.x = Math.sin(t * 0.15) * 3;
      groupRef.current.position.y = 0.5 + Math.abs(Math.sin(t * 2)) * 0.06;
    }
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(t * 0.4) * 0.4;
      headRef.current.rotation.z = Math.sin(t * 0.4) * 0.05;
    }
    if (leftArmRef.current) {
      leftArmRef.current.rotation.x = Math.sin(t * 2) * 0.4;
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.x = Math.sin(t * 2 + Math.PI) * 0.4;
    }
    if (leftLegRef.current) {
      leftLegRef.current.rotation.x = Math.sin(t * 2 + Math.PI) * 0.3;
    }
    if (rightLegRef.current) {
      rightLegRef.current.rotation.x = Math.sin(t * 2) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.5, -1.5]} scale={0.9}>
      <group ref={leftArmRef} position={[-0.35, 1.1, 0]}>
        <mesh position={[-0.4, -0.3, 0]} castShadow>
          <capsuleGeometry args={[0.07, 0.5, 4, 8]} />
          <meshStandardMaterial color="#e8dcc8" roughness={0.6} />
        </mesh>
      </group>
      <group ref={rightArmRef} position={[0.35, 1.1, 0]}>
        <mesh position={[0.4, -0.3, 0]} castShadow>
          <capsuleGeometry args={[0.07, 0.5, 4, 8]} />
          <meshStandardMaterial color="#e8dcc8" roughness={0.6} />
        </mesh>
      </group>
      <mesh position={[0, 0.6, 0]} castShadow>
        <capsuleGeometry args={[0.2, 0.9, 6, 12]} />
        <meshStandardMaterial color="#e8dcc8" roughness={0.5} metalness={0.1} />
      </mesh>
      <mesh ref={headRef} position={[0, 1.3, 0]} castShadow>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial color="#c9b89e" roughness={0.4} metalness={0.1} />
      </mesh>
      <group ref={leftLegRef} position={[-0.12, 0.1, 0]}>
        <mesh position={[0, -0.35, 0]} castShadow>
          <capsuleGeometry args={[0.08, 0.5, 4, 8]} />
          <meshStandardMaterial color="#5a4a3a" roughness={0.7} />
        </mesh>
      </group>
      <group ref={rightLegRef} position={[0.12, 0.1, 0]}>
        <mesh position={[0, -0.35, 0]} castShadow>
          <capsuleGeometry args={[0.08, 0.5, 4, 8]} />
          <meshStandardMaterial color="#5a4a3a" roughness={0.7} />
        </mesh>
      </group>
      <pointLight position={[0, 1.5, 0.5]} intensity={0.8} color="#c9a96e" distance={4} decay={2} />
    </group>
  );
}

function ClothOnCross() {
  const clothRef = useRef<THREE.Mesh>(null);
  const initialPositions = useMemo(() => {
    const geo = new THREE.PlaneGeometry(1.8, 3.2, 30, 40);
    return geo.attributes.position.array.slice();
  }, []);

  useFrame(({ clock }) => {
    if (!clothRef.current) return;
    const pos = clothRef.current.geometry.attributes.position;
    const array = pos.array as Float32Array;
    const t = clock.getElapsedTime();
    for (let i = 0; i < array.length / 3; i++) {
      const x = initialPositions[i * 3];
      const y = initialPositions[i * 3 + 1];
      const distFromTop = (y + 1.6) / 3.2;
      const waveX = Math.sin(x * 3 + t * 1.2) * 0.03 * distFromTop;
      const waveZ = Math.sin(x * 2 + y * 3 + t * 0.8) * 0.08 * distFromTop;
      array[i * 3 + 2] = initialPositions[i * 3 + 2] + waveZ;
      array[i * 3] = initialPositions[i * 3] + waveX;
    }
    pos.needsUpdate = true;
  });

  return (
    <group position={[2.5, 1.8, -2]}>
      <mesh position={[0, 1.8, 0]}>
        <boxGeometry args={[0.12, 3.6, 0.12]} />
        <meshStandardMaterial color="#3a2a1a" roughness={0.8} metalness={0.2} />
      </mesh>
      <mesh position={[0, 3.3, 0]}>
        <boxGeometry args={[1.8, 0.12, 0.12]} />
        <meshStandardMaterial color="#3a2a1a" roughness={0.8} metalness={0.2} />
      </mesh>
      <mesh ref={clothRef} position={[0, 2.3, 0.08]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1.8, 3.2, 30, 40]} />
        <meshStandardMaterial
          color="#e8dcc8"
          roughness={0.9}
          metalness={0.0}
          transparent
          opacity={0.7}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
      <pointLight position={[0, 2.5, 1.5]} intensity={1.5} color="#c9a96e" distance={6} decay={2} />
    </group>
  );
}

function CrossGlow() {
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (glowRef.current) {
      const s = 1 + Math.sin(clock.getElapsedTime() * 0.8) * 0.08;
      glowRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group position={[2.5, 1.8, -2]}>
      <mesh ref={glowRef} position={[0, 1.8, 0]}>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshBasicMaterial color="#c9a96e" transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

function AmbientScene() {
  const lightRef = useRef<THREE.SpotLight>(null);

  useFrame(({ clock }) => {
    if (lightRef.current) {
      lightRef.current.intensity = 8 + Math.sin(clock.getElapsedTime() * 0.8) * 3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.08} color="#c9a96e" />
      <directionalLight position={[3, 8, 4]} intensity={0.3} color="#ffe4b5" />
      <spotLight
        ref={lightRef}
        position={[0, 6, 0]}
        angle={Math.PI / 5}
        penumbra={0.9}
        decay={1}
        distance={15}
        color="#c9a96e"
      />
      <hemisphereLight args={["#c9a96e", "#0a0a0a", 0.3]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, -1]}>
        <planeGeometry args={[16, 12]} />
        <meshStandardMaterial color="#0f0f0f" roughness={1} metalness={0} />
      </mesh>
      <WalkingJesus clockOffset={0} />
      <WalkingJesus clockOffset={Math.PI} />
      <ClothOnCross />
      <CrossGlow />
    </>
  );
}

function FloatingParticles() {
  const count = 60;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = Math.random() * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12 - 2;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0003;
      const mat = pointsRef.current.material as THREE.PointsMaterial;
      mat.opacity = 0.15 + Math.sin(clock.getElapsedTime() * 0.3) * 0.08;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          args={[positions, 3]}
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#c9a96e"
        transparent
        opacity={0.2}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

export default function ChurchScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.8, 5.5], fov: 55, near: 0.1, far: 20 }}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
      style={{ position: "fixed", inset: 0, pointerEvents: "none" }}
    >
      <AmbientScene />
      <FloatingParticles />
    </Canvas>
  );
}
