import React from "react";
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      
      <h2 className="section-title">Get In Touch</h2>

      <p className="contact-desc">
        Whether you have a question, want to discuss an opportunity, or just want to say hello— 
        feel free to reach out. I'm always open to connecting!
      </p>

      <div className="contact-info">
      <div className="info-card">
          <FiLinkedin className="icon" />
          <h4>LinkedIn</h4>
          <a href="https://www.linkedin.com/in/jameela-shaik-114917223/" target="_blank" rel="noopener noreferrer">linkedin.com/in/Jameela</a>
        </div>

        {/* <div className="info-card">
          <FiMail className="icon" />
          <h4>Email</h4>
          <p>jameelashaik7799@gmail.com</p>
        </div> */}


        <div className="info-card">
          <FiMapPin className="icon" />
          <h4>Location</h4>
          <p>Hyderabad, India</p>
        </div>

        <div className="info-card">
          <FiGithub className="icon" />
          <h4>GitHub</h4>
          <a href="https://github.com/jameela786" target="_blank" rel="noopener noreferrer">github.com/jameela</a>
        </div>



      </div>

      {/* CONTACT FORM */}
      {/* <form className="contact-form">
        <div className="form-group">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea rows="4" placeholder="Write your message"></textarea>
        </div>

        <button type="submit" className="contact-btn">Send Message</button>
      </form> */}

    </section>
  );
};

export default Contact;
