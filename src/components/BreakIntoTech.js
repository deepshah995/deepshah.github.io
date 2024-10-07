import React from 'react';
import myPic from './assets/breakintotech.jpg'; // Adjust the path as necessary
import './BreakIntoTech.css'; // Import your CSS file

const BreakIntoTech = () => {
  return (
    <section id="break-into-tech">
    <div className="break-into-tech-container">
      <div className="break-into-tech-text">
      <h2>Break into Tech! 🚀</h2>
      <p className="intro-text">Are you looking to transition into the tech industry?</p>
      <p className="focus-text">Our 1:1 sessions will focus on:</p>
      <ul className="focus-list">
        <li>Understanding the industry landscape and identifying key opportunities</li>
        <li>Acquiring essential skills and knowledge specific to AI/ML, Data, or Software</li>
        <li>Crafting a standout resume and developing an impactful online presence</li>
        <li>Mastering interview techniques to make a lasting impression</li>
      </ul>
<button 
          className="fancy-button"
          onClick={() => window.open('https://topmate.io/deepshah_tech', '_blank')}
        >
          Book a 1:1 with me
        </button>
      </div>
      <div className="break-into-tech-image">
        <img
          src={myPic}
          alt="Deep Shah"
          className="profile-image"
        />
      </div>
    </div>
    </section>
  );
};

export default BreakIntoTech;
