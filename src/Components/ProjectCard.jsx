// src/Components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="project-card w-[320px] h-[370px] bg-[#1e293b] text-white rounded-2xl shadow-md cursor-pointer overflow-hidden flex flex-col transition-all duration-300"
      whileHover={{ scale: 1.05, boxShadow: '0 0 20px #00f6ff' }}
      onClick={() => navigate(project.link)}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-[200] h-[200px] object-cover"
      />
      <div className="flex flex-col flex-grow px-4 py-3 overflow-hidden">
        <h3 className="text-lg font-semibold mb-2 leading-snug line-clamp-2">
          {project.title}
        </h3>
        {/* <p className="text-sm text-gray-300 flex-grow overflow-hidden text-ellipsis line-clamp-3">
          {project.description}
        </p> */}
        <span className="mt-3 inline-block text-cyan-400 text-sm font-medium hover:underline">
          View Project →
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
