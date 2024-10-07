import React from 'react';
import './Header.css'; // Make sure to create a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Deep Shah</h1>
        <p>🌐 Software Developer | Tech Enthusiast</p>
      </div>
      <nav className="nav">
        <ul>
          {/* <li><a href="#aboutme">AboutMe</a></li> */}
          <li><a href="#break-into-tech" class="highlight">Break into Tech!</a></li>
          <li><a href="#work-ex">Work Experience</a></li>
          {/* <li><a href="#projects">Projects</a></li> */}
          {/* <li><a href="#skills">Skills</a></li> */}
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>
      {/* <div className="cta">
        <a href="#work-ex" className="btn">View My Work</a>
      </div> */}
    </header>
  );
};

export default Header;
