import "./projects.css";
import { useState, useRef, useEffect } from "react";

const ProyectList = ({ projects }) => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const scrollWidth = carousel.scrollWidth;
      const clientWidth = carousel.clientWidth;

      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      // Detectar slide actual con mejor precisión
      const slides = carousel.querySelectorAll('.carousel__slide');
      if (slides.length === 0) return;
      
      // Centro del viewport
      const viewportCenter = scrollLeft + clientWidth / 2;
      
      // Casos extremos: si estamos al inicio o al final
      if (scrollLeft <= 5) {
        setCurrentSlide(0);
        return;
      }
      
      if (scrollLeft >= scrollWidth - clientWidth - 5) {
        setCurrentSlide(slides.length - 1);
        return;
      }
      
      // Buscar el slide más cercano al centro
      let closestIndex = 0;
      let closestDistance = Infinity;
      
      slides.forEach((slide, index) => {
        const slideLeft = slide.offsetLeft;
        const slideWidth = slide.offsetWidth;
        const slideCenter = slideLeft + slideWidth / 2;
        const distance = Math.abs(viewportCenter - slideCenter);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      
      setCurrentSlide(closestIndex);
    };

    carousel.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Recalcular cuando cambie el tamaño de la ventana
    const handleResize = () => {
      setTimeout(handleScroll, 100);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      carousel.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSlide = (index) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slides = carousel.querySelectorAll('.carousel__slide');
    const targetSlide = slides[index];
    
    if (!targetSlide) return;
    
    const carouselWidth = carousel.offsetWidth;
    const slideLeft = targetSlide.offsetLeft;
    const slideWidth = targetSlide.offsetWidth;
    
    // Centrar el slide
    const scrollPosition = slideLeft - (carouselWidth / 2) + (slideWidth / 2);
    
    carousel.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    const newIndex = Math.max(0, currentSlide - 1);
    scrollToSlide(newIndex);
  };

  const scrollRight = () => {
    const newIndex = Math.min(projects.length - 1, currentSlide + 1);
    scrollToSlide(newIndex);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title mb-3">Proyectos</h2>
          <p className="section-lead">
            Explora mi portafolio de trabajos y proyectos realizados
          </p>
        </div>

        <div className="carousel-wrapper">
          {/* Botones de navegación */}
          <button
            className={`carousel-nav carousel-nav--left ${!canScrollLeft ? "carousel-nav--disabled" : ""}`}
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Anterior proyecto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            className={`carousel-nav carousel-nav--right ${!canScrollRight ? "carousel-nav--disabled" : ""}`}
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Siguiente proyecto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* Carrusel con scroll-snap */}
          <div
            ref={carouselRef}
            className="carousel carousel--scroll-buttons carousel--scroll-markers carousel--inert"
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="carousel__slide"
                data-label={`Slide ${index + 1}`}
              >
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
                        rel={
                          project.external ? "noopener noreferrer" : undefined
                        }
                      >
                        <span>Ver Demo</span>
                      </a>
                      <a
                        href={project.codeLink}
                        className="slide__btn slide__btn--code"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Código</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores de posición (dots) */}
          <div className="carousel-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${currentSlide === index ? "carousel-dot--active" : ""}`}
                onClick={() => scrollToSlide(index)}
                aria-label={`Ir al proyecto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProyectList;
