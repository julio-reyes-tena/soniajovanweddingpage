import { Link } from "react-router";
import { weddingInfo } from "../data/weddingInfo";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="container navbar-inner">
        <Link to="/" className="brand">
          {weddingInfo.coupleNames}
        </Link>

        <div className="nav-links">
        
<div className="nav-dropdown">
  <Link to="/" className="nav-dropdown-button">
    Página Principal
  </Link>

  <div className="nav-dropdown-menu">
    <a href="/#story">Mensaje de los Novios</a>
    <a href="/#schedule">Cronograma</a>
    <a href="/#venue">Evento</a>
  </div>

            
          </div>

          <Link to="/gallery">Gallería</Link>
          <Link to="/faq">Preguntas Frequentes</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;