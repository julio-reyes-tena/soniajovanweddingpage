import { weddingInfo } from "../data/weddingInfo";

function Venue() {
  return (
    <section id="venue" className="section">
      <div className="container narrow">
        <h2>Venue</h2>

        <div className="card venue-card">
          <h3>{weddingInfo.venueName}</h3>
          <p>{weddingInfo.venueAddress}</p>

          <a
            href={weddingInfo.venueMapUrl}
            target="_blank"
            rel="noreferrer"
            className="button-secondary"
          >
            Open Map
          </a>
        </div>
      </div>
    </section>
  );
}

export default Venue;