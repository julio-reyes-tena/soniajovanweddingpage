import { weddingInfo } from "../data/weddingInfo";

function Schedule() {
  return (
    <section id="schedule" className="section section-alt">
      <div className="container">
        <h2>Schedule</h2>

        <div className="card-grid">
          {weddingInfo.schedule.map((item, index) => (
            <article key={index} className="card">
              <p className="card-time">{item.time}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Schedule;