import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import NavBar from "./components/layout/NavBar/NavBar";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
              <NavBar />
              <Routes>
             <Route path="/" element={<Home />} />
              </Routes>
      </BrowserRouter>

    </HelmetProvider>
  );
}

export default App;
