import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function MajesticCross() {
  const groupRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const haloRef = useRef<THREE.Mesh>(null);
  const beamRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.15) * 0.06;
    }
    if (glowRef.current) {
      const s = 1 + Math.sin(t * 0.4) * 0.08;
      glowRef.current.scale.set(s, s, s);
    }
    if (haloRef.current) {
      haloRef.current.rotation.z = t * 0.08;
    }
    if (beamRef.current) {
      (beamRef.current.material as THREE.MeshBasicMaterial).opacity = 0.08 + Math.sin(t * 0.6) * 0.04;
    }
  });

  return (
    <group ref={groupRef} position={[0, 2, -3]}>
      <mesh position={[0, 2.8, 0]} castShadow>
        <boxGeometry args={[0.35, 5.6, 0.35]} />
        <meshStandardMaterial color="#3d2b1f" roughness={0.7} metalness={0.3} />
      </mesh>
      <mesh position={[0, 4.5, 0]} castShadow>
        <boxGeometry args={[3.2, 0.25, 0.3]} />
        <meshStandardMaterial color="#3d2b1f" roughness={0.7} metalness={0.3} />
      </mesh>
      <mesh position={[0.6, 3.5, 0]} rotation={[0, 0, 0.3]}>
        <boxGeometry args={[0.12, 0.5, 0.12]} />
        <meshStandardMaterial color="#3d2b1f" roughness={0.7} metalness={0.3} />
      </mesh>
      <mesh position={[-0.6, 3.5, 0]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[0.12, 0.5, 0.12]} />
        <meshStandardMaterial color="#3d2b1f" roughness={0.7} metalness={0.3} />
      </mesh>
      <mesh position={[0, 2.8, 0.25]}>
        <boxGeometry args={[0.15, 5.6, 0.03]} />
        <meshStandardMaterial color="#c9a96e" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh position={[0, 4.5, 0.25]}>
        <boxGeometry args={[3.2, 0.06, 0.03]} />
        <meshStandardMaterial color="#c9a96e" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh ref={haloRef} position={[0, 4.5, -0.6]}>
        <torusGeometry args={[1.1, 0.04, 16, 48]} />
        <meshBasicMaterial color="#c9a96e" transparent opacity={0.5} />
      </mesh>
      <mesh ref={glowRef} position={[0, 4.5, -0.4]}>
        <sphereGeometry args={[0.9, 20, 20]} />
        <meshBasicMaterial color="#c9a96e" transparent opacity={0.1} />
      </mesh>
      <mesh ref={beamRef} position={[0, 6, 0]} rotation={[0, 0, 0]}>
        <coneGeometry args={[1.2, 3, 12]} />
        <meshBasicMaterial color="#c9a96e" transparent opacity={0.08} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[0.8, 0.4, 0.8]} />
        <meshStandardMaterial color="#2a1f14" roughness={0.9} metalness={0.1} />
      </mesh>
      <pointLight position={[0, 3.5, 1.5]} intensity={4} color="#c9a96e" distance={12} decay={2} />
    </group>
  );
}

