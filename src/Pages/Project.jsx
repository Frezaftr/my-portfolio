// src/Pages/ProjectDetail.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '../Components/AnimatedBackground';
import ProjectCard from '../Components/ProjectCard';
import './Project.css';


const projects = [
  {
    id: 1,
    title: 'Certification Non-Credit System',
    description: 'System Analyst Intern - BINUS University | Functional Requirement Statement & Flow',
    image: '/assets/Project/certification-system.png',
    link: '/projects/certification-system',
    category: 'System Analyst',
  },
  {
    id: 2,
    title: 'Web Developer Portfolio',
    description: 'Built with React, Framer Motion, futuristic design & responsive layout.',
    image: '/assets/Project/web-dev.png',
    link: '/projects/portfolio',
    category: 'Web Development',
  },
  {
    id: 3,
    title: 'Supply Chain Blockchain Model',
    description: 'Conceptual SCM system using blockchain for traceability and transparency.',
    image: '/assets/project-thumbs/blockchain-scm.png',
    link: '/projects/blockchain-scm',
    category: 'Data Analyst',
  },
  {
    id: 4,
    title: 'E-commerce UI Design',
    description: 'UI/UX Design for an e-commerce platform focusing on usability.',
    image: '/assets/project-thumbs/ecommerce-ui.png',
    link: '/projects/ecommerce-ui',
    category: 'UI/UX',
  },
  {
    id: 5,
    title: 'Message & Blast Message Systems',
    description: 'System Analyst - Creating FRS Message & Blast Message',
    image: '/assets/Project/certification-system2.png',
    link: '/projects/Message-BlastMessage',
    category: 'System Analyst'
  },
  {
    id: 6,
    title: 'Web Developer Portfolio',
    description: 'Built with React, Framer Motion, futuristic design & responsive layout.',
    image: '/assets/Project/web-dev2.png',
    link: '/projects/portfolio',
    category: 'Web Development',
  },
  {
    id: 7,
    title: 'Supply Chain Blockchain Model',
    description: 'Conceptual SCM system using blockchain for traceability and transparency.',
    image: '/assets/project-thumbs/blockchain-scm.png',
    link: '/projects/blockchain-scm',
    category: 'Data Analyst',
  },
  {
    id: 8,
    title: 'E-commerce UI Design',
    description: 'UI/UX Design for an e-commerce platform focusing on usability.',
    image: '/assets/project-thumbs/ecommerce-ui.png',
    link: '/projects/ecommerce-ui',
    category: 'UI/UX',
  },
  {
    id: 9,
    title: 'UML Analysis Design "Tukang"',
    description: 'Analysis for Case Tukang Project',
    image: '/assets/Project/TukangCover.png',
    link: '/projects/Tukang',
    category: 'System Analyst',
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
    <div className="Project-wrapper relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <motion.div
        className="experience-page z-10 relative container mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <button
          className="back-button mb-8 px-4 py-2 bg-[#1f2937] hover:bg-blue-600 rounded-lg text-white shadow-lg hover:scale-105 transition-all"
          onClick={() => navigate('/')}
        >
          ← Back to About Me
        </button>

        <div className=""> {/* Added padding top to prevent overlap */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">
            My Projects
          </h2>

          {Object.keys(groupedProjects).map((category) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">
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
