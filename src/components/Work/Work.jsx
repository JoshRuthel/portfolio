import Plx from 'react-plx';
import { experience } from '../../constants/Export';
import './Work.css';
import { date as dateIcon, pin } from '../../assets/Assets';
import { parallaxWorkCard } from '../Parallax';

const ExperienceCard = ({ title, img, location, date, description }) => {
  return (
    <div className="work_card">
      <div className="work_card_title">
        <h className="work_card_title">{title}</h>
        <img src={img} alt={title} width={40}></img>
      </div>
      <div className="work_card_location_container">
        <img src={pin} alt="pin"></img>
        <h1 className="work_card_location">{location}</h1>
      </div>
      <ul className="work_card_list">
        {description.map((des) => (
          <li className="work_card_description">{des}</li>
        ))}
      </ul>
      <div className="work_card_location_container">
        <img src={dateIcon} alt="date"></img>
        <p className="work_card_date">{date}</p>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div className="section">
      <div className="work_section_container">
        <div className="work_container_left">
          {experience.map((exp, index) => {
            return (
              <Plx
                parallaxData={parallaxWorkCard(
                  6350 + index * 400,
                  6350 + (index + 1) * 400,
                  index
                )}
              >
                <ExperienceCard
                  title={exp.title}
                  img={exp.img}
                  location={exp.location}
                  date={exp.date}
                  description={exp.description}
                />
              </Plx>
            );
          })}
        </div>
        <div className="work_container_right">
          <div className="work_headings">
            <h1 className="app_heading_secondary">What I've done</h1>
            <h1 className="app_heading_primary">Experience</h1>
            <h1 className="app_heading_description">
              Just a brief timeline of my work experience in the professional
              field, highlighting some of the projects, technologies and types
              of work I have been involved with.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
