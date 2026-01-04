import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getProjects } from "../../../data/projects";
import ProjectList from "../ProjectList/ProjectList";
import { useLocation } from "react-router-dom";

const ProjectsListContainer = () => {
  const [projects, setProjects] = useState([]);
  const location = useLocation();
  const baseUrl = window.location.origin;
  const currentUrl = `${baseUrl}${location.pathname}`;

const title = "Projects"
    
const description = "Explore the recent projects developed by Matías Regaló";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": currentUrl
      }
    ]
  };

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
    });
  }, []);


  return (
    <div>
      <Helmet>
        <title>{title} | Matías Regaló</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={currentUrl} />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={`${title} | Matías Regaló`} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Portfolio | Matías Regaló" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={`${title} | Matías Regaló`} />
        <meta name="twitter:description" content={description} />
        
        {breadcrumbSchema && (
          <script type="application/ld+json">
            {JSON.stringify(breadcrumbSchema)}
          </script>
        )}
      </Helmet>
         <ProjectList projects={projects} />
    </div>
  );
};

export default ProjectsListContainer;
