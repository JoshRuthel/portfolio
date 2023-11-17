import Navbar from '../Navbar/Navbar';
import './Landing.css';
import React, { Suspense } from 'react';
import {
  OrbitControls,
  Environment,
  Sphere,
  MeshDistortMaterial,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '../canvas/CanvasLoader';

const Landing = (props) => {
  const isMobile = window.matchMedia('(max-width: 600px)').matches;

  const scrollToSection = (ref, position) => {
    if (isMobile) {
      setTimeout(() => {
        if (ref.current.dataset.key === 'work') {
          ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else
          ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 200);
    } else {
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={isMobile ? 'section_mobile_landing' : 'section'}>
      <div className="section_container">
        {!isMobile && <Navbar />}
        <div className="section_container_right">
          <div>
            <div className="land_heading">
              <h1 className="land_hello">Hi, I'm</h1>
              <h1 className="land_name">Joshua Ruthel</h1>
              <h1 className="land_soft">Graduate Software Engineer</h1>
              <h1 className="land_soft2">
                Weclome to my portfolio, the 3D objects are interactive.
                <br></br>
                {!isMobile && 'Just keep scrolling to enjoy the experience.'}
                {isMobile && 'Enjoy the full experience on your desktop.'}
              </h1>
              <h1 className="land_soft3">
                Reach out for any web development assistance.
              </h1>
              <button
                className="button_purple_outline"
                onClick={() => scrollToSection(props.contactRef, 8940)}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        <div className="section_container_left">
          <div className="land_three">
            <Canvas
              camera={{ position: [10, 4, 10], fov: 100 }}
              style={
                isMobile
                  ? { width: '200px', height: '200px' }
                  : { width: '600px', height: '600px' }
              }
            >
              <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} autoRotate />
                <Environment preset="sunset" />
                <Sphere args={[4.5, 100, 200]} scale={2}>
                  <MeshDistortMaterial
                    color="#BFAFF2"
                    attach="material"
                    distort={0.5}
                    speed={2}
                  />
                </Sphere>
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Landing;
