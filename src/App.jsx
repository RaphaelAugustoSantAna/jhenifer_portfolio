import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Servicos from "./pages/servicos";
import Sobre from "./pages/sobre";
import Contato from "./pages/contato";

function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  )
}

export default App;
