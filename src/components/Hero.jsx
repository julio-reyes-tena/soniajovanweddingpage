import { weddingInfo } from "../data/weddingInfo";
import hero from "../assets/duck.avif";

function Hero() {
  return (
    <section
      id="home"
      className="hero section"
      style={{
        backgroundImage: `linear-gradient(rgba(255,250,247,0.7), rgba(255,250,247,0.9)), url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container hero-content">
        <p className="eyebrow">{weddingInfo.tagline}</p>

        <h1>{weddingInfo.coupleNames}</h1>

        <p className="hero-date">{weddingInfo.weddingDate}</p>

<p style={{marginBottom:"24px", fontSize:"1.2rem"}}>
  {Math.floor(
    (new Date("2027-06-20") - new Date()) /
    (1000 * 60 * 60 * 24)
  )} days to go
</p>

        <a href="#rsvp" className="button-primary">
          RSVP
        </a>
      </div>
    </section>
  );
}

export default Hero;