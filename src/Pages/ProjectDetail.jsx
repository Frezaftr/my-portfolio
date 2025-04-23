import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import './ProjectDetail.css';

const projectData = {
  "certification-system": {
    title: "Certification Non-Credit System",
    description: "System Analyst Intern - BINUS University | Functional Requirement Statement & Flow",
    tech: ["System Analysis", "FRS", "BPMN", "Documentation"],
    image: '/assets/DetailProject/CertificationFlow.png',
    link: "https://www.notion.so/Proyek-Certification-Non-Credit-Earning-System-0ed164b09cbd47638109eeab0167bc2a?pvs=4"
  },
  "portfolio": {
    title: "Web Developer Portfolio",
    description: "Built with React, Framer Motion, futuristic design & responsive layout.",
    tech: ["React", "Framer Motion", "Responsive", "Design"],
    image: "/assets/project-thumbs/portfolio-site.png",
    link: "https://yourportfolio.com"
  },
  "blockchain-scm": {
    title: "Supply Chain Blockchain Model",
    description: "Conceptual SCM system using blockchain for traceability and transparency.",
    tech: ["Blockchain", "Supply Chain", "SCM", "Conceptual Design"],
    image: "/assets/project-thumbs/blockchain-scm.png",
    link: "https://example.com/blockchain-scm"
  },
  "ecommerce-ui": {
    title: "E-commerce UI Design",
    description: "UI/UX Design for an e-commerce platform focusing on usability.",
    tech: ["UI/UX", "Figma", "Usability", "Design"],
    image: "/assets/project-thumbs/ecommerce-ui.png",
    link: "https://example.com/ecommerce-ui"
  },
  "Message-BlastMessage": {
    title: "Message & Blast Message",
    description: "Sistem untuk merancang penjadwalan akademik otomatis. Termasuk pembuatan FRS, DFD, dan koordinasi dengan stakeholder akademik.",
    tech: ["System Analysis", "FRS", "DFD", "Stakeholder Analysis"],
    image: "/assets/DetailProject/ChatFlow.png",
    link: "https://www.notion.so/Proyek-Message-Blast-Message-Feature-BINUS-Online-Learning-1ce1aa0c13888072bcead10ba0bc9d99?pvs=4"
  },
  "Tukang": {
    title: "UML Analysis Design 'Tukang'",
    description: "Sistem untuk merancang penjadwalan akademik otomatis. Termasuk pembuatan FRS, DFD, dan koordinasi dengan stakeholder akademik.",
    tech: ["System Analysis", "FRS", "DFD", "Stakeholder Analysis"],
    image: "/assets/DetailProject/TukangIsi.png",
    link: "https://www.notion.so/Proyek-Message-Blast-Message-Feature-BINUS-Online-Learning-1ce1aa0c13888072bcead10ba0bc9d99?pvs=4"
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
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
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  if (!project) {
    return (
      <div className="p-10 text-center text-red-500">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <Link to="/projects" className="text-blue-500 underline mt-4 block">← Back to List Project</Link>
      </div>
    );
  }

  return (
    <div ref={vantaRef} className="min-h-screen w-full overflow-auto relative">
      <div className="min-h-full px-6 py-16 text-white relative z-10">
        <motion.div
          className="max-w-3xl mx-auto bg-black/30 backdrop-blur-md p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link to="/projects" className="text-cyan-400 underline mb-6 block">← Back to List Project</Link>

          <h1 className="text-4xl font-bold mb-6 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">{project.title}</h1>

          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="mb-6 w-[350px] h-[350px] mx-auto rounded-lg shadow-md border border-cyan-500 object-cover"
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

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full transition-all duration-200"
            >
              See Detail Project
            </a>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
