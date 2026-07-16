import { weddingInfo } from "../data/weddingInfo";

function Story() {
  return (
    <section id="story" className="section">
      <div className="container narrow">
        <h2>{weddingInfo.story.title}</h2>

        <article className="card story-card">
          <div className="story-text">
            {weddingInfo.story.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default Story;