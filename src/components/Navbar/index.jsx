import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="container">
        <Link to="/"><div className="logo">
          <div className="logo-icon">JA</div>
          <div>
            <div>Jhenifer</div>
          </div>
        </div></Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
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
