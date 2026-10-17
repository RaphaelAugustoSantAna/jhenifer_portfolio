import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import Sobre from "./pages/Sobre";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
