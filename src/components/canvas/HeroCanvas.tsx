import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment, ContactShadows } from '@react-three/drei';

const CrystalSphere = () => {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={1}
          opacity={1}
          metalness={0.1}
          roughness={0}
          ior={1.5}
          thickness={0.5}
          specularIntensity={1}
          specularColor="#ffffff"
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
};

const HeroCanvas = () => {
  return (
    <div className="w-full h-full relative z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <CrystalSphere />
          <Environment preset="city" />
          {/* Subtle shadow underneath */}
          <ContactShadows position={[0, -2, 0]} opacity={0.3} scale={10} blur={2.5} far={4} color="#343E16" />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
