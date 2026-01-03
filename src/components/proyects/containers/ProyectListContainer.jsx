import { useState} from "react";
import { useLocation  } from "react-router-dom";

import ProyectList from "../../ProyectList/ProyectList.jsx";
import "./ProyectListContainer.css";
import { Helmet } from "react-helmet-async";

const ProyectListContainer = () => {
  const [proyects, setProyects] = useState([]);
  const location = useLocation();
  const baseUrl = window.location.origin;
  const currentUrl = `${baseUrl}${location.pathname}`;

  const getProyects = async () => {
    try {
      let dataDb;
       
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      setProyects(data);
    } catch (error) {
        console.log(error.message)
    }
  };
const title =
   "iphones-seminuevos"
const description =
  "iphones-seminuevos"
    

  const breadcrumbSchema =  {
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
    


  return (
    <div className="item-list-container">
      <Helmet>
        <title>{title} | iMarket</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={currentUrl} />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={`${title} | iMarket`} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="iMarket" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={`${title} | iMarket`} />
        <meta name="twitter:description" content={description} />
        
        {breadcrumbSchema && (
          <script type="application/ld+json">
            {JSON.stringify(breadcrumbSchema)}
          </script>
        )}
      </Helmet>
      <div className="container">
          <ItemList products={proyects} />
      </div>
    </div>
  );
};

export default ProyectListContainer;
