import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import NavBar from "./components/layout/NavBar/NavBar";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
              <NavBar />
              <Routes>
             <Route path="/home" element={<SobreNosotros />} />
              </Routes>
      </BrowserRouter>

    </HelmetProvider>
  );
}

export default App;
