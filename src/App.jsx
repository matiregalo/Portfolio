import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import NavBar from "./components/layout/NavBar/NavBar";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import TechStack from "./components/pages/TechStack/TechStack";
import Contact from "./components/pages/Contact/Contact";
import ProyectsListContainer from "./components/proyects/containers/ProyectsListContainer";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/proyects" element={<ProyectsListContainer />} />
          <Route path="/techStack" element={<TechStack />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
