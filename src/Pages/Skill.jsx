// src/Pages/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// import AnimatedBackground from '../Components/AnimatedBackground';
import './Skills.css';

const skillGroups = [
  {
    category: 'System Analysis',
    skills: [
      'System Analysis', 'UML Diagram',
      'SDLC', 'Agile Methodology',
      'Testing & QA', 'Blackbox Testing', 'Functional Testing'
    ],
  },
  {
    category: 'Web Development',
    skills: [
      'HTML', 'CSS', 'JavaScript', 'NextJS','ReactJS', 'Framer Motion',
      'NodeJS', 'ExpressJS', 'MongoDB', 'RESTful API','Tailwind',
      'Postman','Docker','Git','Github', 'Jira'
    ],
  },
  {
    category: 'Database & Backend',
    skills: ['MySQL', 'Microsft Sql Server', 'Oracle','MongoDB', 'RESTful API'],
  },
  {
    category: 'Data Analysis & Visualization',
    skills: [
      'Python','Sql', 'R (Basic)', 'Data Visualization',
      'Tableau', 'Microsoft Power BI', 'Microsoft Excel'
    ],
  },
  {
    category: 'UI/UX & Design',
    skills: ['Figma'],
  },
];

const Skills = () => {
  const navigate = useNavigate();

  return (
    <div className="skills-wrapper relative min-h-screen overflow-hidden">
      {/* <AnimatedBackground /> */}
      <motion.div
        className="experience-page z-10 relative container mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <button
          className="mb-8 px-4 py-2 bg-[#1f2937] hover:bg-[#3fc3c9] rounded-lg text-white shadow-md hover:scale-105 transition-all"
          onClick={() => navigate('/')}
        >
          ← Back to About Me
        </button>
        
        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8 min-h-screen flex flex-col pt-16">
          <h2 className="skills-title text-3xl sm:text-4xl font-bold text-white mb-10 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] text-center">
            My Skills
          </h2>

          <div className="skills-group-container grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {skillGroups.map((group, index) => (
              <motion.div
                key={index}
                className="skill-group-card bg-[#1f2937] rounded-2xl p-6 text-white shadow-lg hover:shadow-cyan-500/50 transition hover:scale-105"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="skill-group-title text-xl sm:text-2xl font-semibold mb-4">{group.category}</h3>
                <div className="skills-list flex flex-wrap gap-2">
                  {group.skills.map((skill, idx) => (
                    <span key={idx} className="skill-pill bg-cyan-800 px-3 py-1 rounded-full text-xs sm:text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
