import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/babatunde-ojebisi/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Babatunde-Ojebisi" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://wa.me/+2348027929665" target="_blank" rel="noopener noreferrer">Whatsapp</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Babatunde Ojebisi. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;