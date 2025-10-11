import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Cloud Resume Challenge",
      description: "A static website hosted on AWS S3, served via CloudFront, with a serverless API backend using Lambda and DynamoDB for a visitor counter.",
      tools: ["S3", "Lambda", "API Gateway", "DynamoDB"]
    },
    {
      title: "Automated ETL Pipeline",
      description: "Designed and deployed an automated ETL pipeline on AWS to process raw data, transform it using Python scripts in Lambda, and load it into a Redshift data warehouse.",
      tools: ["Python", "AWS Glue", "Redshift", "S3"]
    },
    {
      title: "Serverless Web App",
      description: "A full-stack serverless application for user authentication and data management, built with AWS Amplify, Cognito, and AppSync.",
      tools: ["Amplify", "Cognito", "AppSync", "React"]
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tools">
              {project.tools.map((tool, toolIndex) => (
                <span key={toolIndex}>{tool}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;