import React from 'react';

function Experience() {
  const experiences = [
    {
      period: "Nov 2023 - Present",
      company: "Cognitio Technology Solutions",
      position: "Web Developer",
      description: "Specializing in creating modern, responsive websites with a focus on user experience and performance optimization.",
      achievements: [
        "Develop and maintain client websites using modern web technologies",
        "Implement SEO best practices to improve website visibility",
        "Manage Google Ads campaigns for enhanced online presence"
      ],
      skills: [
        "Frontend Development",
        "WordPress",
        "SEO Optimization",
        "Google Ads",
        "Responsive Design",
        "Performance Optimization"
      ],
      current: true
    },
    {
      period: "Jul 2024 - Dec 2024",
      company: "Soutech Ventures [Contract]",
      position: "IT Instructor & Web Administrator",
      description: "Led comprehensive training programs in Cloud Computing and Data Analytics while managing multiple corporate websites.",
      achievements: [
        "Trained students in AWS cloud services and data analytics fundamentals",
        "Managed content strategy and website redesign projects",
        "Improved website traffic through SEO optimization and content scheduling",
        "Developed and delivered custom training materials for technical courses"
      ],
      skills: [
        "AWS Cloud Services",
        "Python Programming",
        "SQL Database Management",
        "Data Cleaning & Preparation",
        "Content Management",
        "Technical Training",
        "Leadership",
        "Communication"
      ],
      current: false
    },
    {
      period: "Feb 2021 - Jan 2024",
      company: "VCL Microfinance Bank",
      position: "Bank Operation Officer",
      description: "Managed daily banking operations while ensuring exceptional customer service and accurate transaction processing.",
      achievements: [
        "Handled daily banking transactions with 100% accuracy",
        "Provided excellent customer service to diverse clientele",
        "Maintained detailed records of all banking operations",
        "Ensured compliance with banking regulations and procedures"
      ],
      skills: [
        "Cash Management",
        "Customer Service",
        "Financial Operations",
        "Risk Management",
        "Problem Solving",
        "Attention to Detail",
        "Team Collaboration"
      ],
      current: false
    }
  ];

  return (
    <section id="experience">
      <h2>Professional Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-period">{exp.period}</div>
              <h3 className="timeline-title">{exp.position}</h3>
              <div className="timeline-company">{exp.company}</div>
              <p className="timeline-description">{exp.description}</p>
              <div className="timeline-achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div className="timeline-skills">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;