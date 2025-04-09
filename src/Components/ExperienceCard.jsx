import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ data }) => {
  return (
    <div className="experience-card">
      <span className="light-sweep" />
      <h3 className="experience-role">{data.title}</h3>
      <p className="experience-company">{data.company}</p>
      <p className="experience-date">{data.date}</p>
      {data.responsibilities && Array.isArray(data.responsibilities) && (
        <ul className="experience-list">
          {data.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExperienceCard;
