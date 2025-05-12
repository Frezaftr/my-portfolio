// src/Pages/Project.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../Components/ProjectCard';
import './Project.css';

const projects = [
  {
    id: 1,
    title: 'Fullstack E-Apotek',
    image: '/assets/Project/landingPageApotek.png',
    link: '/projects/Apotek',
    category: 'Web Development',
  },
  {
    id: 2,
    title: 'Certification Non-Credit System',
    image: '/assets/Project/certification-system.png',
    link: '/projects/certification-system',
    category: 'System Analyst',
  },
  {
    id: 3,
    title: 'Data Visualization Space Division',
    image: '/assets/Project/landing.png',
    link: '/projects/SpaceDivion',
    category: 'Data Analyst',
  },
  // {
  //   id: 4,
  //   title: 'E-commerce (Style)',
  //   image: '/assets/Project/Cover.png',
  //   link: '/projects/ecommerce-ui',
  //   category: 'UI/UX',
  // },
  {
    id: 5,
    title: 'Message & Blast Message Systems',
    image: '/assets/Project/certification-system2.png',
    link: '/projects/Message-BlastMessage',
    category: 'System Analyst',
  },
  {
    id: 6,
    title: 'Fullstack SIS Coin',
    image: '/assets/Project/SisCoinCover.png',
    link: '/projects/SisCoin',
    category: 'Web Development',
  },
  {
    id: 7,
    title: 'ETL Data Warehousing',
    image: '/assets/Project/coverdata.png',
    link: '/projects/ETLData',
    category: 'Data Analyst',
  },
  {
    id: 8,
    title: 'Binus Square',
    image: '/assets/Project/CaseUIUX.png',
    link: '/projects/BinusSquare',
    category: 'UI/UX',
  },
  {
    id: 9,
    title: 'UML Analysis Design "Tukang"',
    image: '/assets/Project/TukangCover.png',
    link: '/projects/Tukang',
    category: 'System Analyst',
  },
  {
    id: 10,
    title: 'Frontend Kapitech',
    image: '/assets/Project/kapitechLanding.png',
    link: '/projects/kapitech',
    category: 'Web Development',
  },
  {
    id: 11,
    title: 'Frontend BAKU',
    image: '/assets/Project/WebsiteBakuLanding.png',
    link: '/projects/Baku',
    category: 'Web Development',
  },
  {
    id: 12,
    title: 'DDL DML Project during college',
    image: '/assets/Project/CoverDatabase.png',
    link: '/projects/Furniture',
    category: 'Data Analyst',
  },
];

const Project = () => {
  const navigate = useNavigate();

  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {});

  return (
    <div className="bg-[#0b0c1c] min-h-screen w-full overflow-hidden">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <button
          className="mb-8 px-4 py-2 bg-[#1f2937] hover:bg-[#3fc3c9] rounded-lg text-white shadow-md hover:scale-105 transition-all"
          onClick={() => navigate('/')}
        >
          ← Back to About Me
        </button>

        <div className="">
          <h2 className="text-4xl font-bold mb-10 text-center text-[#00e1e7] drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]">
            My Projects
          </h2>

          {Object.keys(groupedProjects).map((category) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-[#00e1e7]">
                {category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {groupedProjects[category].map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
