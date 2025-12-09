function calculateExperience(startDate) {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, total: (years + months / 12).toFixed(1) };
}

export const About = () => {
  const { years, months, total } = calculateExperience("2021-10-01"); 

  return (
    <section className="section-about container">
      <div className="about-heading">
        <h1 className="container-title">About Me</h1>
        <div className="about-underline"></div>
      </div>
      <div className='about-section'>
        <div className='container grid grid-two-cols'>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern web development workspace with multiple monitors"
              className='about-banner-image'
            />
          </div>
          <div className="about-content">
            <p className="about-description">
              I am a dedicated and detail-oriented Full Stack Developer with over{" "}
              <strong>{years} years {months} months </strong> 
               of experience in designing, developing, and deploying scalable web applications.
            </p>
            <p className="about-description">
              Specializing in the <strong>MERN stack</strong> and proficient in both backend and frontend technologies,
              I create user-friendly interfaces and efficient APIs. My background in Agile methodologies and cloud
              platforms enhances my ability to deliver innovative solutions.
            </p>
            <div className="gradient-cards">
              <div className="container-card">
                <div className="card-title">{total}+</div>
                <div className="card-description">Years Experience</div>
              </div>
              <div className="container-card">
                <div className="card-title">15+</div>
                <div className="card-description">Technologies</div>
              </div>
              <div className="container-card">
                <div className="card-title">5+</div>
                <div className="card-description">Major Projects</div>
              </div>
              <div className="container-card">
                <div className="card-title">2</div>
                <div className="card-description">Companies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};
