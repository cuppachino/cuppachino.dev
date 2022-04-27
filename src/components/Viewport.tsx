import * as THREE from 'three';
import { createRoot } from 'react-dom/client';
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, MeshProps, useFrame, useThree } from '@react-three/fiber';
import { Vector3 } from 'three';

const radians = (degrees: number) => {
  return (degrees * Math.PI) / 180;
};

const distance = (x1: number, y1: number, x2: number, y2: number) => {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};

const map = (
  value: number,
  start1: number,
  stop1: number,
  start2: number,
  stop2: number
) => {
  return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
};

const Box = (props: JSX.IntrinsicElements['mesh']) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

const Plane = (props: MeshProps) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // useFrame((state, delta) => mesh.current.rotateZ(0.03));

  const { viewport } = useThree();
  // console.log(viewport);

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[viewport.width, viewport.height, 1]}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <planeGeometry args={[viewport.width, viewport.height, 1]} />

      <meshStandardMaterial color={'#090909'} />
    </mesh>
  );
};

const Viewport = (props: {}) => {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 10;
  // camera.rotateX(0.5);

  // useEffect(() => {
  //   console.log(props.rotation.x);
  //   camera.rotateZ(props.rotation.x * 2000);
  //   // camera.rotation.y = props.rotation.y;
  // }, [props.rotation]);

  // camera.rotateZ(90);

  return (
    <div className='fixed w-full h-full -z-10'>
      <Canvas camera={camera}>
        <ambientLight />
        {/* <pointLight position={[10, 10, 10]} /> */}
        <Plane position={[0, 0, 0]} />
        <spotLight
          color={'RoyalBlue'}
          intensity={8}
          position={[-10, 50, 3.5]}
        />
        <spotLight
          color={'DeepPink'}
          intensity={4.5}
          position={[10, -50, 3.5]}
        />
        {/* <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} /> */}
      </Canvas>
    </div>
  );
};

export default Viewport;
