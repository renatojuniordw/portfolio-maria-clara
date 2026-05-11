"use client";

import { useState, useCallback } from "react";
import styles from "@/assets/styles/FAQSlider.module.scss";
import { FAQ_PRINCIPAL } from "@/lib/faqs";

const faqItems = FAQ_PRINCIPAL.map((item) => ({
  header: item.pergunta,
  content: item.resposta,
}));

const FAQSlider = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = useCallback((index: number) => {
    setOpenItems((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  }, []);

  return (
    <section
      className={`${styles.faq} reveal`}
      id="faq"
      aria-labelledby="faq-heading"
    >
      <header className={styles.header}>
        <p className={styles.eyebrow}>Sem juridiquês de fachada</p>
        <h2 id="faq-heading" className="section-title">
          Perguntas que chegam quando a renda trava e a urgência aperta.
        </h2>
        <span className="section-divider" aria-hidden="true" />
      </header>
      <div className={styles.items}>
        {faqItems.map((item, index) => (
          <article key={item.header} className={styles.item}>
            <button
              type="button"
              className={styles.question}
              aria-expanded={openItems.includes(index)}
              aria-controls={`faq-panel-${index}`}
              onClick={() => toggleItem(index)}
            >
              <span>{item.header}</span>
              <span className={styles.symbol} aria-hidden="true">
                {openItems.includes(index) ? "-" : "+"}
              </span>
            </button>
            <div
              id={`faq-panel-${index}`}
              className={`${styles.answer} ${openItems.includes(index) ? styles.answerOpen : ""}`}
            >
              <p>{item.content}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FAQSlider;
