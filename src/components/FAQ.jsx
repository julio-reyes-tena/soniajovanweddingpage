import { weddingInfo } from "../data/weddingInfo";

function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container narrow">
        <h2>Preguntas Frecuentes</h2>

        <div className="faq-list">
          {weddingInfo.faq.map((item, index) => (
            <article key={index} className="card faq-item">
              <h3>{item.question}</h3>

              {item.answer && <p>{item.answer}</p>}

              {item.links && (
                <div className="faq-links">
                  {item.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="button-secondary"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;