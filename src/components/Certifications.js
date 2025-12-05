import React from 'react';

const Certifications = () => {
    const certifications = [
        {
            title: "AWS Certified Solutions Architect Associate",
            link: "https://www.credly.com/badges/e46de434-1ceb-4e20-a415-c646e142f3b4/linked_in_profile",
            badgeUrl: `${process.env.PUBLIC_URL}/certifications/aws-solutions-architect.png`
        },
        {
            title: "AWS Certified Developer Associate",
            link: "https://www.credly.com/badges/a216e20c-b0cd-475d-af6b-6276d01a5cff/linked_in_profile",
            badgeUrl: `${process.env.PUBLIC_URL}/certifications/aws-developer.png`
        },
        {
            title: "Cisco CyberOps Associate",
            link: "https://www.credly.com/badges/ecec7fe1-4e40-4735-828d-f575b9fc583d/linked_in_profile",
            badgeUrl: `${process.env.PUBLIC_URL}/certifications/cisco-cyberops.png`
        },
        {
            title: "Cisco Data Analytics Essentials",
            link: "https://www.credly.com/badges/9fd4a04d-464b-4d39-ab35-0f91adf1b7f0/linked_in_profile",
            badgeUrl: `${process.env.PUBLIC_URL}/certifications/cisco-data-analytics.png`
        },
        {
            title: "ALX Virtual Assistant Course (Honors)",
            link: "https://www.virtualbadge.io/certificate-validator?credential=cer-a31ab08d-c1cb-4eec-a241-3c0c5641",
            badgeUrl: `${process.env.PUBLIC_URL}/certifications/alx-virtual-assistant.png`
        }
    ];

    return (
        <section id="certifications">
            <h2>Certifications</h2>
            <div className="certifications-grid">
                {certifications.map((cert, index) => (
                    <a 
                        key={index} 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="certification-card"
                    >
                        <img 
                            src={cert.badgeUrl} 
                            alt={cert.title} 
                            className="certification-badge"
                            style={{ maxWidth: '200px', height: 'auto' }}
                        />
                        <h3>{cert.title}</h3>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Certifications;