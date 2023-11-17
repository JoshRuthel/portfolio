import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  console.log(progress);
  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: '#bdbdbd',
          fontWeight: 300,
          marginTop: 40,
        }}
      >
        Model loading: {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
