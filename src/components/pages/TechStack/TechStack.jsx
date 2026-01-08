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
  SiVite,
  SiJest,
  SiLinux,
  SiC,
  SiMysql,
  SiCplusplus,
  SiOracle,
} from "react-icons/si";
import "./TechStack.css";

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
        <meta property="og:site_name" content="Tech Stack | Matías Regaló" />

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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 128 128"
                          className="tech-icon csharp-svg"
                        >
                          <path
                            fill="currentColor"
                            d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
                            opacity="0.8"
                          />
                          <path
                            fill="currentColor"
                            d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
                          />
                          <path
                            fill="#fff"
                            d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"
                          />
                        </svg>
                        <span>C#</span>
                      </div>
                      <div className="tech-item">
                        <img
                          src="/icons/java.png"
                          alt="Java"
                          className="tech-icon tech-icon-img"
                        />
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
                      <div className="tech-item">
                        <SiVite className="tech-icon" />
                        <span>Vite</span>
                      </div>
                      <div className="tech-item">
                        <SiJest className="tech-icon" />
                        <span>Jest</span>
                      </div>
                      <div className="tech-item">
                        <SiLinux className="tech-icon" />
                        <span>Linux</span>
                      </div>
                      <div className="tech-item">
                        <SiC className="tech-icon" />
                        <span>C</span>
                      </div>
                      <div className="tech-item">
                        <SiMysql className="tech-icon" />
                        <span>MySQL</span>
                      </div>
                      <div className="tech-item">
                        <SiCplusplus className="tech-icon" />
                        <span>C++</span>
                      </div>
                      <div className="tech-item">
                        <SiOracle className="tech-icon" />
                        <span>Oracle</span>
                      </div>
                      <div className="tech-item">
                        <img
                          src="/icons/sql-server.png"
                          alt="SQL Server"
                          className="tech-icon tech-icon-img"
                        />
                        <span>SQL Server</span>
                      </div>
                      <div className="tech-item">
                        <img
                          src="/icons/azure.png"
                          alt="Azure"
                          className="tech-icon tech-icon-img"
                        />
                        <span>Azure</span>
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 128 128"
                          className="tech-icon csharp-svg"
                        >
                          <path
                            fill="currentColor"
                            d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
                            opacity="0.8"
                          />
                          <path
                            fill="currentColor"
                            d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
                          />
                          <path
                            fill="#fff"
                            d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"
                          />
                        </svg>
                        <span>C#</span>
                      </div>
                      <div className="tech-item">
                        <img
                          src="/icons/java.png"
                          alt="Java"
                          className="tech-icon tech-icon-img"
                        />
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
                      <div className="tech-item">
                        <SiVite className="tech-icon" />
                        <span>Vite</span>
                      </div>
                      <div className="tech-item">
                        <SiJest className="tech-icon" />
                        <span>Jest</span>
                      </div>
                      <div className="tech-item">
                        <SiLinux className="tech-icon" />
                        <span>Linux</span>
                      </div>
                      <div className="tech-item">
                        <SiC className="tech-icon" />
                        <span>C</span>
                      </div>
                      <div className="tech-item">
                        <SiMysql className="tech-icon" />
                        <span>MySQL</span>
                      </div>
                      <div className="tech-item">
                        <SiCplusplus className="tech-icon" />
                        <span>C++</span>
                      </div>
                      <div className="tech-item">
                        <SiOracle className="tech-icon" />
                        <span>Oracle</span>
                      </div>
                      <div className="tech-item">
                        <img
                          src="/icons/sql-server.png"
                          alt="SQL Server"
                          className="tech-icon tech-icon-img"
                        />
                        <span>SQL Server</span>
                      </div>
                      <div className="tech-item">
                        <img
                          src="/icons/azure.png"
                          alt="Azure"
                          className="tech-icon tech-icon-img"
                        />
                        <span>Azure</span>
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
