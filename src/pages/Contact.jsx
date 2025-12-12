// import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import { FiMail, FiMapPin } from "react-icons/fi";
// import { LuPhone } from "react-icons/lu";
// import { LiaTelegram } from "react-icons/lia";

// export const Contact = () => {

//     const contactInfo = [
//         {
//             icon: <FiMail />,
//             title: "Email",
//             value: "ankesh.kumar6598@gmail.com",
//             href: "mailto:ankesh.kumar6598@gmail.com",
//         },
//         {
//             icon: <LuPhone />,
//             title: "Phone",
//             value: "+91 9076763764",
//             href: "tel:+919076763764",
//         },
//         {
//             icon: <FaLinkedinIn />,
//             title: "LinkedIn",
//             value: "ankesh-kumar-rajput789",
//             href: "https://linkedin.com/in/ankesh-kumar-rajput789",
//         },
//         {
//             icon: <FiMapPin />,
//             title: "Location",
//             value: "Ahmedabad, Gujarat, India",
//             href: null,
//         },
//     ];

//     const socialLinks = [
//         { icon: FaGithub, href: "https://github.com", label: "GitHub" },
//         { icon: FaLinkedinIn, href: "https://linkedin.com/in/ankesh-kumar-rajput789", label: "LinkedIn" },
//         { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
//         { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
//     ];

//     return (
//         <section className="section-contact container">
//             <div className="contact-heading">
//                 <h1 className="container-title">Get In Touch</h1>
//                 <div className="contact-underline"></div>
//                 <p className="contact-text">
//                     Ready to collaborate on your next project? Let's discuss how I can
//                     help bring your ideas to life
//                 </p>
//             </div>

//             <div className="contact-section">
//                 <div className="container grid grid-two-cols">

//                     {/* LEFT SECTION */}
//                     <div className="contact-social-links">
//                         <h2>Let's Connect</h2>
//                         <div className="contact-info">
//                             {contactInfo.map((info, index) => (
//                                 <div key={index} className="contact-item">
//                                     <div className="contact-icon">
//                                         {info.icon}
//                                     </div>
//                                     <div className="contact-title-link">
//                                         <h4>{info.title}</h4>
//                                         {info.href ? (
//                                             <a href={info.href} target="_blank" rel="noopener noreferrer">
//                                                 {info.value}
//                                             </a>
//                                         ) : (
//                                             <span>{info.value}</span>
//                                         )}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                         <div className="social-section">
//                             <h4>Follow Me</h4>
//                             <div className="social-links">
//                                 {socialLinks.map((social, index) => (
//                                     <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
//                                         <social.icon />
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* RIGHT SECTION — FORMSPREE FORM */}
//                     <div className="contact-form">
//                         <div className="form-container">

//                             <form 
//                                 action="https://formspree.io/f/meoyrpla" 
//                                 method="POST"
//                             >
//                                 <div className="row">
//                                     <div className="col-md-6">
//                                         <label className="form-label">First Name</label>
//                                         <input type="text" name="First_Name" className="form-control" required />
//                                     </div>
//                                     <div className="col-md-6">
//                                         <label className="form-label">Last Name</label>
//                                         <input type="text" name="Last_Name" className="form-control" required />
//                                     </div>
//                                 </div>

//                                 <div className="row">
//                                     <div className="col-md-12">
//                                         <label className="form-label">Email Address</label>
//                                         <input type="email" name="Email_Id" className="form-control" required />
//                                     </div>
//                                 </div>

//                                 <div className="row">
//                                     <div className="col-md-12">
//                                         <label className="form-label">Subject</label>
//                                         <input type="text" name="Subject" className="form-control" required />
//                                     </div>
//                                 </div>

//                                 <div className="row">
//                                     <div className="col-md-12">
//                                         <label className="form-label">Message</label>
//                                         <textarea name="Message" className="form-control" rows="4" required></textarea>
//                                     </div>
//                                 </div>

//                                 {/* <input type="hidden" name="_replyto" /> */}

//                                 <div className="row">
//                                     <div className="sendMessage col-md-12">
//                                         <button type="submit" className="btn btn-primary">
//                                             <LiaTelegram /> Send Message
//                                         </button>
//                                     </div>
//                                 </div>
//                             </form>

//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };





