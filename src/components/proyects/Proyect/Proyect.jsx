const Proyect = ({ project, className, dataLabel }) => {
  return (
    <div className={className} data-label={dataLabel}>
      <div className="slide__content">
        <div className="slide__image-wrapper">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/logoMRTransparente.png";
            }}
          />
        </div>
        <div className="slide__info">
          <h3 className="slide__title">{project.title}</h3>
          <p className="slide__description">{project.description}</p>
          <div className="slide__links">
            <a
              href={project.demoLink}
              className="slide__btn slide__btn--demo"
              target={project.external ? "_blank" : "_self"}
              rel={project.external ? "noopener noreferrer" : undefined}
            >
              <span>Visit the website</span>
            </a>
            <a
              href={project.codeLink}
              className="slide__btn slide__btn--code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyect;