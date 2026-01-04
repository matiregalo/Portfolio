import { useEffect, useState } from "react";

import { getProjects } from "../../../data/projects";
import ProjectList from "../ProjectList";

const ProjectsListContainer = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
    });
  }, []);
  return <ProjectList projects={projects} />;
};

export default ProjectsListContainer;
