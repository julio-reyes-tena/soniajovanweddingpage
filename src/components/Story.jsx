import { weddingInfo } from "../data/weddingInfo";

function Story() {
  return (
    <section id="story" className="section">
      <div className="container narrow">
        <h2>{weddingInfo.story.title}</h2>

        <div className="story-text">
          {weddingInfo.story.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Story;