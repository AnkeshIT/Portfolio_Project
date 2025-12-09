import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";

export const Footers = () => {
    const footerIcon = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />,
        FaGithub: <FaGithub />,
        FaLinkedinIn: <FaLinkedinIn />,
        FaTwitter: <FaTwitter />,
        FaInstagram: <FaInstagram />,
        FiMail: <FiMail />,
        LuPhone: <LuPhone />
    }
    const quickLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/experience", label: "Experience" },
        { href: "/contact", label: "Contact" },
    ];

    const technologies = [
        "React & Node.js",
        "MongoDB & PostgreSQL",
        "Express.js & JWT",
        "AWS & Azure Cloud",
        "RESTful APIs",
    ];

    const socialLinks = [
        { icon: FaGithub, href: "https://github.com", label: "GitHub" },
        { icon: FaLinkedinIn, href: "https://linkedin.com/in/ankesh-kumar-rajput789", label: "LinkedIn" },
        { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    ];

    const handleLinkClick = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="footer-section">
            <div className="container grid grid-three-cols">
                <div className="footer-about">
                    <h3 className="footer-title">Ankesh Kumar</h3>
                    <p className="footer-text">
                        Full Stack Developer specializing in MERN stack and enterprise
                        solutions. Passionate about creating innovative web applications.
                    </p>
                    <div className="footer-socials-links">
                        {socialLinks.map((social, index) => (
                            <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                                {<social.icon />}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="footer-quick-links">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-links">
                        {quickLinks.map((link, index) => (
                            <li key={index} className="footer-link-item">
                                <NavLink to={link.href} onClick={() => handleLinkClick(link.href)}>
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer-technologies">
                    <h3 className="footer-title">Technologies</h3>
                    <ul className="footer-tech-list">
                        {technologies.map((tech, index) => (
                            <li key={index} className="footer-tech-item">
                                {tech}
                            </li>
                        ))}
                    </ul>   
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="grid grid-one-cols">
                        <div className="copyright-text">
                            <p>
                                &copy; {new Date().getFullYear()} Ankesh Kumar. All rights reserved. Built with React & Node.js
                                <NavLink to="" target="_blank"></NavLink>
                            </p>
                        </div>
                        {/* <div className="footer-menu">
                            <ul>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="https://www.instagram.com/ankesh1293/" target="_blank">Social</NavLink>
                                </li>
                                <li>
                                    <NavLink to="https://www.linkedin.com/in/ankesh-kumar-rajput789/" target="_blank">LinkedIn</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}
