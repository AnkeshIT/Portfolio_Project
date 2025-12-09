import { LuExternalLink } from "react-icons/lu";
import { VscGithubAlt } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

export const Projects = () => {

    const projects = [
        {
            title: "Security Risk Assessment",
            description:
                "Comprehensive security risk assessment system for Adani Enterprise Limited with robust backend systems, RESTful APIs, and responsive frontend interfaces.",
            image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
            technologies: ["Node Js", "Express Js", "SQL Server", "JWT Auth", "Bootstrap"],
            badge: "Enterprise",
            badgeVariant: "default",
            period: "Feb 2025 - Present",
        },
        {
            title: "Security Management System",
            description:
                "Victor Command Center for incident tracking with Google Maps API integration, real-time mapping, and comprehensive KPI dashboards with data visualization.",
            image:
                "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
            technologies: ["Node Js", "Express Js", "Google Maps API", "Real-time Data", "Dashboard"],
            badge: "Featured",
            badgeVariant: "secondary",
            period: "Jan 2022 - Dec 2022",
        },
        {
            title: "Project Tracker System",
            description:
                "Business project tracking and invoicing system with real-time data analytics dashboards featuring comprehensive bar chart visualizations.",
            image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
            technologies: ["Business Logic", "Analytics", "Invoicing", "Charts"],
            badge: "Business",
            badgeVariant: "outline",
            period: "Jan 2023 - Jun 2023",
        },
        {
            title: "Security Scorecard System",
            description:
                "Performance tracking system for Adani Power Limited's thermal business with integrated real-time analytics dashboards and comprehensive data visualization.",
            image:
                "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
            technologies: ["Performance Tracking", "Real-time", "Data Viz"],
            badge: "Power Sector",
            badgeVariant: "destructive",
            period: "Jul 2023 - Dec 2023",
        },
    ];

    return (
        <section className="section-projects container">
            <div className="projects-heading">
                <h1 className="container-title">Featured Projects</h1>
                <div className="projects-underline"></div>
                <p className="projects-text">
                    Enterprise-grade applications built with modern technologies for
                    leading organizations
                </p>
            </div>
            <div className="projects-section">
                <div className="container grid grid-two-cols">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="overflow-hidden">
                                <img src={project.image} alt={project.title} className="project-image" />
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <span className={`project-badge badge-${project.badgeVariant}`}>
                                    {project.badge}
                                </span>
                            </div>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.technologies.map((tech, idx) => (
                                    <span key={idx} className="project-tech-badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="project-timeline">
                                <span className="project-period">{project.period}</span>
                                <div className="project-buttons">
                                    <NavLink>
                                        <LuExternalLink />
                                    </NavLink>
                                    <NavLink>
                                        <VscGithubAlt />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="more-projects">
                    <NavLink to="https://github.com/AnkeshIT/" target="_blank">
                        <VscGithubAlt />
                        <span className="more-projects-text"> View More on GitHub</span>
                    </NavLink>
                </div>
            </div>
        </section>
    );
}