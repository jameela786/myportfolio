import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-container">
      
      <h2 className="section-title">About Me</h2>

      <div className="about-content">
        
        {/* LEFT — BIO */}
        <div className="about-text">
          <p>
            I’m <strong>Jameela Shaik</strong>, a dedicated and fast-learning 
            Full Stack Developer transitioning into tech after gaining valuable 
            experience at <strong>DXC Technology</strong>.
          </p>

          <p>
            I come from a non-developer background, but after discovering my 
            passion for building web apps, I began upskilling deeply in 
            <strong> JavaScript, React, Node.js, Express, and MongoDB</strong>. 
            I enjoy creating clean UI, smooth user experiences, and scalable apps.
          </p>

          <p>
            I had a career break during which I focused on personal growth and 
            strengthening my technical skills. Now I am actively building 
            real-world projects and preparing for opportunities in full-stack 
            development.
          </p>

          <div className="experience-box">
            <FiCheckCircle />
            <p>Previously worked at <strong>DXC Technology</strong> — strong exposure to corporate workflows & client environments.</p>
          </div>
        </div>

        {/* RIGHT — SKILLS */}
        <div className="skills-box">
          <h3>Skills</h3>
          <div className="skills-grid">
            <span>JavaScript (ES6+)</span>
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>REST APIs</span>
            <span>HTML & CSS</span>
            <span>Git & GitHub</span>
            <span>Problem Solving</span>
            <span>UI/UX Awareness</span>
          </div>
        </div>

      </div>

    </section>
  );
};

export default About;
