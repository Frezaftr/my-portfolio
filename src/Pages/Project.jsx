// src/Pages/ProjectDetail.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom'; // Import useNavigate dan useParams
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
    title: 'Academic Scheduling System',
    description: 'System Analyst - Membuat FRS dan diagram alur sistem penjadwalan akademik.',
    image: '/assets/Project/certification-system2.png',
    link: '/projects/academic-scheduling',
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
];

const Project = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Grouping projects by category
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {});

  return (
    <motion.div
      className="project-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Tombol back yang ditempatkan di pojok kiri atas */}
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to About Me
      </button>

      <h2 className="project-title">My Projects</h2>

      {Object.keys(groupedProjects).map((category) => (
        <div key={category} className="project-category-section">
          <h3 className="project-category-title">{category}</h3>
          <div className="project-grid">
            {groupedProjects[category].map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Project;
