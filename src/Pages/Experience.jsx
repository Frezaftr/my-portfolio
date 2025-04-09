// src/Pages/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ExperienceCard from '../Components/ExperienceCard';
import AnimatedBackground from '../Components/AnimatedBackground';
import './Experience.css';

const experienceData = [
  {
    id: 1,
    title: 'System Analyst Intern',
    company: 'BINUS Online Learning',
    date: 'Sep 2023 - Feb 2024',
    responsibilities: [
      'Melakukan requirement gathering dan analisis kebutuhan sistem',
      'Menyusun dokumen BRD (Business Requirements Document)',
      'Membuat FSD (Functional Specification Document)',
      'Mendesain UI dan flowchart sistem menggunakan Visual Paradigm',
      'Melakukan query SQL untuk validasi struktur dan integritas database',
    ],
  },
  {
    id: 2,
    title: 'QA Engineer Intern',
    company: 'RiddleStory',
    date: 'Mei 2023 - Jul 2023',
    responsibilities: [
      'Menulis dan menjalankan skrip testing otomatis menggunakan Playwright & JavaScript',
      'Melakukan regresi dan uji fungsional sistem',
      'Bekerja sama dengan developer untuk menjaga kualitas rilis produk',
    ],
  },
  {
    id: 3,
    title: 'Web Developer Intern',
    company: 'SIS Project, Binus University',
    date: 'Feb 2023 - Jul 2023',
    responsibilities: [
      'Membangun aplikasi web menggunakan HTML, CSS, JavaScript, PHP & MySQL',
      'Membuat dokumentasi teknis dan user manual sistem',
      'Melakukan pengujian fungsionalitas dan perbaikan bug',
    ],
  },
  {
    id: 4,
    title: 'Laboratory Assistant',
    company: 'Binus University',
    date: 'Jan 2022 – Present',
    responsibilities: [
      'Mengajar lebih dari 900 mahasiswa di lab programming dan sistem informasi',
      'Menyusun materi praktikum, kuis, dan soal ujian',
      'Memberikan asistensi penggunaan SAP S/4HANA untuk kelas ERP',
    ],
  },
  {
    id: 5,
    title: 'Scholarship Student Mentor',
    company: 'Binus University',
    date: 'Mar 2022 – Feb 2023',
    responsibilities: [
      'Membimbing mahasiswa dalam pemahaman Java dan basis data',
      'Mengadakan sesi mentoring dan menyusun soal latihan',
      'Memberikan feedback terhadap hasil tugas dan latihan mahasiswa',
    ],
  },
];

const Experience = () => {
  const navigate = useNavigate();

  return (
    <div className="experience-wrapper relative min-h-screen">
      <AnimatedBackground />
      <motion.div
        className="experience-page z-10 relative px-6 md:px-20 py-16 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <button
          className="back-button mb-6 text-blue-400 hover:text-white transition duration-300"
          onClick={() => navigate('/')}
        >
          ← Back to About Me
        </button>

        <h2 className="text-4xl font-bold mb-10 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] text-center w-full">Experience</h2>

        <div className="experience-grid grid gap-8 md:grid-cols-2">
          {experienceData.map((exp) => (
            <ExperienceCard key={exp.id} data={exp} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
