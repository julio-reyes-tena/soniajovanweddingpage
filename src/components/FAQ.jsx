import { weddingInfo } from "../data/weddingInfo";

function FAQ() {
  return (
    <section id="faq" className="section section-alt">
      <div className="container narrow">
        <h2>Preguntas Frequentes</h2>

        <div className="faq-list">
          {weddingInfo.faq.map((item, index) => (
            <article key={index} className="card faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;