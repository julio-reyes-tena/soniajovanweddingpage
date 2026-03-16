import { weddingInfo } from "../data/weddingInfo";

function Registry() {
  return (
    <section id="registry" className="section">
      <div className="container narrow">
        <h2>Registry</h2>

        <div className="card-grid two-col">
          {weddingInfo.registry.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="card registry-link"
            >
              <h3>{item.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Registry;