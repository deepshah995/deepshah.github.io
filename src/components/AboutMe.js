import React from 'react';
import myPic from './assets/my-pic.jpg'; // Adjust the path as necessary
import './AboutMe.css'; // Import your CSS file

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-text">
        <h2>Hi There! 👋</h2>
        <p>
          Hi, I'm Deep Shah, a passionate software developer with a knack for turning ideas into reality. With a strong background in various programming languages and technologies, I thrive on solving complex problems and building efficient solutions.
        </p>
        <p>
          When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or enjoying a good book. I believe in continuous learning and always strive to enhance my skills.
        </p>
      </div>
      <div className="about-me-image">
        <img
          src={myPic}
          alt="Deep Shah"
          className="profile-image"
        />
      </div>
    </div>
  );
};

export default AboutMe;
