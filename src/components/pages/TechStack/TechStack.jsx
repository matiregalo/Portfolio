import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiDotnet,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiGit,
  SiGithub,
  SiFirebase,
  SiCypress,
  SiBlazor,
} from "react-icons/si";
import "./TechStack.css";

// Custom icons for technologies not available in react-icons
const JavaIcon = () => (
  <div
    className="tech-icon"
    style={{
      width: "2.5rem",
      height: "2.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#ED8B00",
    }}
  >
    ☕
  </div>
);

const CSharpIcon = () => (
  <svg
    className="tech-icon"
    viewBox="0 0 24 24"
    fill="#239120"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "2.5rem", height: "2.5rem" }}
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c.169.169.169.44 0 .609l-1.44 1.44c-.169.169-.44.169-.609 0l-1.44-1.44c-.169-.169-.169-.44 0-.609l1.44-1.44c.169-.169.44-.169.609 0l1.44 1.44zm-9.136 0c.169.169.169.44 0 .609l-1.44 1.44c-.169.169-.44.169-.609 0L5.04 8.769c-.169-.169-.169-.44 0-.609l1.44-1.44c.169-.169.44-.169.609 0l1.44 1.44zm4.568 0c.169.169.169.44 0 .609l-1.44 1.44c-.169.169-.44.169-.609 0L9.608 8.769c-.169-.169-.169-.44 0-.609l1.44-1.44c.169-.169.44-.169.609 0l1.44 1.44z" />
  </svg>
);

const TechStack = () => {
  const location = useLocation();
  const baseUrl = window.location.origin;
  const currentUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="techstack-container">
      <Helmet>
        <title>Tech Stack | Matías Regaló</title>
        <link rel="icon" type="image/png" href="/logoMRTransparente.png" />
        <meta
          name="description"
          content="Matías Regaló - Stack tecnológico completo: React, JavaScript, Node.js, Express, MongoDB, .NET, C#, Java y más tecnologías modernas para desarrollo Full Stack."
        />
        <link rel="canonical" href={currentUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="Tech Stack | Matías Regaló" />
        <meta
          property="og:description"
          content="Matías Regaló - Stack tecnológico completo: React, JavaScript, Node.js, Express, MongoDB, .NET, C#, Java y más tecnologías modernas para desarrollo Full Stack."
        />
        <meta property="og:site_name" content="Portfolio | Matías Regaló" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content="Tech Stack | Matías Regaló" />
        <meta
          name="twitter:description"
          content="Matías Regaló - Stack tecnológico completo: React, JavaScript, Node.js, Express, MongoDB, .NET, C#, Java y más tecnologías modernas para desarrollo Full Stack."
        />
      </Helmet>

      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <div className="techstack-content">
              <h2 className="techstack-title mb-5 text-center">
                Technology <span className="text-primary">Stack</span>
              </h2>

              {/* Technology Stack Carousel */}
              <div className="tech-stack-section">
                <div className="tech-carousel-wrapper">
                  <div className="tech-carousel">
                    <div className="tech-carousel-track">
                      <div className="tech-item">
                        <SiReact className="tech-icon" />
                        <span>React</span>
                      </div>
                      <div className="tech-item">
                        <SiJavascript className="tech-icon" />
                        <span>JavaScript</span>
                      </div>
                      <div className="tech-item">
                        <SiNodedotjs className="tech-icon" />
                        <span>Node.js</span>
                      </div>
                      <div className="tech-item">
                        <SiExpress className="tech-icon" />
                        <span>Express</span>
                      </div>
                      <div className="tech-item">
                        <SiMongodb className="tech-icon" />
                        <span>MongoDB</span>
                      </div>
                      <div className="tech-item">
                        <SiDotnet className="tech-icon" />
                        <span>.NET</span>
                      </div>
                      <div className="tech-item">
                        <CSharpIcon />
                        <span>C#</span>
                      </div>
                      <div className="tech-item">
                        <JavaIcon />
                        <span>Java</span>
                      </div>
                      <div className="tech-item">
                        <SiBootstrap className="tech-icon" />
                        <span>Bootstrap</span>
                      </div>
                      <div className="tech-item">
                        <SiHtml5 className="tech-icon" />
                        <span>HTML5</span>
                      </div>
                      <div className="tech-item">
                        <SiCss3 className="tech-icon" />
                        <span>CSS3</span>
                      </div>
                      <div className="tech-item">
                        <SiDocker className="tech-icon" />
                        <span>Docker</span>
                      </div>
                      <div className="tech-item">
                        <SiGit className="tech-icon" />
                        <span>Git</span>
                      </div>
                      <div className="tech-item">
                        <SiGithub className="tech-icon" />
                        <span>GitHub</span>
                      </div>
                      <div className="tech-item">
                        <SiFirebase className="tech-icon" />
                        <span>Firebase</span>
                      </div>
                      <div className="tech-item">
                        <SiCypress className="tech-icon" />
                        <span>Cypress</span>
                      </div>
                      <div className="tech-item">
                        <SiBlazor className="tech-icon" />
                        <span>Blazor</span>
                      </div>
                      {/* Duplicate for infinite loop */}
                      <div className="tech-item">
                        <SiReact className="tech-icon" />
                        <span>React</span>
                      </div>
                      <div className="tech-item">
                        <SiJavascript className="tech-icon" />
                        <span>JavaScript</span>
                      </div>
                      <div className="tech-item">
                        <SiNodedotjs className="tech-icon" />
                        <span>Node.js</span>
                      </div>
                      <div className="tech-item">
                        <SiExpress className="tech-icon" />
                        <span>Express</span>
                      </div>
                      <div className="tech-item">
                        <SiMongodb className="tech-icon" />
                        <span>MongoDB</span>
                      </div>
                      <div className="tech-item">
                        <SiDotnet className="tech-icon" />
                        <span>.NET</span>
                      </div>
                      <div className="tech-item">
                        <CSharpIcon />
                        <span>C#</span>
                      </div>
                      <div className="tech-item">
                        <JavaIcon />
                        <span>Java</span>
                      </div>
                      <div className="tech-item">
                        <SiBootstrap className="tech-icon" />
                        <span>Bootstrap</span>
                      </div>
                      <div className="tech-item">
                        <SiHtml5 className="tech-icon" />
                        <span>HTML5</span>
                      </div>
                      <div className="tech-item">
                        <SiCss3 className="tech-icon" />
                        <span>CSS3</span>
                      </div>
                      <div className="tech-item">
                        <SiDocker className="tech-icon" />
                        <span>Docker</span>
                      </div>
                      <div className="tech-item">
                        <SiGit className="tech-icon" />
                        <span>Git</span>
                      </div>
                      <div className="tech-item">
                        <SiGithub className="tech-icon" />
                        <span>GitHub</span>
                      </div>
                      <div className="tech-item">
                        <SiFirebase className="tech-icon" />
                        <span>Firebase</span>
                      </div>
                      <div className="tech-item">
                        <SiCypress className="tech-icon" />
                        <span>Cypress</span>
                      </div>
                      <div className="tech-item">
                        <SiBlazor className="tech-icon" />
                        <span>Blazor</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
