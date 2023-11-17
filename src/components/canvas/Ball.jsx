import {
  OrbitControls,
  useGLTF,
  useTexture,
  Decal,
  Float,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Ball = (props) => {
  const { materials } = useGLTF('/ball-transformed.glb');
  const [decal] = useTexture([props.imageUrl]);

  return (
    <Float speed={1.75} rotationIntensity={0.5} floatIntensity={2}>
      <mesh material={materials.Root} position={[0, 0, 0]}>
        <icosahedronGeometry arg={[1, 1, 1]} />
        <meshStandardMaterial color="#707070" />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, isMobile }) => {
  return (
    <Canvas
      camera={{ fov: 25 }}
      style={
        isMobile
          ? { width: '50px', height: '50px' }
          : { width: '100px', height: '100px' }
      }
    >
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <Ball imageUrl={icon} />
    </Canvas>
  );
};

useGLTF.preload('/ball-transformed.glb');

export default BallCanvas;
