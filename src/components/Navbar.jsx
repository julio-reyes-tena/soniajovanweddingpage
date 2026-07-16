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
          <a href="/#story">Story</a>
          <a href="/#schedule">Schedule</a>
          <a href="/#venue">Venue</a>
          <Link to="/gallery">Gallery</Link>
          <a href="/#rsvp">RSVP</a>
          <a href="/#registry">Registry</a>
          <a href="/#faq">FAQ</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;