import BallCanvas from '../canvas/Ball';
import { motion } from 'framer-motion';

const SkillRow = (props) => {
  return (
    <>
      {props.isMobile ? (
        <motion.div
          className="skill_row"
          initial={props.isMobile ? { x: 100 } : { x: 800 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2 }}
        >
          <div className="skill_category">
            <h2>{props.title}</h2>
          </div>
          <div className="skill_balls">
            {props.images.map((img) => (
              <BallCanvas icon={img} isMobile={props.isMobile} />
            ))}
          </div>
        </motion.div>
      ) : (
        <div className="skill_row">
          <div className="skill_category">
            <h2>{props.title}</h2>
          </div>
          <div className="skill_balls">
            {props.images.map((img) => (
              <BallCanvas icon={img} isMobile={props.isMobile} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SkillRow;