function GodsThrone() {
  const lightRef = useRef<THREE.PointLight>(null);
  const cloudRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (lightRef.current) {
      lightRef.current.intensity = 2.5 + Math.sin(t * 0.4) * 0.8;
    }
    if (cloudRef.current) {
      cloudRef.current.position.y = Math.sin(t * 0.2) * 0.05;
    }
  });

  const clouds = useMemo(() => {
    const arr: { x: number; y: number; z: number; s: number }[] = [];
    for (let i = 0; i < 8; i++) {
      arr.push({
        x: (Math.random() - 0.5) * 3,
        y: Math.random() * 0.5,
        z: (Math.random() - 0.5) * 2,
        s: 0.5 + Math.random() * 0.8,
      });
    }
    return arr;
  }, []);

  return (
    <group position={[-3, 0.5, -3.5]}>
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial color="#3d2b1f" roughness={0.9} metalness={0.1} />
      </mesh>
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[2.4, 0.2, 1.6]} />
        <meshStandardMaterial color="#5a4030" roughness={0.8} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0.55, 0]}>
        <boxGeometry args={[1.8, 0.3, 1.2]} />
        <meshStandardMaterial color="#4a3020" roughness={0.9} metalness={0.1} />
      </mesh>
      <mesh position={[0, 1.0, -0.2]}>
        <boxGeometry args={[1.6, 0.6, 1.0]} />
        <meshStandardMaterial color="#4a3020" roughness={0.8} metalness={0.1} />
      </mesh>
      <mesh position={[0, 2.2, -0.7]}>
        <boxGeometry args={[1.8, 1.8, 0.2]} />
        <meshStandardMaterial color="#3d2b1f" roughness={0.7} metalness={0.2} />
      </mesh>
      <mesh position={[0, 2.8, -0.6]}>
        <boxGeometry args={[0.05, 0.06, 0.06]} />
        <meshStandardMaterial color="#c9a96e" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh position={[-0.9, 0.9, -0.2]}>
        <boxGeometry args={[0.12, 0.4, 0.9]} />
        <meshStandardMaterial color="#4a3020" roughness={0.8} metalness={0.1} />
      </mesh>
      <mesh position={[0.9, 0.9, -0.2]}>
        <boxGeometry args={[0.12, 0.4, 0.9]} />
        <meshStandardMaterial color="#4a3020" roughness={0.8} metalness={0.1} />
      </mesh>
      <mesh position={[-0.9, 1.1, -0.65]}>
        <boxGeometry args={[0.15, 0.08, 0.15]} />
        <meshStandardMaterial color="#c9a96e" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh position={[0.9, 1.1, -0.65]}>
        <boxGeometry args={[0.15, 0.08, 0.15]} />
        <meshStandardMaterial color="#c9a96e" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh position={[0, 3.2, -0.3]}>
        <sphereGeometry args={[0.6, 20, 20]} />
        <meshBasicMaterial color="#c9a96e" transparent opacity={0.15} />
      </mesh>
      <mesh position={[0, 3.4, -0.3]}>
        <sphereGeometry args={[0.35, 20, 20]} />
        <meshBasicMaterial color="#ffe4b5" transparent opacity={0.2} />
      </mesh>
      <pointLight ref={lightRef} position={[0, 3.5, 0.5]} intensity={2.5} color="#c9a96e" distance={8} decay={2} />
      <group ref={cloudRef}>
        {clouds.map((c, i) => (
          <mesh key={i} position={[c.x, c.y, c.z]} scale={[c.s, 0.3, c.s * 0.5]}>
            <sphereGeometry args={[0.5, 8, 8]} />
            <meshBasicMaterial color="#f5f0eb" transparent opacity={0.06} />
          </mesh>
        ))}
      </group>
      <mesh position={[0, 0.2, -1]}>
        <boxGeometry args={[1.2, 0.06, 0.15]} />
        <meshStandardMaterial color="#c9a96e" roughness={0.3} metalness={0.7} />
      </mesh>
    </group>
  );
}

function ChurchPillars() {
  const positions = [
    [-4.5, 0, -5], [4.5, 0, -5],
    [-4.5, 0, 2.5], [4.5, 0, 2.5],
  ];
  const extras = [
    [-3.5, 0, -5], [3.5, 0, -5],
    [-3.5, 0, 2.5], [3.5, 0, 2.5],
  ];

  return (
    <>
      {positions.map((pos, i) => (
        <group key={`main-${i}`} position={[pos[0], pos[1], pos[2]]}>
          <mesh>
            <cylinderGeometry args={[0.2, 0.25, 6, 12]} />
            <meshStandardMaterial color="#2a1f14" roughness={0.8} metalness={0.2} />
          </mesh>
          <mesh position={[0, 3.2, 0]}>
            <cylinderGeometry args={[0.3, 0.2, 0.15, 12]} />
            <meshStandardMaterial color="#c9a96e" roughness={0.4} metalness={0.6} />
          </mesh>
          <mesh position={[0, -3, 0]}>
            <cylinderGeometry args={[0.3, 0.35, 0.15, 12]} />
            <meshStandardMaterial color="#c9a96e" roughness={0.4} metalness={0.6} />
          </mesh>
        </group>
      ))}
      {extras.map((pos, i) => (
        <group key={`extra-${i}`} position={[pos[0], pos[1], pos[2]]}>
          <mesh>
            <cylinderGeometry args={[0.12, 0.15, 5, 10]} />
            <meshStandardMaterial color="#2a1f14" roughness={0.8} metalness={0.2} />
          </mesh>
          <mesh position={[0, 2.7, 0]}>
            <cylinderGeometry args={[0.2, 0.12, 0.1, 10]} />
            <meshStandardMaterial color="#c9a96e" roughness={0.4} metalness={0.6} />
          </mesh>
        </group>
      ))}
    </>
  );
}

