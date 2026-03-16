import { weddingInfo } from "../data/weddingInfo";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="container navbar-inner">
        <a href="#home" className="brand">
          {weddingInfo.coupleNames}
        </a>

        <div className="nav-links">
          <a href="#story">Story</a>
          <a href="#schedule">Schedule</a>
          <a href="#venue">Venue</a>
          <a href="#rsvp">RSVP</a>
          <a href="#registry">Registry</a>
          <a href="#faq">FAQ</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;