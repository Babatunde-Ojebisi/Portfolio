import React from 'react';

function Interests() {
  const interests = [
    "Cloud Architecture",
    "Artificial Intelligence",
    "Startups",
    "Chess",
    "Teaching & Mentorship"
  ];

  return (
    <section id="interests" className="card">
      <h2>Interests</h2>
      <ul>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </section>
  );
}

export default Interests;