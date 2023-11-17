import './Contact.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Phone from '../canvas/Phone';
import { linkedin, whatsapp, github, insta } from '../../assets/Assets';

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [buttonCap, setButtonCap] = useState('Send');
  const isMobile = window.matchMedia('(max-width: 600px)').matches;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonCap('Sending...');

    const res = await emailjs
      .sendForm(
        'service_6qumwtb',
        'template_xdzozuw',
        ref.current,
        'PZpYBVMOs1bJQV9Rz'
      )
      .catch((e) => {
        setSuccess(false);
        setButtonCap('Send');
      });

    if (res) {
      setSuccess(true);
      setButtonCap('Send');
    }
  };
  return (
    <div className="cont_section">
      <div className="cont_container">
        <div className="cont_text_container">
          {' '}
          <div className="cont_heading">
            <h1 className="app_heading_secondary">Get in touch</h1>
            <h1 className="app_heading_primary">Contact Me.</h1>
            <h1 className="cont_heading_description">
              You've made it to the end, feel free to get in touch for any
              enquiries.
            </h1>
          </div>
          <div className="cont_form">
            <form
              className="cont_form_content"
              onSubmit={handleSubmit}
              ref={ref}
            >
              <input placeholder="Name" name="name"></input>
              <input placeholder="Email" name="email"></input>
              <textarea
                placeholder="Write your message"
                rows={10}
                name="message"
              ></textarea>
              <button type="submit">{buttonCap}</button>
              {success && (
                <p className="cont_message">
                  Your message was sent succesfully !
                </p>
              )}
            </form>
          </div>
        </div>
        {!isMobile && (
          <div className="cont_img">
            <Canvas
              camera={{ fov: 75, position: [500, 50, 100] }}
              style={
                isMobile
                  ? { width: '100px', height: '100px' }
                  : { width: '400px', height: '800px' }
              }
            >
              <OrbitControls
                enableZoom={false}
                autoRotate
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
              <Environment preset="city" />
              <Phone />
            </Canvas>
          </div>
        )}
      </div>
      <footer className="cont_foot">
        <hr className="cont_rule" />
        <div className="cont_foot_content">
          <p>&copy; 2023 Joshua Ruthel. All rights reserved.</p>
          <div className="cont_links">
            <a href="https://instagram.com/josh.ruthel?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr">
              <img src={insta} alt="insta" width={isMobile ? 20 : 30}></img>
            </a>
            <a href="https://github.com/JoshRuthel">
              <img src={github} alt="github" width={isMobile ? 20 : 30}></img>
            </a>
            <a href="https://www.linkedin.com/in/joshua-ruthel-48b731225/">
              <img
                src={linkedin}
                alt="linkedin"
                width={isMobile ? 20 : 30}
              ></img>
            </a>
            <a href="https://wa.me/0612468491">
              <img
                src={whatsapp}
                alt="whatsapp"
                width={isMobile ? 20 : 30}
              ></img>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
