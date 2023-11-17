import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function Robot(props) {
  const { nodes, materials } = useGLTF('/robot-transformed.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Robot014_0.geometry}
        material={new THREE.MeshStandardMaterial({ color: 0xbfaff2 })}
        position={[-1.359, 3.637, 0.247]}
        rotation={[3.125, 1.103, -2.179]}
        scale={0.691}
      />
      <mesh
        geometry={nodes.Robot014_1.geometry}
        material={materials.Material_B}
        position={[-1.359, 3.637, 0.247]}
        rotation={[3.125, 1.103, -2.179]}
        scale={0.691}
      />
      <mesh
        geometry={nodes.Robot014_2.geometry}
        material={materials.Material_C_2}
        position={[-1.359, 3.637, 0.247]}
        rotation={[3.125, 1.103, -2.179]}
        scale={0.691}
      />
      <mesh
        geometry={nodes.Robot016_2.geometry}
        material={materials.Material_C_1}
        position={[1.348, 3.684, 0.229]}
        rotation={[3.02, 1.392, -2.012]}
        scale={0.691}
      />
      <mesh
        geometry={nodes.Robot017_2.geometry}
        material={materials['Material.018']}
        position={[-1.165, 0.051, 0.205]}
        rotation={[2.599, 1.284, -1.565]}
        scale={0.691}
      />
      <mesh
        geometry={nodes.Robot015_0.geometry}
        material={materials.Material_A_0}
        position={[1.229, 0.044, 0.191]}
        rotation={[-2.509, 1.353, -2.813]}
        scale={0.691}
      />
      <mesh
        geometry={nodes.Robot015_2.geometry}
        material={materials.Material_C_0}
        position={[1.229, 0.044, 0.191]}
        rotation={[-2.509, 1.353, -2.813]}
        scale={0.691}
      />
      <mesh
        geometry={nodes.Robot001_2.geometry}
        material={materials.Material_C}
        rotation={[-3.119, 1.342, -2.173]}
        scale={0.691}
      />
      <mesh
        geometry={nodes.Robot001_3.geometry}
        material={materials.Material}
        rotation={[-3.119, 1.342, -2.173]}
        scale={0.691}
      />
    </group>
  );
}

useGLTF.preload('/robot-transformed.glb');

export default Robot;
