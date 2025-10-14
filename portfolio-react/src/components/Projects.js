import React, { useState } from 'react';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('web');

  const projects = {
    web: [
        {
            title: "Dynamic Graphics Int'l Concept (DGIC)",
            description: "A professional painting services website featuring a modern, dynamic design. Highlights include expert craftsmanship, premium materials, and customer testimonials. The site showcases interior/exterior painting services, wall design, and texturing with an emphasis on transformation and excellence.",
            image: "/dgic-website.jpg",
            technologies: ["WordPress", "Custom Theme", "Responsive Design", "Service Showcase", "Testimonial System"],
            liveLink: "https://dgic.com.ng",
            githubLink: null
        },
        {
            title: "Genhairs Travel Consult",
            description: "A travel consultation website with booking capabilities and travel information resources.",
            image: "https://via.placeholder.com/400x300",
            technologies: ["WordPress", "Travel Booking System", "Custom Plugins", "Responsive Design"],
            liveLink: "https://genhairsistravelconsult.com",
            githubLink: null
        },
        {
            title: "Jordan Schools",
            description: "An educational institution website featuring course information, student resources, and administrative tools.",
            image: "https://via.placeholder.com/400x300",
            technologies: ["WordPress", "LMS Integration", "Educational Plugins", "Content Management"],
            liveLink: "https://jordanschools.org",
            githubLink: null
        }
    ],
    cloud: [
        {
            title: "AWS Serverless API",
            description: "A scalable serverless API built with AWS Lambda and API Gateway for real-time data processing.",
            image: "https://via.placeholder.com/400x300",
            technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudFormation"],
            liveLink: "https://demo.example.com",
            githubLink: "https://github.com/example/project"
        },
        {
            title: "Cloud Monitoring Dashboard",
            description: "A comprehensive monitoring solution for cloud infrastructure using various AWS services.",
            image: "https://via.placeholder.com/400x300",
            technologies: ["CloudWatch", "AWS Lambda", "React", "GraphQL"],
            liveLink: "https://demo.example.com",
            githubLink: "https://github.com/example/project"
        },
        {
            title: "E-commerce Platform",
            description: "A cloud-based e-commerce solution with microservices architecture, containerized deployment, and automated scaling.",
            image: "https://via.placeholder.com/400x300",
            technologies: ["AWS ECS", "Docker", "Kubernetes", "CloudFront"],
            liveLink: "https://demo.example.com",
            githubLink: "https://github.com/example/project"
        },
        {
            title: "Portfolio Infrastructure",
            description: "A serverless portfolio website deployment with CI/CD pipeline and cloud-native infrastructure.",
            image: "https://via.placeholder.com/400x300",
            technologies: ["AWS S3", "CloudFront", "Route53", "GitHub Actions"],
            liveLink: "https://demo.example.com",
            githubLink: "https://github.com/example/project"
        }
    ]
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-categories">
        <button 
          className={`category-btn ${activeCategory === 'web' ? 'active' : ''}`}
          onClick={() => setActiveCategory('web')}
        >
          Web Development
        </button>
        <button 
          className={`category-btn ${activeCategory === 'cloud' ? 'active' : ''}`}
          onClick={() => setActiveCategory('cloud')}
        >
          Cloud Solutions
        </button>
      </div>

      <div className="projects-grid">
        {projects[activeCategory].map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <div className="project-links">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Visit Website
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    View Code
                  </a>
                )}
              </div>
            </div>
            <div className="project-content">
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;