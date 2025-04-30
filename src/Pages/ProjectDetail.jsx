import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectDetail.css';

const primaryColor = '#00f0ff'; // warna aksen utama dari your website

const projectData = {
  "certification-system": {
    title: "Certification Non-Credit System",
    description: "System Analyst Intern - BINUS University | Functional Requirement Statement & Flow",
    tech: ["System Analysis", "FRS", "BPMN", "Documentation"],
    images: [
      { src: '/assets/DetailProject/CertificationFlow.png', caption: 'Alur BPMN Certification System' },
      { src: '/assets/DetailProject/FRSPage.png', caption: 'Dokumen FRS Halaman Utama' },
      { src: '/assets/DetailProject/BPMNChart.png', caption: 'Diagram BPMN Lengkap' }
    ],
    link: "https://www.notion.so/Proyek-Certification-Non-Credit-Earning-System-0ed164b09cbd47638109eeab0167bc2a?pvs=4"
  },
  "portfolio": {
    title: "Web Developer Portfolio",
    description: "Built with React, Framer Motion, futuristic design & responsive layout.",
    tech: ["React", "Framer Motion", "Responsive", "Design"],
    images: [
      { src: "/assets/project-thumbs/portfolio-site.png", caption: "Portfolio Website UI" }
    ],
    link: "https://yourportfolio.com"
  },
  "blockchain-scm": {
    title: "Supply Chain Blockchain Model",
    description: "Conceptual SCM system using blockchain for traceability and transparency.",
    tech: ["Blockchain", "Supply Chain", "SCM", "Conceptual Design"],
    images: [
      { src: "/assets/project-thumbs/blockchain-scm.png", caption: "SCM Blockchain UI Mockup" }
    ],
    link: "https://example.com/blockchain-scm"
  },
  "ecommerce-ui": {
    title: "E-commerce UI Design",
    description: "UI/UX Design for an e-commerce platform focusing on usability.",
    tech: ["UI/UX", "Figma", "Usability", "Design"],
    images: [
      { src: "/assets/project-thumbs/ecommerce-ui.png", caption: "E-commerce Figma Design" }
    ],
    link: "https://example.com/ecommerce-ui"
  },
  "Message-BlastMessage": {
    title: "Message & Blast Message",
    description: "Sistem untuk merancang penjadwalan akademik otomatis. Termasuk pembuatan FRS, DFD, dan koordinasi dengan stakeholder akademik.",
    tech: ["System Analysis", "FRS", "DFD", "Stakeholder Analysis"],
    images: [
      { src: "/assets/DetailProject/ChatFlow.png", caption: "Alur Chat Otomatis Mahasiswa" },
      { src: "/assets/DetailProject/MessageFRS.png", caption: "Tampilan FRS Message System" }
    ],
    link: "https://www.notion.so/Proyek-Message-Blast-Message-Feature-BINUS-Online-Learning-1ce1aa0c13888072bcead10ba0bc9d99?pvs=4"
  },
  "Tukang": {
    title: "UML Analysis Design 'Tukang'",
    description: "Perancangan UML untuk aplikasi pencarian tukang dengan sistem rating dan pemesanan.",
    tech: ["System Analysis", "UML", "DFD", "Stakeholder Analysis"],
    images: [
      { src: "/assets/DetailProject/TukangIsi.png", caption: "Halaman Use Case 'Tukang'" },
      { src: "/assets/DetailProject/TukangDFD.png", caption: "Diagram DFD Level 1" }
    ],
    link: "https://www.notion.so/Proyek-Tukang-Fitur-UML-Design-d2c56ec4c09c4a80b5d2c4a59dddc999?pvs=4"
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="p-10 text-center text-red-500">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <Link to="/projects" className="text-cyan-400 underline mt-4 block">← Back to List Project</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0c1c] text-white px-6 py-16">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Link
          to="/projects"
          className="text-sm font-medium mb-6 inline-block text-[#00f0ff] hover:underline"
        >
          ← Back to List Project
        </Link>

        <h1 className="text-4xl font-bold mb-4 text-white">{project.title}</h1>
        <p className="text-lg mb-8 text-gray-300">{project.description}</p>

        {project.images && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {project.images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col items-center"
              >
                <img
                  src={img.src}
                  alt={img.caption || `${project.title} ${idx + 1}`}
                  className="w-full max-h-[400px] object-contain rounded-md border border-[#00f0ff]/30 shadow"
                />
                {img.caption && (
                  <p className="text-sm text-gray-400 mt-2 italic text-center">{img.caption}</p>
                )}
              </motion.div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-3 mb-6">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-[#00f0ff]/10 text-[#00f0ff] px-4 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-[#00f0ff] hover:bg-cyan-400 text-black px-6 py-2 rounded-full transition-all duration-200"
          >
            See Detail Project
          </a>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
