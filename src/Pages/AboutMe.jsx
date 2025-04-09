import React, { useEffect } from 'react';
import AnimatedBackground from '../Components/AnimatedBackground';
import './AboutMe.css';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  useEffect(() => {
    const loadTheater = () => {
      const existingScript = document.querySelector('script[src*="theater.min.js"]');
      if (!window.theaterJS && !existingScript) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/theaterjs@2.1.0/dist/theater.min.js';
        script.async = true;
        script.onload = () => startTyping(window.theaterJS());
        document.body.appendChild(script);
      } else if (window.theaterJS) {
        startTyping(window.theaterJS());
      }
    };

    const startTyping = (theater) => {
      theater.addActor('name', { speed: 0.9, accuracy: 0.9 });

      const loop = () => {
        theater
          .addScene('name:Freza Fathur Nur Purnomo')
          .addScene(() => new Promise(resolve => setTimeout(resolve, 1500)))
          .addScene('name:', '')
          .addScene(() => new Promise(resolve => setTimeout(resolve, 1000)))
          .addScene(loop);
      };

      loop();
    };

    loadTheater();
  }, []);

  return (
    <div className="aboutme-wrapper" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* AnimatedBackground hanya di footer */}

      <div className="aboutme-content">
        <h1 id="name" className="name-highlight text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]"></h1>
        <h2 className="role-title">System Analyst | Web Developer | QA Engineer</h2>

        <p className="about-description">
          A passionate tech enthusiast with strong analytical and technical skills. I blend system analysis,
          development, and QA experience to deliver efficient, scalable, and innovative digital solutions.
        </p>
        <p className="about-description">
          With a solid foundation in Supply Chain Management and technology, I aim to bridge business needs with
          modern development approaches—always seeking impactful results through logic and creativity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20 pb-8 z-10 relative mt-12">
        <Link to="/experience" className="bg-[#1f2937] hover:bg-blue-600 text-white rounded-2xl shadow-lg p-8 transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold mb-2">Experience</h3>
          <p className="text-gray-300 text-base">
            Explore my roles and contributions in various projects and companies.
          </p>
        </Link>

        <Link to="/projects" className="bg-[#1f2937] hover:bg-blue-600 text-white rounded-2xl shadow-lg p-8 transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold mb-2">Project</h3>
          <p className="text-gray-300 text-base">
            Check out some of the works I've built and collaborated on.
          </p>
        </Link>

        <Link to="/skills" className="bg-[#1f2937] hover:bg-blue-600 text-white rounded-2xl shadow-lg p-8 transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold mb-2">Skills</h3>
          <p className="text-gray-300 text-base">
            See my skill set across system analysis, programming, and QA engineering.
          </p>
        </Link>
      </div>

      <footer className="relative mt-16 mb-8" style={{ height: "200px", overflow: "hidden" }}>
        {/* Bungkus AnimatedBackground agar punya tinggi */}
        <div className="absolute inset-0">
          <AnimatedBackground />
        </div>

        {/* Konten sosial media */}
        <div className="relative z-10 flex justify-center gap-6 text-blue text-2xl h-full items-center">
          <a href="https://github.com/FrezaFtr" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github hover:text-blue-500 transition" />
          </a>
          <a href="https://linkedin.com/in/FrezaFtr" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin hover:text-blue-400 transition" />
          </a>
          <a href="https://instagram.com/FrezaFtr" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram hover:text-pink-400 transition" />
          </a>
        </div>
      </footer>

    </div>
  );
};

export default AboutMe;
