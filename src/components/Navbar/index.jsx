import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <nav>
      <div className="container">
        <Link to="/" className="logo-button">
          <div className="logo">
            <div className="logo-icon">JA</div>
            <div>
              <div>Jhenifer</div>
            </div>
          </div>
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
        >
          {menuAberto ? "x" : "☰"}
        </button>
        <ul className={`nav-links ${menuAberto ? "active" : ""}`}>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
