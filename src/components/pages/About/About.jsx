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
          content="Matías Regaló - Full Stack Developer Jr y estudiante avanzado de Ingeniería en Sistemas (ORT). Especializado en React, Node.js, .NET, MongoDB y tecnologías modernas. Certificado en React y Backend con Node.js (top 10 estudiantes). +2 años de experiencia creando soluciones escalables, aplicando Clean Code, SOLID, arquitectura MVC y patrones de diseño. Experto en desarrollo Frontend y Backend, bases de datos, testing con Cypress, y despliegue con Docker."
        />
        <link rel="canonical" href={currentUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="About | Matías Regaló" />
        <meta
          property="og:description"
          content="Matías Regaló - Full Stack Developer Jr y estudiante avanzado de Ingeniería en Sistemas (ORT). Especializado en React, Node.js, .NET, MongoDB y tecnologías modernas. Certificado en React y Backend con Node.js (top 10 estudiantes). +2 años de experiencia creando soluciones escalables, aplicando Clean Code, SOLID, arquitectura MVC y patrones de diseño. Experto en desarrollo Frontend y Backend, bases de datos, testing con Cypress, y despliegue con Docker."
        />
        <meta property="og:site_name" content="Portfolio | Matías Regaló" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content="About | Matías Regaló" />
        <meta
          name="twitter:description"
          content="Matías Regaló - Full Stack Developer Jr y estudiante avanzado de Ingeniería en Sistemas (ORT). Especializado en React, Node.js, .NET, MongoDB y tecnologías modernas. Certificado en React y Backend con Node.js (top 10 estudiantes). +2 años de experiencia creando soluciones escalables, aplicando Clean Code, SOLID, arquitectura MVC y patrones de diseño. Experto en desarrollo Frontend y Backend, bases de datos, testing con Cypress, y despliegue con Docker."
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
                    am an expert in <strong>React</strong>,{" "}
                    <strong>JavaScript</strong> (ES6+), <strong>HTML5</strong>,{" "}
                    <strong>CSS</strong>, <strong>Bootstrap</strong>,{" "}
                    <strong>Node.js</strong>, <strong>Express.js</strong>,{" "}
                    <strong>Java</strong>, <strong>C# (.NET)</strong>,{" "}
                    <strong>SQL</strong>, and <strong>MongoDB</strong>. I hold
                    certifications in <strong>React</strong> and{" "}
                    <strong>Backend with Node.js</strong> (recognized as one of
                    the top 10 best students in both courses), and my experience
                    includes projects implementing <strong>RESTful APIs</strong>
                    , <strong>WebSockets</strong>, <strong>JWT</strong>{" "}
                    authentication, <strong>microservices</strong>, and{" "}
                    <strong>Docker</strong> deployments.
                  </p>
                  <p className="text-dark mb-2">
                    In <strong>Frontend</strong>, I design and build interactive
                    and responsive user interfaces with reusable components. In{" "}
                    <strong>Backend</strong>, I implement server architecture
                    and scalable solutions. For <strong>Databases</strong>, I
                    have experience with MongoDB (Mongoose), SQL Server, Oracle
                    SQL Developer, and Firebase/Firestore – including schema
                    design, optimized queries, and indexing.
                  </p>
                  <p className="text-dark mb-0">
                    I apply <strong>Clean Code</strong>,{" "}
                    <strong>SOLID principles</strong>,{" "}
                    <strong>MVC architecture</strong>, and{" "}
                    <strong>design patterns</strong> (GRASP/GoF) to create
                    maintainable code. I am proficient in{" "}
                    <strong>testing</strong> with <strong>Cypress</strong>{" "}
                    following TDD practices, use <strong>Git/GitHub</strong> for
                    version control, and specialize in creating scalable
                    solutions that follow best practices and industry standards.
                    I am a Full Stack Developer Jr passionate about creating
                    digital innovation experiences, with +2 years of experience
                    creating user-centered applications.
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
