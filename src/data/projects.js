const projects = [
  {
    id: 1,
    title: "Catalog Management System",
    description:
      "Catalog management system with automatic duplicate detection via similarity analysis. Features CRUD operations, smart alerts, merging/discarding, full traceability, and stock/pricing optimization for businesses with  manual entries.",
    image: "/assets/Catalog Management System.jpeg",
    demoLink:
      "https://neardupfinder-web-dyewecbvd2g0fkev.brazilsouth-01.azurewebsites.net/login",
    codeLink:
      "https://github.com/matiregalo/Sistema-de-gestion-de-catalogo-de-items-NearDupFinder",
    technologies: [
      "Blazor",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "Azure",
      "Docker",
    ],
    external: false,
  },
  {
    id: 2,
    title: "Ecommerce-iphones",
    description:
      "React e-commerce platform with dynamic catalog, persistent cart, and checkout. Firebase authentication with email verification. Advanced SEO with meta tags, Schema.org, and Open Graph. Firestore database.",
    image: "/assets/ecommerce-iphones.jpeg",
    demoLink: "https://ecommerce-iphones.vercel.app/",
    codeLink: "https://github.com/matiregalo/Entrega-N-1-ecommerce",
    technologies: [
      "React",
      "Firebase (Auth + Firestore)",
      "Context API",
      "Vite",
      "SEO",
    ],
    external: false,
  },
  {
    id: 3,
    title: "E-commerce API Backend",
    description:
      "E-commerce backend built with Node.js and Express. RESTful API for products and shopping carts with pagination, filters, and sorting. MongoDB with Mongoose. MVC architecture, Handlebars views, and comprehensive testing.",
    image: "/assets/backend-products-api-regalo.jpeg",
    demoLink: "https://backend-products-api-regalo.vercel.app/",
    codeLink:
      "https://github.com/matiregalo/Entrega-N-1-DesarrolloServidor.git",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Handlebars",
      "REST API",
    ],
    external: false,
  },
  {
    id: 4,
    title: "Library management system",
    description:
      "Java bookstore management system: register publishers, genres, authors, books; process sales; check stock; upload photos; export CSV. Features persistent data & modern Windows-style interface with search capabilities.",
    image: "/assets/Library management system.jpeg",
    demoLink: "https://youtu.be/gipJ6M7KNak",
    codeLink:
      "https://github.com/matiregalo/Sistema-de-gestion-de-una-libreria",
    technologies: ["Java", "Java Swing"],
    external: true,
  },
];

const getProjects = () => {
  return new Promise((resolve) => {
    resolve(projects);
  });
};

export { getProjects };
