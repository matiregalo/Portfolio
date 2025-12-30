import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import profileImage from "../../../assets/matiasregaloimagen.jpg";

import "./About.css";



const About = () => {
  const location = useLocation();
  const baseUrl = window.location.origin;
  const currentUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="about-container">
      <Helmet>
        <title>About | Matías Regaló</title>
        <link rel="icon" type="image/png" href="/logoMRTransparente.png" />
        <meta
          name="description"
          content="Matías Regaló - Desarrollador web especializado en desarrollo de software a medida, aplicaciones web modernas y soluciones tecnológicas personalizadas. Portfolio profesional con proyectos destacados."
        />
        <link rel="canonical" href={currentUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="About | Matías Regaló" />
        <meta
          property="og:description"
          content="Matías Regaló - Desarrollador web especializado en desarrollo de software a medida, aplicaciones web modernas y soluciones tecnológicas personalizadas. Portfolio profesional con proyectos destacados."
        />
        <meta property="og:site_name" content="Portfolio | Matías Regaló" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content="About | Matías Regaló" />
        <meta
          name="twitter:description"
          content="Matías Regaló - Desarrollador web especializado en desarrollo de software a medida, aplicaciones web modernas y soluciones tecnológicas personalizadas. Portfolio profesional con proyectos destacados."
        />
      </Helmet>

      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-5 mb-4 mb-md-0">
            <div className="about-image-wrapper">
              <img
                src={profileImage}
                alt="Matías Regaló - Full Stack Developer"
                className="about-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>

          <div className="col-lg-8 col-md-7">
            <div className="about-content">
              <h2 className="about-title mb-4">
                About <span className="text-primary">Me</span>
              </h2>
              
              <div className="about-text-section">
                <div className="about-paragraph mb-4">
                  <p className="text-dark">
                    I am an advanced Systems Engineering student (3rd year / 5th
                    semester at ORT) specializing in Full Stack development. I
                    am an expert in <strong>React</strong>, <strong>JavaScript</strong>,{" "}
                    <strong>CSS</strong>, <strong>Bootstrap</strong>,{" "}
                    <strong>Node.js</strong>, <strong>Express.js</strong>,<strong> .NET</strong>, <strong>SQL</strong> and{" "}
                    <strong>MongoDB</strong>. I hold certifications in{" "}
                    <strong>React</strong> and <strong>Backend with Node.js</strong> (recognized as one of the top 10 best students in both courses), and my experience includes projects implementing{" "}
                    <strong>WebSockets</strong>, <strong>JWT</strong>,{" "}
                    <strong>microservices</strong>, and <strong>Docker</strong>{" "}
                    deployments. I am a Full Stack Developer Jr passionate about
                    creating digital innovation experiences, with +2 years of
                    experience creating scalable solutions and user-centered
                    applications.
                  </p>
                </div>
                <div className="about-paragraph mb-4">
                  <h4 className="h6 fw-semibold mb-2 text-primary">
                    Technical Experience
                  </h4>
                  <p className="text-dark mb-2">
                    My experience includes <strong>Frontend</strong> development
                    with React, JavaScript (ES6+), HTML5, CSS, Bootstrap,
                    Blazor, and Java Swing – designing and building interactive
                    and responsive user interfaces with reusable components. In{" "}
                    <strong>Backend</strong>, I work with Node.js, Express.js,
                    Java, C# (.NET), RESTful APIs, implementing server
                    architecture, JWT authentication, WebSockets, and
                    microservices.
                  </p>
                  <p className="text-dark mb-2">
                    For <strong>Databases</strong>, I have experience with
                    MongoDB (Mongoose), SQL Server, Oracle SQL Developer, and
                    Firebase/Firestore – including schema design, optimized
                    queries, relationships (populate), and indexing. I apply{" "}
                    <strong>Clean Code</strong>, <strong>SOLID principles</strong>,{" "}
                    <strong>MVC architecture</strong>, and <strong>design patterns</strong> (GRASP/GoF) to create maintainable code and scalable architectures.
                  </p>
                  <p className="text-dark mb-0">
                    I am proficient in <strong>unit, integration, and end-to-end testing</strong> with{" "}
                    <strong>Cypress</strong>, following TDD practices. I also
                    use <strong>Git/GitHub</strong> for version control and{" "}
                    <strong>Docker</strong> for application containerization and
                    deployment. I specialize in creating maintainable and
                    scalable solutions that follow best practices and industry
                    standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
