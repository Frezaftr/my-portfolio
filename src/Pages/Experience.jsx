// src/Pages/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ExperienceCard from '../Components/ExperienceCard';
// import AnimatedBackground from '../Components/AnimatedBackground';
import './Experience.css';

const experienceData = [
  {
    id: 1,
    title: 'System Analyst Intern',
    company: 'BINUS Online Learning',
    date: 'Sep 2023 - Feb 2024',
    skills: 'UML , BINUS ',
    responsibilities: [
    'Conducting requirement gathering and system requirement analysis',
    'Compiling BRD (Business Requirements Document) documents',
    'Creating FRS (Functional Requirements System)',
    'Designing UI and system flowchart using Visual Paradigm',
    'Conducting SQL queries to validate database structure and integrity',
    ],
  },
  {
    id: 2,
    title: 'QA Engineer Intern',
    company: 'RiddleStory',
    date: 'Mei 2023 - Jul 2023',
    responsibilities: [
      'Responsible for maintaining system quality on the RiddleStory website by identifying and preventing bugs, errors, and system failures through a thorough testing process.',
      'Develop and manage automation testing using Playwright and JavaScript to ensure consistency and stability of website features.',
      'Work closely with developers to maintain the quality of product releases',
      'Using Git and Github in version management and code collaboration in automated development and testing'
    ],
  },
  {
    id: 3,
    title: 'Web Developer Intern',
    company: 'SIS Project, Binus University',
    date: 'Feb 2023 - Jul 2023',
    responsibilities: [
      'Played an active role in the development of the SIS Project Website, a web platform used to promote the company\'s IT-based services and portfolio',
      'Carried out system requirements analysis through communication with stakeholders to ensure features and interfaces are in line with business objectives',
      'Developed Frontend displays using HTML, CSS, and JavaScript, and integrated the backend with PHP and MySQL for dynamic data management',
    ],
  },
  {
    id: 4,
    title: 'Laboratory Assistant',
    company: 'Binus University',
    date: 'Jan 2022 – Present',
    responsibilities: [
      'Responsible for the teaching and assessment process of more than 900+ students for 5 semesters in various practicum courses in the Department of Information Systems.',
      'Developed laboratory teaching materials and Course Outlines for several courses such as Applied ERP, Database, mobile application development, Information System Project, and others.',
      'Provide guidance and assistance in the practical use of SAP S/4HANA software in Applied ERP courses, both technically and conceptually.',
    ],
  },
  {
    id: 5,
    title: 'Scholarship Student Mentor',
    company: 'Binus University',
    date: 'Mar 2022 – Feb 2023',
    responsibilities: [
      'Provided intensive academic guidance to students in Java Programming, Database, and Information System Project courses.',
      'Helped students understand the basic and advanced concepts of Java programming, including OOP (Object-Oriented Programming), exception handling, and data structures.',
      'Successfully improved student understanding significantly, as evidenced by the absence of course repetition in the mentees during the contract period.',
    ],
  },
];

const Experience = () => {
  const navigate = useNavigate();

  return (
    <div className="experience-wrapper relative min-h-screen overflow-hidden">
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

        <h2 className="text-3xl sm:text-4xl font-bold mb-10 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] text-center">
          Experience
        </h2>

        <div className="experience-grid px-4 md:px-8 w-full overflow-x-auto md:overflow-visible">
          <div className="flex md:grid md:grid-cols-2 gap-6 min-w-[100%] md:min-w-0">
            {experienceData.map((exp) => (
              <div className="flex-shrink-0 w-[90%] md:w-auto">
                <ExperienceCard key={exp.id} data={exp} />
              </div>
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default Experience;
