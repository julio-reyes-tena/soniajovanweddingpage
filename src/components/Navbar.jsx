import { useState } from "react";
import { Link } from "react-router";
import { weddingInfo } from "../data/weddingInfo";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="container navbar-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          {weddingInfo.coupleNames}
        </Link>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <div className="nav-dropdown">
            <Link
              to="/"
              className="nav-dropdown-button"
              onClick={closeMenu}
            >
              Página Principal
            </Link>

            <div className="nav-dropdown-menu">
              <a href="/#story" onClick={closeMenu}>
                Mensaje de los Novios
              </a>
              <a href="/#schedule" onClick={closeMenu}>
                Programa
              </a>
              <a href="/#venue" onClick={closeMenu}>
                Evento
              </a>
            </div>
          </div>

          <Link to="/information" onClick={closeMenu}>
            Información
          </Link>

          <Link to="/gallery" onClick={closeMenu}>
            Galería
          </Link>

          <Link to="/faq" onClick={closeMenu}>
            Preguntas Frecuentes
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;