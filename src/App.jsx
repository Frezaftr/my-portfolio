import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import AboutMe from "./Pages/AboutMe";
// import DetailProject from "./Pages/ProjectDetail";
import Experience from "./Pages/Experience";
import Project from "./Pages/Project";
import Skill from "./Pages/Skill";
import ProjectDetail from './Pages/ProjectDetail'; // Halaman detail proyek

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} /> 
          <Route path="/skills" element={<Skill />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
