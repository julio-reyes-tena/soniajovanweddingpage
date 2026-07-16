import { weddingInfo } from "../data/weddingInfo";

function Venue() {
  return (
    <section id="venue" className="section">
      <div className="container narrow">
        <h2>Venue</h2>

        <div className="venue-list">
          {weddingInfo.venues.map((venue, index) => (
            <div className="card venue-card" key={index}>
              <p className="venue-type">{venue.type}</p>

              <h3>{venue.name}</h3>

              <p>{venue.address}</p>

              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                Open Map
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Venue;