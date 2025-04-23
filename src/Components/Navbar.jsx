import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  // { name: "About", path: "/" },
  // { name: "Experience", path: "/experience" },
  // { name: "Projects", path: "/projects" },
  // { name: "Skills", path: "/skills" },
];



export default function Navbar() {
  const location = useLocation();

  // Render navbar hanya jika path adalah "/"
  if (location.pathname !== "/") {
    return null;  // Tidak merender navbar jika bukan halaman About
  }

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80 }}
    >
      <div className="navbar-content">
        <h1 className="logo">Hi, Im Freza</h1>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? "active" : ""}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
         {/* ✅ Tambahkan Tombol Download CV */}
         <a
          href="/FrezaFathur.pdf"
          download
          className="download-cv-btn"
        >
          Download CV
        </a>
      </div>
    </motion.nav>
  );
}
