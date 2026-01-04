const projects = [
  {
    id: 1,
    title: "StockIt",
    description:
      "Gestión de inventarios moderna para almacenes y tiendas. Control de stock, ventas y clientes.",
    image: "/assets/LogoStockIt.png",
    demoLink: "/projects/stockit",
    codeLink: "https://github.com/ManRio/StockIt",
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
  },
  {
    id: 5,
    title: "ORO Manager",
    description:
      "Plataforma web desarrollada durante las prácticas FCT para la gestión integral de empleados: recompensas, tareas, formación, chat grupal y más.",
    image: "/assets/OroManager.png",
    demoLink: "/projects/ProjectOroManager",
    codeLink: "https://github.com/ManRio/OroManager",
    external: false,
  },
  {
    id: 6,
    title: "FitTrack",
    description:
      "Aplicación de seguimiento de ejercicio con Angular. Llamadas a API de Ejercicios, noticias relacionadas y gestión del perfil de usuario para medir el progreso diario.",
    image: "/assets/FitTrack-Landing.png",
    demoLink: "/projects/ProjectFitTrack",
    codeLink: "https://github.com/ManRio/fittrack",
    external: false,
  },
  {
    id: 7,
    title: "Task Gamification",
    description:
      "Plataforma gamificada de gestión de tareas para alumnos y profesores. Back con Flask y front en Vue.js.",
    image: "/assets/landing_task_gamification.png",
    demoLink: "/projects/ProjectTaskGamification",
    codeLink: "https://github.com/ManRio/task_gamification",
    external: false,
  },
  {
    id: 8,
    title: "Single Page Application Products",
    description:
      "Single Page Application moderna enfocada en una página de producto para una marca ficticia de guantes de boxeo personalizados.",
    image: "/assets/spaproduct.png",
    demoLink: "https://spa-producto.vercel.app/",
    codeLink: "https://github.com/ManRio/spa-producto",
    external: true,
  },
];

const getProyects = () => {
  return new Promise((resolve) => {
    resolve(projects);
  });
};

export { getProyects };
