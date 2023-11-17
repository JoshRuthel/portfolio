import SkillRow from './SkillRow';
import './Skills.css';
import { motion } from 'framer-motion';
import {
  react,
  TS,
  redux,
  css,
  node,
  express,
  python,
  cpp,
  git,
  rest,
  figma,
  pg,
} from '../../assets/Assets';

const Skills = () => {
  const isMobile = window.matchMedia('(max-width: 600px)').matches;
  return (
    <div className={isMobile ? 'section_mobile' : 'section'}>
      <div className="section_container">
        <div className="section_container_left">
          <motion.div
            className="skills_heading"
            initial={{ y: 400 }}
            whileInView={{ y: 0 }}
            transition={{ duration: isMobile ? 0.5 : 2 }}
          >
            <div className="skills_head">
              <h1 className="app_heading_primary">
                <div className="app_heading_secondary">My technical tools</div>
                Skills.
              </h1>
              <h1 className="app_heading_description">
                Apps are like onions, they have layers. I have experience with a
                variety of different languages, frameworks and toolsets, these
                are just a few.
              </h1>
            </div>
          </motion.div>
        </div>
        <div className="section_container_right">
          <div className="ball_container">
            <div className="skills_container">
              <SkillRow
                title={'Frontend'}
                images={[react, TS, redux, css]}
                isMobile={isMobile}
              />
              <SkillRow
                title={'Backend'}
                images={[node, express, python, cpp]}
                isMobile={isMobile}
              />
              <SkillRow
                title={'DB / Tools'}
                images={[git, figma, rest, pg]}
                isMobile={isMobile}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
