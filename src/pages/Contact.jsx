import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import { LiaTelegram } from "react-icons/lia";
import emailjs from "emailjs-com";
import { useRef } from "react";

export const Contact = () => {

    const formRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "ankesh123",     
            "template_x8okrrg",
            formRef.current,
            "kdNZlTJPCyRUNdnFd" 
        )
        .then((result) => {
            alert("Message sent successfully!");
            formRef.current.reset();
        })
        .catch((error) => {
            alert("Failed to send message!");
            console.log(error);
        });
    };

    const contactInfo = [
        {
            icon: <FiMail />,
            title: "Email",
            value: "ankesh.kumar6598@gmail.com",
            href: "mailto:ankesh.kumar6598@gmail.com",
        },
        {
            icon: <LuPhone />,
            title: "Phone",
            value: "+91 9076763764",
            href: "tel:+919076763764",
        },
        {
            icon: <FaLinkedinIn />,
            title: "LinkedIn",
            value: "ankesh-kumar-rajput789",
            href: "https://linkedin.com/in/ankesh-kumar-rajput789",
        },
        {
            icon: <FiMapPin />,
            title: "Location",
            value: "Ahmedabad, Gujarat, India",
            href: null,
        },
    ];

    const socialLinks = [
        { icon: FaGithub, href: "https://github.com", label: "GitHub" },
        { icon: FaLinkedinIn, href: "https://linkedin.com/in/ankesh-kumar-rajput789", label: "LinkedIn" },
        { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
        { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    ];

    return (
        <section className="section-contact container">
            <div className="contact-heading">
                <h1 className="container-title">Get In Touch</h1>
                <div className="contact-underline"></div>
                <p className="contact-text">
                    Ready to collaborate on your next project? Let's discuss how I can
                    help bring your ideas to life
                </p>
            </div>

            <div className="contact-section">
                <div className="container grid grid-two-cols">
                    
                    {/* LEFT SIDE */}
                    <div className="contact-social-links">
                        <h2>Let's Connect</h2>
                        <div className="contact-info">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="contact-item">
                                    <div className="contact-icon">
                                        {info.icon}
                                    </div>
                                    <div className="contact-title-link">
                                        <h4>{info.title}</h4>
                                        {info.href ? (
                                            <a href={info.href} target="_blank" rel="noopener noreferrer">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span>{info.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="social-section">
                            <h4>Follow Me</h4>
                            <div className="social-links">
                                {socialLinks.map((social, index) => (
                                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                                        <social.icon />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE — FORM */}
                    <div className="contact-form">
                        <div className="form-container">

                            <form ref={formRef} onSubmit={handleFormSubmit}>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-label">First Name</label>
                                        <input type="text" name="firstName" className="form-control" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Last Name</label>
                                        <input type="text" name="lastName" className="form-control" required />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="form-label">Email Address</label>
                                        <input type="email" name="email" className="form-control" required />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="form-label">Subject</label>
                                        <input type="text" name="subject" className="form-control" required />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="form-label">Message</label>
                                        <textarea name="message" className="form-control" rows="4" required></textarea>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="sendMessage col-md-12">
                                        <button type="submit" className="btn btn-primary">
                                            <LiaTelegram /> Send Message
                                        </button>
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};