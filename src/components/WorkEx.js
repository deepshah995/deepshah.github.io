import React from 'react';
import './WorkEx.css'; // Import your CSS file

const WorkEx = () => {
  const experiences = [
    {
      title: 'Software Engineer - MLDevops' ,
      company: 'Workday',
      duration: 'Sept 2023 - Present',
      description: 'Maintaining ML Runtime Ops architecture and Developing & Deployinh LLM Applications',
    },
    {
      title: 'MLOps Engineer',
      company: 'Sanofi',
      duration: 'May 2022 - Aug 2023',
      description: 'Led a support team to manage Kubernetes resources and MLOps Platform and established MLOps best practices wihtin the ML team of about 350 people.',
    },
    {
      title: 'ML Operations Analyst',
      company: 'Definity',
      duration: 'Jan 2021 - May 2022',
      description: 'Developed and deployed high-performance REST APIs and Apps using R frameworks, and also worked with data scientists to improve inference models',
    },
    {
      title: 'Data Analyst',
      company: 'Ornge',
      duration: 'Jul 2019 - Jan 2021',
      description: 'Built Python-based text mining tools, predictive models, and automated reports, streamlining data processes and aiding strategic decisions for paramedic services.',
    },
    // Add more experiences as needed
  ];


  return (
    <section id="work-ex">
    <div className="work-experience-container">
      <h2>Work Experience 👨‍💻</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="experience-item">
          <h3>{experience.title}</h3>
          <h4>{experience.company}</h4>
          <p className="experience-duration"><em>{experience.duration}</em></p>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
    </section>
  );
};



export default WorkEx;
