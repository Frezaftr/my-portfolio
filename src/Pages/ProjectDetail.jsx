import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectDetail.css';

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
  "kapitech": {
    title: "Website Frontend Kapitech",
    description: "Built with React, Framer Motion, futuristic design & responsive layout.",
    tech: ["React", "Framer Motion", "Responsive", "Design"],
    images: [
      { src: '/assets/Project/kapitechLanding.png', caption: 'Landing Page Website Kapitech' },
      { src: '/assets/DetailProject/kapitechClient.png', caption: 'Kapitech Client' },
    ],
    link: ""
  },
  "Baku": {
    title: "Website Frontend BAKU",
    description: "Built with TypeScript, Framer Motion, Simple design & responsive layout.",
    tech: ["TypeScript", "Framer Motion", "Responsive", "Design"],
    images: [
      { src: '/assets/Project/WebsiteBakuLanding.png', caption: 'Landing Page Website BAKU' },
      { src: '/assets/DetailProject/ProgramBaku.png', caption: 'BAKU program' },
    ],
    link: "https://websitebaku.vercel.app/"
  },
  "ETLData": {
    title: "Extract Transform Load Data",
    description: "perform extract transform data by modifying attributes and modifying data",
    tech: ["Data Analyst", "ETL", "cube", "Data Warehouse"],
    images: [
      { src: '/assets/DetailProject/customerdimension.png', caption: 'Customer Dimension' },
      { src: '/assets/DetailProject/customerdimensionflow.png', caption: 'Customer Dimension Flow Data Modification' },
      { src: '/assets/DetailProject/PotDimension.png', caption: 'Pot Dimension Flow Data Modification' },
      { src: '/assets/DetailProject/TimeDimension.png', caption: 'Time Dimension Query insert to olap' },
    ],
    link: "https://example.com/blockchain-scm"
  },
  "ecommerce-ui": {
    title: "E-commerce UI 'MyStyle' ",
    description: "UI/UX Design for an e-commerce platform focusing on usability.",
    tech: ["UI/UX", "Figma", "Usability", "Design"],
    images: [
      { src: '/assets/DetailProject/uiux.png', caption: 'Pages' },
    ],
    link: "https://www.figma.com/proto/6IpZIXBDB0hZF5vMt9ooJj/MyStyle?page-id=0%3A1&node-id=4-431&viewport=1495%2C999%2C0.58&t=qSjFlEq9mMUs2nTw-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4%3A428"
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
    description: "Sistem untuk merancang pemesanan tukang untuk melakukan jasa perbaikan.",
    tech: ["System Analysis", "Requirement", "Class Diagram", ],
    images: [
      { src: '/assets/DetailProject/Diagram1.png', caption: 'Class Diagram' },
      { src: '/assets/DetailProject/DIAGRAM2.png', caption: 'Use Case Diagram' },
    ],
    link: "https://www.notion.so/Proyek-Message-Blast-Message-Feature-BINUS-Online-Learning-1ce1aa0c13888072bcead10ba0bc9d99?pvs=4"
  },
  "Apotek": {
    title: "Fullstack E-Apotek",
    description: "Built using MERN Stack (MongoDB, Express, React, Node.js) with a modern and responsive design using Tailwind CSS.",
    tech: ["ReactJS", "Tailwind", "ExpressJS", "MongoDB"],
    images: [
      { src: '/assets/DetailProject/ProdukSebelumSigin.png', caption: 'Tampilan Halaman Produk Sebelum Signin' },
      { src: '/assets/DetailProject/setelahsignin.png', caption: 'setelah Signin dan data diverisikasi' },
      { src: '/assets/DetailProject/detailtransaksi.png', caption: 'Halaman History' },
      { src: '/assets/DetailProject/Admin.png', caption: 'Halaman Admin' }
    ],
    link: "https://github.com/Frezaftr/e-apotek"
  },
  "SpaceDivion": {
    title: "Data Visualization Space Division",
    description: "perform data visualization using Tableau and dashboard creation",
    tech: ["Data Analyst", "Data Visualization", "Tableau"],
    images: [
      { src: '/assets/DetailProject/RefrenceLine.png', caption: 'Using Refrence Line' },
      { src: '/assets/DetailProject/dashboard.png', caption: 'Creating Dashboard' },
    ],
    link: "https://example.com/blockchain-scm"
  },
  "BinusSquare": {
    title: "UI & UX Binus Square ",
    description: "UI/UX Design for an e-commerce platform focusing on usability.",
    tech: ["UI/UX", "Figma", "Usability", "Design"],
    images: [
      { src: '/assets/DetailProject/DesignThingking.png', caption: 'Design Thingking Binus Square' },
      { src: '/assets/DetailProject/ResearchResult.png', caption: 'Research' },
      { src: '/assets/DetailProject/scanUI.png', caption: 'Scan Here To See UI' },
    ],
    link: "https://drive.google.com/file/d/11dzePMp-JxeAAVYCZOsklDZwz9mTGbd4/view?usp=sharing"
  },
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
                  className="max-w-[400px] max-h-[400px] object-contain rounded-md border border-[#00f0ff]/30 shadow"
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
