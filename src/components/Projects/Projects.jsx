import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import './Projects.css';
import { github } from '../../assets/Assets';
import { projects } from '../../constants/Export';
import Plx from 'react-plx';
import { parallaxProjectHeading, parallaxProjectCard } from '../Parallax';

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  code_link,
  isShort,
}) => {
  return (
    <motion.div>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="proj_card">
        <div className="proj_card_inner">
          <img
            src={image}
            alt={name}
            width={'100%'}
            height={isShort ? '100' : '150px'}
            style={{ borderRadius: '2rem 2rem 0 0' }}
          ></img>
          <div className="proj_title">
            <h3>{name}</h3>
            <div>
              <a href={code_link} target="_blank" rel="noopener noreferrer">
                <img
                  src={github}
                  alt="github"
                  width={20}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '15rem',
                    padding: '1px',
                    cursor: 'pointer',
                  }}
                ></img>
              </a>
            </div>
          </div>
          <div className="proj_description">
            <p>{description}</p>
          </div>
          <div className="proj_tags">
            {tags.map((tag) => (
              <p key={tag.name} style={{ color: `${tag.color}` }}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  const isMobile = window.matchMedia('(max-width: 600px)').matches;
  const isShort = window.matchMedia('(max-height: 770px)').matches;
  return (
    <>
      <div className={isMobile ? 'section_mobile' : 'section'}>
        <div className="proj_section_container">
          <Plx parallaxData={parallaxProjectHeading}>
            {isMobile ? (
              <motion.div
                className="proj_container_head"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 3 }}
              >
                <div className="proj_headings">
                  <h1 className="app_heading_secondary">My Work</h1>
                  <h1 className="app_heading_primary">Projects</h1>
                  <p className="app_heading_description">
                    A brief overview of some of the different projects I have
                    completed over the years. I have experimented with a bunch
                    of different languages and technologies, these are some of
                    my creations.
                  </p>
                </div>
              </motion.div>
            ) : (
              <div className="proj_container_head">
                <div className="proj_headings">
                  <h1 className="app_heading_secondary">My Work</h1>
                  <h1 className="app_heading_primary">Projects</h1>
                  <p className="app_heading_description">
                    A brief overview of some of the different projects I have
                    completed over the years. I have experimented with a bunch
                    of different languages and technologies, these are some of
                    my creations.
                  </p>
                </div>
              </div>
            )}
          </Plx>
          {isMobile ? (
            <motion.div
              className="proj_container"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
            >
              {projects.map((proj, index) => (
                <Plx parallaxData={parallaxProjectCard(index)}>
                  <ProjectCard
                    index={index}
                    name={proj.name}
                    description={proj.description}
                    tags={proj.tags}
                    image={proj.image}
                    code_link={proj.code_link}
                    isShort={isShort}
                  />
                </Plx>
              ))}
              {isMobile && (
                <div className="proj_placeholder">
                  <br></br>
                  <h1>? ?....</h1>
                </div>
              )}
            </motion.div>
          ) : (
            <div className="proj_container">
              {projects.map((proj, index) => (
                <Plx parallaxData={parallaxProjectCard(index)}>
                  <ProjectCard
                    index={index}
                    name={proj.name}
                    description={proj.description}
                    tags={proj.tags}
                    image={proj.image}
                    code_link={proj.code_link}
                  />
                </Plx>
              ))}
              {isMobile && (
                <div className="proj_placeholder">
                  <br></br>
                  <h1>? ?....</h1>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
