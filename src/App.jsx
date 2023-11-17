import {
  Landing,
  About,
  Skills,
  Work,
  Navbar,
  Projects,
  WorkMobile,
  Contact,
} from './components';
import './App.css';
import { useState, useEffect, useRef } from 'react';
import Plx from 'react-plx';
import {
  parallaxDataAbout,
  parallaxDataLanding,
  parallaxDataSkills,
  parallaxDataProjects,
  parallaxDataWork,
  parallaxDataContact,
  parallaxDataNavbar,
} from './components/Parallax';

function App() {
  const [isBlur, setIsBlur] = useState(false);
  const isMobile = window.matchMedia('(max-width: 600px)').matches;
  const landRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log('Scroll Position:', scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      {isMobile ? (
        <div className="container">
          {isBlur && <div className="blur"></div>}
          <Navbar
            className="app_navbar"
            handleBlur={setIsBlur}
            landRef={landRef}
            aboutRef={aboutRef}
            skillsRef={skillsRef}
            projectRef={projectRef}
            workRef={workRef}
          />
          <div ref={landRef} key="land">
            <Landing contactRef={contactRef} />
          </div>
          <div ref={aboutRef} key="about">
            <About />
          </div>
          <div ref={skillsRef} key="skills">
            <Skills />
          </div>
          <div ref={projectRef} key="projects">
            <Projects />
          </div>
          <div ref={workRef} data-key="work" style={{ paddingTop: '0.5rem' }}>
            <WorkMobile />
          </div>
          <div ref={contactRef} key="contact">
            <Contact />
          </div>
        </div>
      ) : (
        <div className="container">
          <Plx
            parallaxData={parallaxDataNavbar}
            style={{ position: 'fixed', width: '100%', zIndex: 1000 }}
          >
            <Navbar />
          </Plx>
          <div className="parallax_container">
            <Plx parallaxData={parallaxDataLanding}>
              <Landing handleBlur={setIsBlur} />
            </Plx>
            <Plx parallaxData={parallaxDataAbout} className={'para_about'}>
              <About />
            </Plx>
            <Plx parallaxData={parallaxDataSkills} className="para_skills">
              <Skills />
            </Plx>
            <Plx parallaxData={parallaxDataProjects}>
              <Projects />
            </Plx>
            <Plx parallaxData={parallaxDataWork}>
              <Work />
            </Plx>
            <Plx parallaxData={parallaxDataContact}>
              <Contact />
            </Plx>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
