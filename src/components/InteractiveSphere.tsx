"use client"


import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, Suspense } from 'react'
import { Mesh } from 'three'
import { OrbitControls, Stars } from '@react-three/drei'

function Sphere() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <mesh ref={meshRef} scale={1.5}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#3b82f6"
        metalness={0.8}
        roughness={0.2}
        emissive="#1d4ed8"
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

function Rings() {
  const ringRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[2.5, 0.02, 16, 100]} />
      <meshBasicMaterial color="#8b5cf6" transparent opacity={0.3} />
    </mesh>
  )
}

const InteractiveSphere = () => {
  return (
    <div className="w-64 h-64">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Sphere />
          <Rings />
          <Stars radius={100} depth={50} count={5000} factor={4} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default InteractiveSphere















