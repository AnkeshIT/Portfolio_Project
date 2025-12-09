import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Application Engineer",
      company: "Riddhi Corporate Services Limited",
      location: "Ahmedabad, Gujarat",
      period: "Dec 2023 - Present",
      duration: "1+ years",
      type: "current",
      highlights: [
        "Enhanced existing software systems for improved performance",
        "Developed Genetec Video Management Software solutions",
        "Built Biometric Onboarding and Visitor Management Systems",
        "Implemented JWT-based authentication with OTP recovery",
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
        "Developed robust backend systems using Node.js and Express.js",
        "Built RESTful APIs for efficient data management",
        "Deployed applications on Cloud Jiffy platform",
        "Contributed to Integrated Security Management System",
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

  const getTimelineColor = (type: string) => {
    switch (type) {
      case "current":
        return "from-blue-500 to-indigo-500";
      case "previous":
        return "from-emerald-500 to-green-500";
      case "education":
        return "from-purple-500 to-indigo-500";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "current":
        return "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200";
      case "previous":
        return "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200";
      case "education":
        return "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200";
      default:
        return "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200";
    }
  };

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Over 3 years of experience delivering innovative solutions for
            enterprise clients
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start md:justify-between md:items-center animate-slide-up"
              >
                {/* Desktop Left Content */}
                <div className={`hidden md:flex w-5/12 ${index % 2 === 0 ? "justify-end pr-8" : "justify-start pl-8 order-2"}`}>
                  <Card className="max-w-md shadow-lg">
                    <CardContent className="p-6">
                      <div className={index % 2 === 0 ? "text-right" : ""}>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                          {exp.company}
                        </h4>
                        <p className="text-muted-foreground mb-4">
                          {exp.location}
                        </p>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          {exp.highlights.map((highlight, hIndex) => (
                            <p key={hIndex}>• {highlight}</p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline node */}
                <div
                  className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r ${getTimelineColor(
                    exp.type,
                  )} rounded-full flex items-center justify-center z-10`}
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Mobile Content */}
                <div className="flex md:hidden w-full pl-16">
                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                        {exp.company}
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        {exp.location}
                      </p>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        {exp.highlights.map((highlight, hIndex) => (
                          <p key={hIndex}>• {highlight}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Desktop Right Content / Time Badge */}
                <div
                  className={`hidden md:flex w-5/12 ${
                    index % 2 === 0 ? "pl-8" : "pr-8 justify-end"
                  }`}
                >
                  <div
                    className={`rounded-xl p-4 max-w-xs ${getBadgeColor(exp.type)}`}
                  >
                    <div className="text-sm font-semibold">{exp.period}</div>
                    <div className="text-xs opacity-75">{exp.duration}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



















/* --- Experience Section --- */

.section-experience {
  margin: 3.6rem auto;
}
.experience-heading{
  text-align: center;
  padding: 0 !important;
  margin-bottom: 40px;
}

.experience-underline{
  width: 20rem;
  height: 0.4rem;
  background-color: #099141;
  margin: 0.6rem auto;
  border-radius: 0.2rem;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 48px 100px 0px;
}

.experience-text{
  font-size: 1.8rem;
  font-weight: 500;
  font-family:'Anton', sans-serif;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
}
.experience-section .container {
  padding: 0.2rem;
  margin: 0rem auto;
  gap: 6.4rem;
}
/* Timeline */
.experience-timeline {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
  background-color: #f9fafb;
  border-radius: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 20px -10px, rgba(0, 0, 0, 0.04) 0px 4px 6px -2px; 
}

.experience-timeline-line {
  position: absolute;
  top: 0;
  left: 1rem;
  height: 100%;
  width: 2px;
  background-color: #d1d5db;
}

@media (min-width: 768px) {
  .experience-timeline-line {
    left: 50%;
    transform: translateX(-1px);
  }
}

/* Timeline entry */
.experience-timeline-items {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 1rem;
}

.experience-entry {
  position: relative;
  display: flex;
  flex-direction: column;
}

/* .entry-content.desktop {
  display: none;
} */

.entry-content.mobile {
  display: flex;
  padding-left: 4rem;
}

@media (min-width: 768px) {
  .entry-content.desktop {
    display: flex;
    width: 41.666667%;
  }

  .entry-content.desktop.left {
    justify-content: flex-end;
    padding-right: 2rem;
  }

  .entry-content.desktop.right {
    justify-content: flex-start;
    padding-left: 2rem;
    order: 2;
  }

  .entry-content.mobile {
    display: none;
  }
}

.timeline-node {
  position: absolute;
  left: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.timeline-node-inner {
  width: 0.75rem;
  height: 0.75rem;
  background-color: white;
  border-radius: 9999px;
}

@media (min-width: 768px) {
  .timeline-node {
    left: 50%;
    transform: translateX(-50%);
  }
}

/* Card styles */
.experience-card {
  max-width: 400px;
  background-color: #fff;
  border-radius: 0.75rem;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 20px -10px, rgba(0, 0, 0, 0.04) 0px 4px 6px -2px;
  transition: box-shadow 0.3s ease-in-out;
}

.experience-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: fadeIn 0.8s ease-out forwards;
}

.experience-title {
  font-size: 2.5rem;
  font-weight: 600;
  font-family: 'Anton', sans-serif;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.experience-subtitle {
  font-size: 1.6rem;
  font-weight: 500;
  font-family: 'Anton', sans-serif;
  color: #2563eb;
  margin-bottom: 0.5rem;
}

.experience-location{
  font-size: 1.4rem;
  font-weight: 400;
  font-family: 'Anton', sans-serif;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.experience-highlights{
  font-size: 1.4rem;
  font-weight: 400;
  font-family: 'Anton', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.experience-description{
  font-size: 1.4rem;
  font-weight: 400;
  font-family: 'Anton', sans-serif;
  color: #374151;
  margin-top: 0.5rem;
}

/* Timeline badge */
.entry-time.desktop {
  display: none;
}

@media (min-width: 768px) {
  .entry-time.desktop {
    display: flex;
    width: 41.666667%;
  }

  .entry-time.desktop.left {
    justify-content: flex-end;
    padding-right: 2rem;
  }

  .entry-time.desktop.right {
    padding-left: 2rem;
  }
}

.experience-badge {
  width: 20rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #f4f7fd;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 20px -10px, rgba(0, 0, 0, 0.04) 0px 4px 6px -2px;
}

.experience-period {
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Anton', sans-serif;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.experience-duration {
  font-size: 1.6rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  color: #6b7280;
  margin-top: 0.5rem;
}

/* .entry-content.desktop.left {
  justify-content: flex-end;
  padding-right: 2rem;
}

.entry-content.desktop.right {
  justify-content: flex-start;
  padding-left: 2rem;
  order: 2;
} */

/* 08 August 2025 Adding CSS */


/* Entry content base */
.entry-content.desktop {
  display: flex;
  width: 41.666667%; /* Same as w-5/12 in Tailwind */
}

/* Positioning for alternating entries */
/* .entry-content.desktop.left {
  justify-content: flex-end;
  padding-right: 2rem;
}

.entry-content.desktop.right {
  justify-content: flex-start;
  padding-left: 2rem;
  order: 2; /* Swap position for right side 
} */

/* Experience card container */
/* .experience-card {
  max-width: 400px;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
} */

/* Inside card */
/* .experience-content {
  padding: 1.5rem;
} */

/* Title styles */
/* .experience-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
} */

/* Subtitle styles */
/* .experience-subtitle {
  font-size: 1.125rem;
  color: #2563eb; 
  margin-bottom: 0.5rem;
} */

/* Location styles */
/* .experience-location {
  color: #6b7280;
  margin-bottom: 1rem;
} */

/* Highlights */
/* .experience-highlights {
  font-size: 0.875rem;
  color: #6b7280;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
} */

.timeline-entry:nth-child(even) .entry-content.desktop {
  justify-content: flex-start;
  padding-left: 2rem;
  order: 2;
}

.timeline-entry:nth-child(odd) .entry-content.desktop {
  justify-content: flex-end;
  padding-right: 2rem;
}




/* Time container (desktop view only) */
/* .entry-time.desktop {
  display: none;
}

@media (min-width: 768px) {
  .entry-time.desktop {
    display: flex;
    width: 41.666667%; 
  }

  .entry-time.desktop.left {
    justify-content: flex-end;
    padding-right: 2rem;
  }

  .entry-time.desktop.right {
    padding-left: 2rem;
  }
} */

/* Badge styles */
/* .experience-badge {
  border-radius: 0.75rem;
  padding: 1rem;
  max-width: 200px;
} */

/* Text inside badge */
/* .experience-period {
  font-size: 0.875rem;
  font-weight: 600;
}

.experience-duration {
  font-size: 0.75rem;
  opacity: 0.75;
} */

/* Badge color variants */
.badge-current {
  background-color: #dbeafe; /* blue-100 */
  color: #1e40af; /* blue-800 */
}

.badge-previous {
  background-color: #d1fae5; /* emerald-100 */
  color: #065f46; /* emerald-800 */
}

.badge-education {
  background-color: #ede9fe; /* purple-100 */
  color: #5b21b6; /* purple-800 */
}

.badge-default {
  background-color: #f3f4f6; /* gray-100 */
  color: #374151; /* gray-800 */
}

@media (min-width: 768px) {
  /* Odd entries = badge on the right */
  .timeline-entry:nth-child(odd) .entry-time.desktop {
    padding-left: 2rem;
  }

  /* Even entries = badge on the left */
  .timeline-entry:nth-child(even) .entry-time.desktop {
    justify-content: flex-end;
    padding-right: 2rem;
  }
}


/* Timeline color variants */
.timeline-current {
  background: linear-gradient(to right, #3b82f6, #6366f1);
}

.timeline-previous {
  background: linear-gradient(to right, #10b981, #22c55e);
}

.timeline-default {
  background: linear-gradient(to right, #9ca3af, #6b7280);
}

/* Badge color variants */
/* .badge-current {
  background-color: #dbeafe;
  color: #1e40af;
}

.badge-previous {
  background-color: #d1fae5;
  color: #065f46;
}

.badge-default {
  background-color: #f3f4f6;
  color: #374151;
} */

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
}

/* Desktop specific styles 11 August 2025 */ 

.entry-content.desktop.left {
    grid-column: 1 / span 5; /* left side */
    text-align: right;
}
.entry-time.desktop.right {
    grid-column: 7 / span 5; /* right side */
}

.entry-content.desktop.right {
    grid-column: 7 / span 5; /* right side */
    text-align: left;
}
.entry-time.desktop.left {
    grid-column: 1 / span 5; /* left side */
}


