import Proyect from "../Proyect/Proyect";
import "./ProyectList.css";

const ProyectList = ({ proyects }) => {
  return (
    <div className="itemlist">
      {proyects.map((proyect) => (
            <Proyect proyect={proyect} key={proyect.id} />
      ))}
    </div>
  );
};

export default ProyectList;
