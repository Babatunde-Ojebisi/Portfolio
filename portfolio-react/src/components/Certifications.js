import React from 'react';

function Certifications() {
  const certifications = [
    "AWS Certified Solutions Architect – Associate",
    "AWS Certified Developer – Associate",
    "AWS Cloud Practitioner",
    "ISC2 Certified in Cybersecurity",
    "Cisco Data Analytics Essentials",
    "Cisco CyberOps Associate"
  ];

  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <ul className="cert-list">
        {certifications.map((cert, index) => (
          <li key={index} className="cert-item">{cert}</li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;