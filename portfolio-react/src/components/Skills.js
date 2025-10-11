import React from 'react';

function Skills() {
  const skills = [
    "AWS", "Python", "HTML5/CSS3", "JavaScript", 
    "SQL", "Tableau", "Microsoft Power BI", "Git/GitHub"
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;