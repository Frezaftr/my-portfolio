// src/pages/ProjectDetail.jsx
import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import './ProjectDetail.css';
import { image } from 'framer-motion/client';

const projectData = {
  "certification-system": {
    title: "Certification Non-Credit System",
    description: "System Analyst Intern - BINUS University | Functional Requirement Statement & Flow",
    tech: ["System Analysis", "FRS", "BPMN", "Documentation"],
    image: '/assets/certification-system.png'
  },
  "portfolio": {
    title: "Web Developer Portfolio",
    description: "Built with React, Framer Motion, futuristic design & responsive layout.",
    tech: ["React", "Framer Motion", "Responsive", "Design"],
    image: "/assets/project-thumbs/portfolio-site.png"
  },
  "blockchain-scm": {
    title: "Supply Chain Blockchain Model",
    description: "Conceptual SCM system using blockchain for traceability and transparency.",
    tech: ["Blockchain", "Supply Chain", "SCM", "Conceptual Design"],
    image: "/assets/project-thumbs/blockchain-scm.png"
  },
  "ecommerce-ui": {
    title: "E-commerce UI Design",
    description: "UI/UX Design for an e-commerce platform focusing on usability.",
    tech: ["UI/UX", "Figma", "Usability", "Design"],
    image: "/assets/project-thumbs/ecommerce-ui.png"
  },
  "academic-scheduling": {
  title: "Academic Scheduling System",
  description: "Sistem untuk merancang penjadwalan akademik otomatis. Termasuk pembuatan FRS, DFD, dan koordinasi dengan stakeholder akademik.",
  tech: ["System Analysis", "FRS", "DFD", "Stakeholder Analysis"],
  image: "/assets/project-thumbs/Academic Scheduling System.png"
},

};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x00fff7,
        backgroundColor: 0x0b0c1c,
        points: 10.0,
        maxDistance: 20.0,
        spacing: 18.0,
      });
    }
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  if (!project) {
    return (
      <div className="p-10 text-center text-red-500">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <Link to="/projects" className="text-blue-500 underline mt-4 block">← Back to List Project</Link>
      </div>
    );
  }

  return (
    <div ref={vantaRef} className="min-h-screen px-6 py-16 text-white relative z-10">
      <motion.div
        className="max-w-3xl mx-auto bg-black/60 p-8 rounded-xl shadow-lg backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Link to="/projects" className="text-cyan-400 underline mb-6 block">← Back to List Project</Link>

        <h1 className="text-4xl font-bold mb-6 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">{project.title}</h1>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="mb-6 w-full rounded-lg shadow-md border border-cyan-500"
          />
        )}

        <p className="text-lg mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech, index) => (
            <span key={index} className="bg-cyan-200 text-cyan-900 px-4 py-1 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;