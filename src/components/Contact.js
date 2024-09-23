import React from 'react';
import './Contact.css'; // Import your CSS file


const Contact = () => {
  const linkedInUrl = 'https://www.linkedin.com/in/deep-shah-28b323126'; // Replace with your LinkedIn profile URL
  const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=deepshah995@gmail.com'; // Replace with your Gmail address

  return (
    <section id="contact">
      <h2>Get in Touch with Me 📩</h2>
      <div className="contact-buttons">
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="contact-button linkedin">
          LinkedIn
        </a>
        <a href={gmailUrl} target="_blank" rel="noopener noreferrer"  className="contact-button gmail">
          Gmail
        </a>
      </div>
    </section>
  );
};

export default Contact;
