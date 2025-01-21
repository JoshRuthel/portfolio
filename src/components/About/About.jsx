import Robot from '../canvas/Robot';
import './About.css';
import { OrbitControls, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const about = {
  'Age :': 23,
  'Qualification :': 'Bsc Engineering (Information)',
  'Education :': 'University of Witwatersrand',
  'Interests :': 'Software Development, Aritifical Intelligence',
  'Outside of Tech :': 'Weightlifing, Sport, Animals',
};

const About = () => {
  const container = useRef(null);
  const isMobile = window.matchMedia('(max-width: 600px)').matches;

  return (
    <div className={isMobile ? 'section_mobile' : 'section'} ref={container}>
      <div className="about_section_container">
        <div className="about_section_left">
          <div className="about_robot">
            <Canvas
              camera={{ position: [10, 5, 10], fov: 85 }}
              style={
                isMobile
                  ? { width: '300px', height: '400px' }
                  : { width: '600px', height: '500px', paddingTop: 100 }
              }
            >
              <OrbitControls
                enableZoom={false}
                autoRotate
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
              <Environment preset="forest" />
              <Robot />
            </Canvas>
          </div>
        </div>
        <div className="about_section_right">
          {isMobile ? (
            <motion.div
              className="about_headings"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 3 }}
            >
              <h1 className="app_heading_primary">
                <h1 className="app_heading_secondary">An introduction</h1>
                About me.
              </h1>
              {Object.keys(about).map((key) => (
                <div className="about_item">
                  <h1 className="about_category">{key}</h1>
                  <h1 className="about_value">{about[key]}</h1>
                </div>
              ))}
            </motion.div>
          ) : (
            <div className="about_headings">
              <h1 className="app_heading_primary">
                <h1 className="app_heading_secondary">An introduction</h1>
                About me.
              </h1>
              {Object.keys(about).map((key) => (
                <div className="about_item">
                  <h1 className="about_category">{key}</h1>
                  <h1 className="about_value">{about[key]}</h1>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
