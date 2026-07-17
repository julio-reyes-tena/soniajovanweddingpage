import { useEffect, useState } from "react";
import { weddingInfo } from "../data/weddingInfo";
import hero from "../assets/sj3.jpeg";

function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const total =
      new Date(weddingInfo.weddingDateISO).getTime() - new Date().getTime();

    const safeTotal = Math.max(total, 0);

    const seconds = Math.floor((safeTotal / 1000) % 60);
    const minutes = Math.floor((safeTotal / 1000 / 60) % 60);
    const hours = Math.floor((safeTotal / (1000 * 60 * 60)) % 24);
    const days = Math.floor(safeTotal / (1000 * 60 * 60 * 24));

    return { total: safeTotal, days, hours, minutes, seconds };
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
  style={{ "--hero-mobile-image": `url(${hero})` }}
>
      <div className="container hero-layout">
        <div className="hero-image-wrap">
          <img
            src={hero}
            alt="Sonia and Jovan"
            className="hero-image"
          />
        </div>

        <div className="hero-content">
          <p className="eyebrow">{weddingInfo.tagline}</p>

          <h1>{weddingInfo.coupleNames}</h1>

          <p className="hero-date">{weddingInfo.weddingDate}</p>

          <div className="countdown">
            <div>
              <span>{timeLeft.days}</span>
              <small>Días</small>
            </div>

            <div>
              <span>{timeLeft.hours}</span>
              <small>Horas</small>
            </div>

            <div>
              <span>{timeLeft.minutes}</span>
              <small>Minutos</small>
            </div>

            <div>
              <span>{timeLeft.seconds}</span>
              <small>Segundos</small>
            </div>
          </div>

          
          
        </div>
      </div>
    </section>
  );
}

export default Hero;