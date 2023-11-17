import { useGLTF } from '@react-three/drei';

export function Phone(props) {
  const { nodes, materials } = useGLTF('/phone-transformed.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes['���������001_Black_0'].geometry}
        material={materials.PaletteMaterial001}
        position={[2.015, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes['���������004_Back_0'].geometry}
        material={materials.PaletteMaterial002}
        position={[-21.691, 144.834, -41.848]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={41.455}
      />
      <mesh
        geometry={nodes['���������003_Grass_0'].geometry}
        material={materials.PaletteMaterial003}
        position={[3.533, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes['���_Lens2_0'].geometry}
        material={materials['Lens.2']}
        position={[-13.439, 144.832, -25.759]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={4.043}
      />
      <mesh
        geometry={nodes['���������006_Display_0'].geometry}
        material={materials.Display}
        position={[2.604, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes['���������014_Flash_0'].geometry}
        material={materials.Flash}
        position={[-21.691, 144.834, -41.848]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={41.455}
      />
    </group>
  );
}

useGLTF.preload('/phone-transformed.glb');

export default Phone;
