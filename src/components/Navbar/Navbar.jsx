import './Navbar.css';
import { useSpring, animated } from 'react-spring';
import {
  jr,
  user,
  skills,
  projects,
  home,
  terminal as work,
  cv,
  menu,
} from '../../assets/Assets';
import { useState } from 'react';

const Navbar = (props) => {
  const [showDrop, setShowDrop] = useState(false);
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const fade = useSpring({
    transform: isMobile
      ? showDrop
        ? 'translateY(0%)'
        : 'translateY(-120%)'
      : 'translateY(0%)',
  });

  const handleClick = () => {
    props.handleBlur((prev) => !prev);
    setShowDrop((prev) => !prev);
  };

  const scrollToSection = (ref, position) => {
    if (isMobile) {
      props.handleBlur((prev) => !prev);
      if (ref.current.dataset.key === 'work') {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setShowDrop((prev) => !prev);
    } else {
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="nav_container">
      <div className="nav_contents">
        <div className="nav_directory">
          <div className="nav_logo">
            <img src={jr} width={40} alt="logo"></img>
          </div>
          <animated.div
            className={isMobile ? 'nav_list_mobile' : 'nav_list'}
            style={fade}
          >
            <ul>
              <li onClick={() => scrollToSection(props.landRef, 0)}>
                <img src={home} width={17} alt="home"></img>Welcome
              </li>
              <li onClick={() => scrollToSection(props.aboutRef, 900)}>
                <img src={user} width={17} alt="user"></img>About
              </li>
              <li onClick={() => scrollToSection(props.skillsRef, 2100)}>
                <img src={skills} width={17} alt="skills"></img>
                Skills
              </li>
              <li onClick={() => scrollToSection(props.projectRef, 5000)}>
                <img src={projects} width={15} alt="projects"></img>Projects
              </li>
              <li onClick={() => scrollToSection(props.workRef, 6300)}>
                <img src={work} width={18} alt="projects"></img>Work
              </li>
            </ul>
          </animated.div>
        </div>
        <div className="nav_contact">
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="button_purple"
          >
            Resume
          </a>
        </div>
        <div className="nav_burger">
          <img src={menu} alt="menu" width={35} onClick={handleClick}></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
