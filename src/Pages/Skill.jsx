// src/Pages/Skills.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';
import './Skills.css';

const skillGroups = [
  {
    category: 'System Analysis',
    skills: [
      'System Analysis', 'Data Flow Diagram (DFD)', 'UML Diagram',
      'Functional Requirement Statement (FRS)', 'SDLC', 'Agile Methodology',
      'Testing & QA', 'Blackbox Testing', 'Functional Testing'
    ],
  },
  {
    category: 'Web Development',
    skills: [
      'HTML', 'CSS', 'JavaScript', 'ReactJS', 'Framer Motion',
      'NodeJS', 'ExpressJS', 'MongoDB', 'RESTful API',
      'Postman', 'Git', 'Jira'
    ],
  },
  {
    category: 'UI/UX & Design',
    skills: ['Figma'],
  },
  {
    category: 'Database & Backend',
    skills: ['MySQL', 'MongoDB', 'RESTful API'],
  },
  {
    category: 'Data Analysis & Visualization',
    skills: [
      'Python', 'R (Basic)', 'Data Visualization',
      'Tableau', 'Microsoft Power BI', 'Microsoft Excel (PivotTable, VLOOKUP)'
    ],
  },
  {
    category: 'Supply Chain & Concept',
    skills: ['Supply Chain Management', 'Blockchain (Conceptual)'],
  },
];

const Skills = () => {
  const navigate = useNavigate();
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = FOG({
      el: vantaRef.current,
      THREE: THREE,
      highlightColor: 0x00fff7,
      midtoneColor: 0x0a0a23,
      lowlightColor: 0x000000,
      baseColor: 0x050510,
      blurFactor: 0.6,
      speed: 1.2,
      zoom: 1.0,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <motion.div
      ref={vantaRef}
      className="skills-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to About Me
      </button>

      <h2 className="skills-title">My Skills</h2>

      <div className="skills-group-container">
        {skillGroups.map((group, index) => (
          <motion.div
            key={index}
            className="skill-group-card"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="skill-group-title">{group.category}</h3>
            <div className="skills-list">
              {group.skills.map((skill, idx) => (
                <div key={idx} className="skill-pill">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
