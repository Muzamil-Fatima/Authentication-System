import React from "react";
import "../styles/Instructor.css";

const Instructor = () => {
  return (
    <div className="instructor-page">
      <div className="instructor-card">
        <div className="instructor-image">
          <img src="" alt="Instructor" />
        </div>
        <div className="instructor-info">
          <h1>Muzamil Fatima</h1>
          <h4>Your Instructor</h4>
          <p>
            Hello! I'm Muzamil, a passionate MERN stack developer with a love
            for teaching and building scalable, robust applications. With years
            of experience in JavaScript, React, Node.js, Express, and MongoDB.
          </p>
          <div className="social-links">
            <a href="" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              Youtube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
