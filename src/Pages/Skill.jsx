// src/Pages/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '../Components/AnimatedBackground';
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

  return (
    <motion.div
      className="skills-page relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 min-h-screen">
        <button
          className="back-button mb-8"
          onClick={() => navigate('/')}
        >
          ← Back to About Me
        </button>

        <h2 className="skills-title text-4xl font-bold text-white mb-10 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] text-center">
          My Skills
        </h2>

        <div className="skills-group-container grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              className="skill-group-card bg-[#1f2937] rounded-2xl p-6 text-white shadow-lg hover:shadow-cyan-500/50 transition hover:scale-105"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="skill-group-title text-2xl font-semibold mb-4">{group.category}</h3>
              <div className="skills-list flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <span key={idx} className="skill-pill bg-cyan-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
