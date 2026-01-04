const projects = [
  {
    id: 1,
    title: "Ecommerce-iphones",
    description: "E-commerce React con catálogo dinámico, carrito persistente y checkout. Autenticación Firebase con verificación por email. SEO avanzado con metaetiquetas, Schema.org y Open Graph. Base de datos Firestore.",
    image: "/assets/ecommerce-iphones.jpeg",
    demoLink: "https://ecommerce-iphones.vercel.app/",
    codeLink: "https://github.com/matiregalo/Entrega-N-1-ecommerce",
    technologies: ["React", "Firebase (Auth + Firestore)",  "Context API", "Vite", "SEO",],
    external: false,
  },
  {
    id: 2,
    title: "Landing Page Responsive",
    description:
      "Frontend de Landing page responsive construida para prácticas de maquetación moderna.",
    image: "/assets/landing.jpg",
    demoLink: "/projects/landingpageresponsive",
    codeLink: "https://github.com/ManRio/landingPageResponsive",
    external: false,
  },
  {
    id: 3,
    title: "Jamar",
    description:
      "Aplicación de gestión empresarial con Deploy online para la promoción de un servicio de gestión de contenidos, redes sociales y páginas web.",
    image: "/assets/jamar.jpg",
    demoLink: "http://jamarmedia.es/inicio",
    codeLink: "https://github.com/ManRio/jamar",
    external: true,
  },
  {
    id: 4,
    title: "NewsReader",
    description:
      "Lector de noticias personalizadas por IA con perfil y favoritos. Consumo de API de noticias y generación de resúmenes con OpenAI.",
    image: "/assets/NewsReaderFeed.png",
    demoLink: "/projects/ProjectNewsReader",
    codeLink: "https://github.com/ManRio/newsreader",
    external: false,
  }
];

const getProjects = () => {
  return new Promise((resolve) => {
    resolve(projects);
  });
};

export { getProjects };
