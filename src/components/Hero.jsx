import { useEffect, useState } from "react";
import { weddingInfo } from "../data/weddingInfo";
import hero from "../assets/duck.avif";

function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const total =
      new Date(weddingInfo.weddingDateISO).getTime() - new Date().getTime();

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="hero section"
      style={{
        backgroundImage: `linear-gradient(rgba(255,250,247,0.55), rgba(255,250,247,0.85)), url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container hero-content">
        <p className="eyebrow">{weddingInfo.tagline}</p>

        <h1>{weddingInfo.coupleNames}</h1>

        <p className="hero-date">{weddingInfo.weddingDate}</p>

        <div className="countdown">
          <div>
            <span>{timeLeft.days}</span>
            <small>Days</small>
          </div>

          <div>
            <span>{timeLeft.hours}</span>
            <small>Hours</small>
          </div>

          <div>
            <span>{timeLeft.minutes}</span>
            <small>Minutes</small>
          </div>

          <div>
            <span>{timeLeft.seconds}</span>
            <small>Seconds</small>
          </div>
        </div>

        <a href="#rsvp" className="button-primary">
          RSVP
        </a>
      </div>
    </section>
  );
}

export default Hero;