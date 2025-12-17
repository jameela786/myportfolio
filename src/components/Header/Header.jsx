import React from "react";
import { FiHome, FiUser, FiCode, FiMail, FiDownload } from "react-icons/fi";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Jameela Shaik</div>

      <nav className="nav">
        <a href="#home"><FiHome /> Home</a>
        <a href="#about"><FiUser /> About</a>
        <a href="#projects"><FiCode /> Projects</a>
        <a href="#contact"><FiMail /> Contact</a>
      </nav>

      {/* <a href="#home" className="resume-btn" target="_blank">
        <FiDownload size={16} /> Resume
      </a> */}
      <a href="/jameela_resume.pdf" className="resume-btn" download="jameela_resume.pdf">
      <FiDownload size={16} /> Resume
      </a>
    </header>
  );
};

export default Header;
