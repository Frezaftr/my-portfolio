// src/Pages/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ExperienceCard from '../Components/ExperienceCard';
import AnimatedBackground from '../Components/AnimatedBackground';
import './Experience.css';

const experienceData = [
  {
    id: 1,
    title: 'System Analyst Intern',
    company: 'BINUS Online Learning',
    date: 'Sep 2023 - Feb 2024',
    skills: 'UML , BINUS ',
    responsibilities: [
      'Melakukan requirement gathering dan analisis kebutuhan sistem',
      'Menyusun dokumen BRD (Business Requirements Document)',
      'Membuat FRS (Functional Requirement Systems)',
      'Mendesain UI dan flowchart sistem menggunakan Visual Paradigm',
      'Melakukan query SQL untuk validasi struktur dan integritas database',
    ],
  },
  {
    id: 2,
    title: 'QA Engineer Intern',
    company: 'RiddleStory',
    date: 'Mei 2023 - Jul 2023',
    responsibilities: [
      'Responsible for maintaining system quality on the RiddleStory website by identifying and preventing bugs, errors, and system failures through a thorough testing process. ',
      'Develop and manage automation testing using Playwright and JavaScript to ensure consistency and stability of website features. ',
      'Work closely with developers to maintain the quality of product releases',
      'Using Git and Github in version management and code colllaboration in automated devleopmeny and testing'
    ],
  },
  {
    id: 3,
    title: 'Web Developer Intern',
    company: 'SIS Project, Binus University',
    date: 'Feb 2023 - Jul 2023',
    responsibilities: [
      'Playes an active role in the devlopment of the SIS Project Website,a web platform used to promoted the company"s IT-based services and portofolio',
      'Carry out system requirements analysis through communication with stakeholders to ensure features and interfaces are in line with business objectives',
      'Developed Frontend displays using HTML,CSS,and JavaScript, and integrated the backend with PHP and mySQL for dynamic data management ',
    ],
  },
  {
    id: 4,
    title: 'Laboratory Assistant',
    company: 'Binus University',
    date: 'Jan 2022 – Present',
    responsibilities: [
      'Responsible for the teaching and assessment process of more than 900+ students for 5 semesters in various practicum courses in the Department of Information Systems. ',
      'Developed laboratory teaching materials and Course Outlines for several courses such as Applied ERP, Database, mobile application development, Information System Project, and others.',
      'Provide guidance and assistance in the practical use of SAP S/4HANA software in Applied ERP courses, both technically and conceptually. ',
    ],
  },
  {
    id: 5,
    title: 'Scholarship Student Mentor',
    company: 'Binus University',
    date: 'Mar 2022 – Feb 2023',
    responsibilities: [
      'Provided intensive academic guidance to students in Java Programming, Database, and Information System Project courses. ',
      'Helps students understand the basic and advanced concepts of Java programming, including OOP (ObjectOriented Programming), exception handling, and data structures. ',
      'Successfully improved student understanding significantly, as evidenced by the absence of course repetition in the mentees during the contract period. ',
    ],
  },
];

const Experience = () => {
  const navigate = useNavigate();

  return (
    <div className="experience-wrapper relative min-h-screen">
      <AnimatedBackground />
      <motion.div
        className="experience-page z-10 relative px-6 md:px-20 py-16 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <button
          className="back-button mb-6 text-blue-400 hover:text-white transition duration-300"
          onClick={() => navigate('/')}
        >
          ← Back to About Me
        </button>

        <h2 className="text-4xl font-bold mb-10 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] text-center w-full">Experience</h2>

        <div className="experience-grid grid gap-8 md:grid-cols-2">
          {experienceData.map((exp) => (
            <ExperienceCard key={exp.id} data={exp} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
