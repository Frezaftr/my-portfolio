// src/Components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05, boxShadow: '0 0 20px #00f6ff' }}
      onClick={() => navigate(project.link)}
    >
      <img src={project.image} alt={project.title} />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
