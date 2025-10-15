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
    <>
      <h2>Interests</h2>
      <div className="card">
        <ul>
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Interests;