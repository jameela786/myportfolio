import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-container">

      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">

        {/* PROJECT – JOBBY APP */}
        <div className="project-card">
          <h3>Jobby App</h3>
          <p>
            A job search web application where users can browse job listings,
            filter by employment type & salary range, and view detailed job descriptions.
            Includes secure login using JWT authentication.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>REST API</span>
            <span>JWT</span>
            <span>CSS</span>
          </div>

          <div className="project-links">
            <a href="https://jameelajobby.ccbp.tech/login" target="_blank" rel="noopener noreferrer"><FiExternalLink /> Live Demo</a>
            <a href="https://github.com/jameela786/Jobby-App" target="_blank" rel="noopener noreferrer"><FiGithub /> GitHub</a>
          </div>
        </div>

        {/* PROJECT – NXT WATCH */}
        <div className="project-card">
          <h3>NxtWatch</h3>
          <p>
            A YouTube-like video streaming platform with search, categories,
            dark/light theme, login authentication, and protected routes.
            Built using React, Cookies, and REST APIs.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>React Router</span>
            <span>JS-Cookie</span>
            <span>REST API</span>
            <span>Theme Toggle</span>
          </div>

          <div className="project-links">
            <a href="https://jameelanxtwatch.ccbp.tech/login" target="_blank" rel="noopener noreferrer"><FiExternalLink /> Live Demo</a>
            <a href="https://github.com/jameela786/NXT-Watch" target="_blank" rel="noopener noreferrer"><FiGithub /> GitHub</a>
          </div>
        </div>

        {/* PROJECT – MERN TASK MANAGER */}
        <div className="project-card">
  <h3>HRMS Employee Management System</h3>
  <p>
    A comprehensive HRMS web application to manage employees with features like 
    advanced search, filtering, sorting, pagination, and team assignment using dynamic modals. 
    Includes secure cookie-based authentication, clean UI, and reusable component architecture.
  </p>

  <div className="tech-stack">
    <span>React</span>
    <span>REST API</span>
    <span>JS-Cookie</span>
    <span>CSS</span>
  </div>

  <div className="project-links">
    <a href="https://hrms-js-project.vercel.app/" target="_blank" rel="noopener noreferrer"><FiExternalLink /> Live Demo</a>
    <a href="https://github.com/jameela786/HRMS-JSProject" target="_blank" rel="noopener noreferrer"><FiGithub /> GitHub</a>
  </div>
</div>


        <div className="project-card">
          <h3>MERN Task Manager</h3>
          <p>
            A full-stack task management application with CRUD operations,
            JWT authentication, protected APIs, and user-based task storage.
            Clean UI and fully responsive design.
          </p>

          <div className="tech-stack">
            <span>MongoDB</span>
            <span>Express</span>
            <span>React</span>
            <span>Node.js</span>
            <span>JWT Auth</span>
          </div>

          <div className="project-links">
            <a href="https://mern-task-manager-kappa.vercel.app/login" target="_blank" rel="noopener noreferrer"><FiExternalLink /> Live Demo</a>
            <a href="https://github.com/jameela786/Mern-Task-Manager" target="_blank" rel="noopener noreferrer"><FiGithub /> GitHub</a>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Projects;