// 10 December 2025 Code ---
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
            "ankesh123",     // replace
            "template_x8okrrg",    // replace
            formRef.current,
            "kdNZlTJPCyRUNdnFd"      // replace
        )
        .then((result) => {
            alert("Message sent successfully!");
            formRef.current.reset(); // Clear form
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


// import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import { FiMail, FiMapPin } from "react-icons/fi";
// import { LuPhone } from "react-icons/lu";
// import { LiaTelegram } from "react-icons/lia";

// export const Contact = () => {
//     const handleFormSubmit = (formData) => {
//         const formInputData = Object.fromEntries(formData.entries());
//         console.log(formInputData);
//     };



//     const contactInfo = [
//         {
//             icon: <FiMail />,
//             title: "Email",
//             value: "ankesh.kumar6598@gmail.com",
//             href: "mailto:ankesh.kumar6598@gmail.com",
//         },
//         {
//             icon: <LuPhone />,
//             title: "Phone",
//             value: "+91 9076763764",
//             href: "tel:+919076763764",
//         },
//         {
//             icon: <FaLinkedinIn />,
//             title: "LinkedIn",
//             value: "ankesh-kumar-rajput789",
//             href: "https://linkedin.com/in/ankesh-kumar-rajput789",
//         },
//         {
//             icon: <FiMapPin />,
//             title: "Location",
//             value: "Ahmedabad, Gujarat, India",
//             href: null,
//         },
//     ];

//     const socialLinks = [
//         { icon: FaGithub, href: "https://github.com", label: "GitHub" },
//         { icon: FaLinkedinIn, href: "https://linkedin.com/in/ankesh-kumar-rajput789", label: "LinkedIn" },
//         { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
//         { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
//     ];

//     return (
//         <section className="section-contact container">
//             <div className="contact-heading">
//                 <h1 className="container-title">Get In Touch</h1>
//                 <div className="contact-underline"></div>
//                 <p className="contact-text">
//                     Ready to collaborate on your next project? Let's discuss how I can
//                     help bring your ideas to life
//                 </p>
//             </div>
//             <div className="contact-section">
//                 <div className="container grid grid-two-cols">
//                     <div className="contact-social-links">
//                         <h2>Let's Connect</h2>
//                         <div className="contact-info">
//                             {contactInfo.map((info, index) => (
//                                 <div key={index} className="contact-item">
//                                     <div className="contact-icon">
//                                         {info.icon}
//                                     </div>
//                                     <div className="contact-title-link">
//                                         <h4>{info.title}</h4>
//                                         {info.href ? (
//                                             <a href={info.href} target="_blank" rel="noopener noreferrer">
//                                                 {info.value}
//                                             </a>
//                                         ) : (
//                                             <span>{info.value}</span>
//                                         )}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="social-section">
//                             <h4>Follow Me</h4>
//                             <div className="social-links">
//                                 {socialLinks.map((social, index) => (
//                                     <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
//                                         {<social.icon />}
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="contact-form">
//                         <div className="form-container">
//                             <form onSubmit={(e) => {
//                                 e.preventDefault();
//                                 handleFormSubmit(new FormData(e.target));
//                             }}>
//                                 <div className="row">
//                                     <div className="col-md-6">
//                                         <label for="inputFirstName" className="form-label">First Name</label>
//                                         <input type="text" className="form-control" id="firstName" />
//                                     </div>
//                                     <div className="col-md-6">
//                                         <label for="inputLastName" className="form-label">Last Name</label>
//                                         <input type="text" className="form-control" id="lastName" />
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col-md-12">
//                                         <label for="inputEmail" className="form-label">Email Address</label>
//                                         <input type="email" className="form-control" id="emailAddress" />
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col-md-12">
//                                         <label for="inputSubject" className="form-label">Subject</label>
//                                         <input type="text" className="form-control" id="subject" />
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col-md-12">
//                                         <label for="inputMessage" className="form-label">Message</label>
//                                         <textarea className="form-control" id="message" rows="4"></textarea>
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="sendMessage col-md-12">
//                                         <button type="submit" className="btn btn-primary"><LiaTelegram />Send Message</button>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section >
//     );
// };









{/* <h2 className="container-title">Contact Us</h2>
            <div className="contact-wrapper grid grid-two-cols">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleFormSubmit(new FormData(e.target));
                }}>
                    <input type="text" className="form-control" placeholder="Enter your Name" name="username" required autoComplete="false" />
                    <input type="email" className="form-control" placeholder="Enter your Email" name="email" required autoComplete="false" />
                    <textarea className="form-control" rows="10" placeholder="Enter your Message" name="message" required autoComplete="false"></textarea>
                    <button type="submit">Send</button>
                </form>
                <div className="contact-info">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="contact-item">
                            {info.icon && <info.icon />}
                            <div>
                                <h4>{info.title}</h4>
                                {info.href ? (
                                    <a href={info.href} target="_blank" rel="noopener noreferrer">{info.value}</a>
                                ) : (
                                    <span>{info.value}</span>
                                )}
                            </div>
                        </div>
                    ))}
                    <div className="social-links">
                        {socialLinks.map((link, index) => (
                            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                                {<link.icon />}
                            </a>
                        ))}
                    </div>
                </div>
            </div> */}





















// export const Contact = () => {

//     const handleFormSubmit = (formData) => {
//         const formInputData = Object.fromEntries(formData.entries())
//         console.log(formInputData)
//     }

//     return (
//         <section className="section-contact">
//             <h2 className="container-title">Contact Us</h2>

// <div className="contact-wrapper container">
//     <form action={handleFormSubmit}>
//         <input type="text" className="form-control" placeholder="Enter your Name" name="username" required autoComplete="false" />
//         <input type="email" className="form-control" placeholder="Enter your Email" name="email" required autoComplete="false" />
//         <textarea className="form-control" rows="10" placeholder="Enter your Message" name="message" required autoComplete="false"></textarea>
//         <button type="submit" value="send">Send</button>
//     </form>
// </div>
//         </section>
//     )
// };
