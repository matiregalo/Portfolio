import { useEffect, useState } from "react";

import { getProyects } from "../../data/proyects";
import ProyectList from "./ProyectList";

const ProyectsListContainer = () => {
  const [projects, setProyects] = useState([]);

  useEffect(() => {
    getProyects().then((data) => {
      setProyects(data);
    });
  }, []);
  return <ProyectList projects={projects} />;
};

export default ProyectsListContainer;