function StainedGlass() {
  const colors: [string, number][] = [
    ["#8b0000", 0.2], ["#1a3a5f", 0.15], ["#c9a96e", 0.25],
    ["#2d5a27", 0.15], ["#6b3fa0", 0.15], ["#c41e3a", 0.2],
  ];

  return (
    <group position={[0, 2.8, -6]}>
      <mesh position={[0, 0.3, -0.05]}>
        <planeGeometry args={[6.5, 4.5]} />
        <meshStandardMaterial color="#1a1410" roughness={0.9} side={THREE.DoubleSide} />
      </mesh>
      {colors.map(([color], i) => {
        const x = (i - 2.5) * 0.9;
        return (
          <mesh key={i} position={[x, 0.6, 0]}>
            <planeGeometry args={[0.75, 1.6]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.2}
              transparent
              opacity={0.35}
              roughness={0.3}
              metalness={0.1}
            />
          </mesh>
        );
      })}
      <mesh position={[0, 0.3, 0.04]}>
        <boxGeometry args={[0.06, 0.08, 0.02]} />
        <meshBasicMaterial color="#f5f0eb" transparent opacity={0.4} />
      </mesh>
      <mesh position={[0, 0.8, 0.04]}>
        <boxGeometry args={[1.2, 0.06, 0.02]} />
        <meshBasicMaterial color="#f5f0eb" transparent opacity={0.4} />
      </mesh>
      <mesh position={[0, -0.2, 0.04]}>
        <boxGeometry args={[0.06, 0.6, 0.02]} />
        <meshBasicMaterial color="#f5f0eb" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

function AmbientLighting() {
  const spotRef = useRef<THREE.SpotLight>(null);

  useFrame(({ clock }) => {
    if (spotRef.current) {
      spotRef.current.intensity = 12 + Math.sin(clock.getElapsedTime() * 0.5) * 4;
    }
  });

  return (
    <>
      <ambientLight intensity={0.05} color="#8b6914" />
      <directionalLight position={[2, 8, 4]} intensity={0.15} color="#ffe4b5" />
      <spotLight
        ref={spotRef}
        position={[0, 9, 0]}
        angle={Math.PI / 7}
        penumbra={0.95}
        decay={1}
        distance={25}
        color="#c9a96e"
      />
      <hemisphereLight args={["#c9a96e", "#1a1410", 0.15]} />
      <pointLight position={[-5, 3, -5]} intensity={0.4} color="#8b0000" />
      <pointLight position={[5, 3, -5]} intensity={0.4} color="#1a3a5f" />
      <pointLight position={[0, 1, 4]} intensity={0.2} color="#c9a96e" />
    </>
  );
}

function GodRays() {
  const rayRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (rayRef.current) {
      rayRef.current.rotation.y += 0.0002;
    }
  });

  const rays = useMemo(() => {
    const arr: { angle: number; len: number; s: number }[] = [];
    for (let i = 0; i < 12; i++) {
      arr.push({
        angle: (i / 12) * Math.PI * 2,
        len: 1.5 + Math.random() * 3,
        s: 0.03 + Math.random() * 0.04,
      });
    }
    return arr;
  }, []);

  return (
    <group ref={rayRef} position={[0, 5, -1]}>
      {rays.map((r, i) => (
        <mesh
          key={i}
          position={[Math.cos(r.angle) * 0.3, -r.len / 2, Math.sin(r.angle) * 0.3]}
          rotation={[r.angle + Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[r.s, r.len]} />
          <meshBasicMaterial
            color="#c9a96e"
            transparent
            opacity={0.03}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function SceneContent() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, -2]}>
        <planeGeometry args={[18, 14]} />
        <meshStandardMaterial color="#1a1410" roughness={0.95} metalness={0.02} />
      </mesh>
      <AmbientLighting />
      <ChurchPillars />
      <StainedGlass />
      <MajesticCross />
      <GodsThrone />
      <GodRays />
    </group>
  );
}

function FloatingParticles() {
  const count = 120;
  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = Math.random() * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16 - 2;
    }
    return [pos];
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.00015;
      const mat = pointsRef.current.material as THREE.PointsMaterial;
      mat.opacity = 0.15 + Math.sin(clock.getElapsedTime() * 0.15) * 0.08;
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
      camera={{ position: [0, 2.2, 5.5], fov: 55, near: 0.1, far: 30 }}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
      style={{ position: "fixed", inset: 0, pointerEvents: "none" }}
    >
      <SceneContent />
      <FloatingParticles />
    </Canvas>
  );
}
