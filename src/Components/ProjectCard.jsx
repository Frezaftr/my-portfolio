import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(project.link)}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.3 }}
      className="relative group cursor-pointer rounded-xl overflow-hidden border border-[#2e374a] bg-[#0f172a] hover:border-cyan-400 transition-all duration-300"
    >
      <div className="relative w-full h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 mt-1">{project.category}</p>
        <span className="inline-block mt-3 text-sm font-medium text-cyan-400 group-hover:underline">
          View Project →
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
