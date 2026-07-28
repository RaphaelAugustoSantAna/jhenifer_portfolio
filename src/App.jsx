import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </>
  );
}

export default App;
