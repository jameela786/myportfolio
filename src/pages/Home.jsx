import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-container">
      <div className="left">

        <p className="intro-tag">Hi, I’m</p>

        <h1 className="name">Jameela Shaik</h1>

        <h2 className="highlight">
          I build modern, fast & user-friendly web applications.
        </h2>

        <p className="desc">
          Full-stack developer specializing in the MERN stack.  
          I focus on clean UI, strong architecture, performance,  
          and delivering real value through scalable applications.
        </p>

        <div className="cta-buttons">
          <a href="#contact" className="hire-btn">Hire Me</a>
          <a href="/jameela_resume.pdf" className="resume-btn" target="_blank" rel="noopener noreferrer">
          Resume</a>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/jameela-shaik-114917223/" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
          <a href="https://github.com/jameela786" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
          <a href="mailto:jameelashaik7799@gmail.com"><FiMail /></a>
        </div>

      </div>

      <div className="right">
        <div className="profile-img-box">
        
          <img src="/jameela_pic.jpeg" alt="Profile" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;
