import { LiaLaptopCodeSolid } from "react-icons/lia";
import { BsHddRack } from "react-icons/bs";
import { LuDatabase } from "react-icons/lu";
import { FaAws, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { PiFileSql } from "react-icons/pi";

export const Skills = () => {
    const skillsData = [
        {
            category: "Frontend",
            icon: <LiaLaptopCodeSolid />,
            skills: [
                { name: "React", level: 85 },
                { name: "JavaScript", level: 90 },
                { name: "jQuery", level: 88 },
                { name: "HTML/CSS", level: 92 },
            ],
        },
        {
            category: "Backend",
            icon: <BsHddRack />,
            skills: [
                { name: "Node Js", level: 90 },
                { name: "Express Js", level: 88 },
                { name: "REST APIs", level: 85 },
                { name: "Microservices", level: 80 },
            ],
        },
        {
            category: "Database & Cloud",
            icon: <LuDatabase />,
            skills: [
                { name: "SQL Server", level: 85 },
                { name: "MongoDB", level: 82 },
                { name: "PostgreSQL", level: 65 },
                { name: "Azure", level: 60 },
            ],
        },
    ];

    const techLogos = [
        { name: "JavaScript", emoji: <TbBrandJavascript /> },
        { name: "React", emoji: <FaReact />},
        { name: "Node.js", emoji: <FaNodeJs /> },
        { name: "SQL Server", emoji: <PiFileSql /> },
        { name: "AWS", emoji: <FaAws /> },
        { name: "Git", emoji: <FaGithub /> },
    ];
    
    return (
        <section className="section-skills container">
            <div className="skills-heading">
                <h1 className="container-title">Technical Skills</h1>
                <div className="skills-underline"></div>
                <p className="skills-text">Proficient in modern web development technologies</p>
            </div>
            <div className='skills-section'>
                <div className='container grid grid-three-cols'>
                    {skillsData.map((section, index) => (
                        <div key={index} className="skills-card">
                            <h3 className="skills-category">
                                <span className="skills-icon">{section.icon}</span> {section.category}
                            </h3>
                            {section.skills.map((skill, idx) => (
                                <div key={idx} className="skill-item">
                                    <div className="skill-header">
                                        <span>{skill.name}</span>
                                        <span className="skill-percentage">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar-bg">
                                        <div
                                            className="skill-bar-fill"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="tech-logos">
                    {techLogos.map((tech, index) => (
                        <div key={index} className="tech-logo">
                            <span className="tech-emoji">{tech.emoji}</span>
                            <span className="tech-name">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}