import React, { useState } from 'react';

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = {
    'Cloud & DevOps': [
      { name: 'AWS', level: 90 },
      { name: 'Git/GitHub', level: 85 },
      { name: 'CI/CD', level: 80 }
    ],
    'Frontend Development': [
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'WordPress', level: 85 }
    ],
    'Backend & Database': [
      { name: 'Python', level: 85 },
      { name: 'SQL', level: 80 },
      { name: 'Node.js', level: 75 }
    ],
    'Data & Analytics': [
      { name: 'Tableau', level: 80 },
      { name: 'Power BI', level: 85 },
      { name: 'Data Analysis', level: 80 }
    ]
  };

  return (
    <section id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skills-list">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-item"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-container">
                    <div
                      className="skill-bar"
                      style={{
                        width: `${skill.level}%`,
                        transform: hoveredSkill === skill.name ? 'scaleX(1.02)' : 'scaleX(1)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;