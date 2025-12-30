import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import NavBar from "./components/layout/NavBar/NavBar";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import TechStack from "./components/pages/TechStack/TechStack";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/techStack" element={<TechStack />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
