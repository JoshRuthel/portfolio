import { experience } from '../../constants/Export';
import './WorkMobile.css';
import { pin, date as dateIcon } from '../../assets/Assets';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';

const ExperienceCard = ({ title, img, location, date, description }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'rgb(77, 77, 77)',
        boxShadow: '0 0 8px 0 #BFAFF2',
      }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(77, 77, 77)' }}
      iconStyle={{ background: 'rgb(77, 77, 77)' }}
      icon={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <img src={img} alt="lol" width={20}></img>
        </div>
      }
    >
      <div className="work_timeline_card">
        <h className="work_card_title">{title}</h>
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
          <img src={dateIcon} alt="date" width={20}></img>
          <p className="work_card_date">{date}</p>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

const WorkMobile = () => {
  return (
    <div className="workmobile_section_container">
      <motion.div className="work_headings">
        <h1 className="app_heading_secondary">What I've done</h1>
        <h1 className="app_heading_primary">Experience</h1>
        <h1 className="app_heading_description">
          Just a brief timeline of my work experience in the professional field,
          highlighting some of the projects, technologies and types of work I
          have been involved with.
        </h1>
      </motion.div>
      <div className="work_timeline">
        <VerticalTimeline lineColor="rgb(190, 190, 190)" animate={true}>
          {experience.map((exp, index) => {
            return (
              <ExperienceCard
                title={exp.title}
                img={exp.img}
                location={exp.location}
                date={exp.date}
                description={exp.description}
              />
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkMobile;
