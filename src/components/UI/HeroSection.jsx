import { FaLinkedinIn, FaLongArrowAltRight, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
    const handleViewWork = () => {
        const element = document.querySelector("#projects");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleGetInTouch = () => {
        console.log("Get in touch clicked");
        const element = document.querySelector("#contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleResumeDownload = () => {
        const link = document.createElement("a");
        link.href = "../../api/Ankesh_Kumar_Resume.pdf";
        link.setAttribute("download", "Ankesh_Kumar_Resume.pdf");
        document.body.appendChild(link);
        link.click();
        link.remove();
    };
    // const handleResumeDownload = () => {
    //     window.open("/api", "_blank");
    // };
    
    const experienceStartYear = 2021;
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - experienceStartYear;

    return (
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <div className="job-title">
                        <span className="job-role-name">
                            Full Stack Developer
                        </span>
                    </div>
                    <h1 className="heading-xl">
                        Hi, I'm <span className="text-primary">Ankesh Kumar</span>
                    </h1>
                    <p className="paragraph">
                        Dedicated Full Stack Developer with <strong>{yearsOfExperience}+ years</strong> of experience in designing, developing,
                        and deploying scalable web applications using the <strong>MERN stack</strong>.
                    </p>
                    <div className="hero-btns grid grid-three-cols">
                        <button type="button" className="btn btn-darken btn-inline bg-white-box">
                            <NavLink to="/contact" onClick={() => handleGetInTouch("#contact")}>
                                Get In Touch
                            </NavLink>
                        </button>
                        <button type="button" onClick={handleViewWork} id="projects" className="btn btn-darken btn-inline bg-white-box">
                            View My Work
                        </button>
                        <button type="button" onClick={handleResumeDownload} className="btn btn-darken btn-inline bg-white-box">
                             Download Resume
                        </button>
                    </div>

                    {/* <div className="hero-btns">
                        <button type="button" className="btn btn-darken btn-inline bg-white-box">
                            <NavLink to="/contact" onClick={() => handleGetInTouch("#contact")}>
                                Get In Touch <FaLongArrowAltRight />
                            </NavLink>
                        </button>
                        <button type="button" onClick={handleViewWork} id="projects" className="btn btn-darken btn-inline bg-white-box">
                            View My Work
                        </button>
                        <button type="button" onClick={handleResumeDownload} className="btn btn-darken btn-inline bg-white-box">
                            <MdOutlineFileDownload /> Download Resume
                        </button>
                    </div> */}
                    <div className="hero-social-icons">
                        <a href="mailto:ankesh.kumar6598@gmail.com">
                            <IoMailOutline />
                        </a>
                        <a href="https://linkedin.com/in/ankesh-kumar-rajput789" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <a href="tel:+919076763764">
                            <FaPhoneAlt />
                        </a>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/images/AK-2.jpg" alt="World is beauty" className="banner-image" />
                </div>
            </div>
        </main>
    )
};
