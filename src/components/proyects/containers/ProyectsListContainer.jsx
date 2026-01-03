// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// import "./ProyectsListContainer.css";
// import { Helmet } from "react-helmet-async";

// const ProyectsListContainer = () => {
//   const [proyects, setProducts] = useState([]);
//   const location = useLocation();
//   const baseUrl = window.location.origin;
//   const currentUrl = `${baseUrl}${location.pathname}`;

//   const getProducts = async () => {
//     try {
//       let dataDb;
//       if (category) {
//         const q = query(productsRef, where("category", "==", category));
//         dataDb = await getDocs(q);
//       } else {
//         dataDb = await getDocs(productsRef);
//       }
//       const data = dataDb.docs.map((productDb) => {
//         return { id: productDb.id, ...productDb.data() };
//       });
//       setProducts(data);
//     } catch (error) {
//       setError({
//         message: category
//           ? `Error al cargar productos de la categoría ${category}`
//           : "No se encontraron productos",
//         code: category ? 500 : 404,
//       });
//     } finally {
//       setLoading(false);
//       if (onLoadingChange) {
//         onLoadingChange(false);
//       }
//     }
//   };
// const title =
//   category === "iphones-seminuevos"
//     ? "iPhones Seminuevos"
//     : category === "iphones-sellados"
//     ? "iPhones Sellados"
//     : "iPhones";
    
// const description =
//   category === "iphones-seminuevos"
//     ? "Explora nuestra selección de iPhones seminuevos de alta calidad. Teléfonos reacondicionados, revisados y con garantía. Encuentra tu iPhone al mejor precio en iMarket."
//     : category === "iphones-sellados"
//     ? "Descubre los mejores iPhones sellados originales. Dispositivos nuevos y sin abrir, directamente del fabricante. Compra tu iPhone nuevo con garantía oficial en iMarket."
//     : "Encuentra los mejores iPhones al mejor precio. iPhones sellados y seminuevos de alta calidad. Compra con confianza y recibe tu iPhone con garantía. Tu tienda online de confianza.";

//   const breadcrumbSchema = category ? {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Inicio",
//         "item": baseUrl
//       },
//       {
//         "@type": "ListItem",
//         "position": 2,
//         "name": title,
//         "item": currentUrl
//       }
//     ]
//   } : null;
    
//   useEffect(() => {
//     setLoading(true);
//     if (onLoadingChange) {
//       onLoadingChange(true);
//     }
//     getProducts();
//   }, [category]);

//   return (
//     <div className="item-list-container">
//       <Helmet>
//         <title>{title} | iMarket</title>
//         <meta name="description" content={description} />
//         <link rel="canonical" href={currentUrl} />
        
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content={currentUrl} />
//         <meta property="og:title" content={`${title} | iMarket`} />
//         <meta property="og:description" content={description} />
//         <meta property="og:site_name" content="iMarket" />
        
//         <meta name="twitter:card" content="summary" />
//         <meta name="twitter:url" content={currentUrl} />
//         <meta name="twitter:title" content={`${title} | iMarket`} />
//         <meta name="twitter:description" content={description} />
        
//         {breadcrumbSchema && (
//           <script type="application/ld+json">
//             {JSON.stringify(breadcrumbSchema)}
//           </script>
//         )}
//       </Helmet>
//       <div className="container">
//         {loading ? (
//           <Loader />
//         ) : error.hasError ? (
//           <Error />
//         ) : (
//           <ItemList products={products} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProyectsListContainer;
