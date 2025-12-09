export const Experience = () => {
    const experiences = [
        {
            title: "Application Engineer",
            company: "Riddhi Corporate Services Limited",
            location: "Ahmedabad, Gujarat",
            period: "Dec 2023 - Present",
            duration: "1+ years",
            type: "current",
            highlights: [
                "Enhanced and optimized existing software systems to improve performance and functionality",
                "Developed and integrated solutions for Genetec Video Management Software, a Biometric Onboarding Application, and a Visitor Management System",
                "Designed and implemented web applications utilizing virtual addresses for Genetec Software integration",
                "Built and maintained RESTful APIs using Node.js, Express.js, PostgreSQL, and SQL Server",
                "Developed responsive and interactive frontend interfaces for a Web Application using JavaScript, jQuery, and related modules",
                "Created and maintained comprehensive documentation for software solutions, including API specifications and user guides",
                "Collaborated with cross-functional teams to gather requirements and deliver high-quality software solutions",
                "Implemented JWT-based authentication with OTP recovery for secure user access",
                "Developed and maintained a comprehensive knowledge base for internal use, enhancing team productivity and knowledge sharing",
                "Contributed to the development of an Integrated Security Management System, enhancing security protocols and user experience",
            ],
        },
        {
            title: "Software Developer",
            company: "Sarabhai Information Technology",
            location: "New Delhi",
            period: "Oct 2021 - Nov 2023",
            duration: "2+ years",
            type: "previous",
            highlights: [
                "Developed robust backend systems using Node.js, Express.js, PostgreSQL, and SQL Server",
                "Built RESTful APIs to facilitate efficient data management and retrieval",
                "Designed and developed responsive frontends using JavaScript, jQuery, and Bootstrap",
                "Implemented JWT-based authentication and authorization for secure access control",
                "Deployed and managed applications on the Cloud Jiffy platform for high scalability and reliability",
                "Contributed to the Integrated Security Management System, improving software performance for Adani Enterprise Limited",
                "Conducted rigorous testing and debugging to ensure software compliance with client requirements",
                "Developed custom algorithms to optimize control systems and enhance project functionalities",
                "Managed team workflows using the Project Tracker tool, improving efficiency and project tracking",
                "Collaborated with QA teams to troubleshoot and resolve software issues, ensuring high-quality deliverables",
            ],
        },
        {
            title: "Bachelor of Technology",
            company: "University Institute of Engineering and Technology",
            location: "Kanpur Nagar, Uttar Pradesh",
            period: "Jul 2017 - Aug 2021",
            duration: "4 years",
            type: "education",
            highlights: ["Foundation in Computer Science and Engineering"],
        },
    ];

    const startingYear = 2021;
    const currentYear = new Date().getFullYear();
    const totalExperience = currentYear - startingYear;

    return (
        <section className="section-experience container">
            <div className="experience-heading">
                <h1 className="container-title">Professional Experience</h1>
                <div className="experience-underline"></div>
                <p className="experience-text">
                    Over {totalExperience}+ years of experience delivering innovative solutions for
                    enterprise clients
                </p>
            </div>
            <div className='experience-section'>
                <div className='container grid grid-one-cols'>
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-card">
                            <div className="experience-icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <h3 className="experience-title">{exp.title}</h3>
                            <p className="experience-company">{exp.company}</p>
                            <p className="experience-location">{exp.location}</p>
                            <div className="experience-timeline">{exp.period}</div>
                            <ul className="experience-responsibilities">
                                {exp.highlights.map((highlight, idx) => (
                                    <li key={idx}>{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    {/* <div className="experience-line"></div>
                    <div className="experience-timeline"></div> */}
                </div>
            </div>
        </section>
    );
}