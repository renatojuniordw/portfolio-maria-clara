"use client";

import { useState } from "react";
import styles from "@/assets/styles/FAQSlider.module.scss";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqItems = [
  {
    header: "Nunca contribuí para o INSS, posso receber algum benefício?",
    content:
      "SIM. O BPC/LOAS garante um salário mínimo mensal para idosos acima de 65 anos ou pessoas com deficiência em situação de vulnerabilidade, mesmo que nunca tenham pago o INSS. " +
      "Nós avaliamos seu perfil detalhadamente para garantir que você tenha acesso a esse direito essencial.",
  },
  {
    header:
      "Como ter certeza de que vou receber o valor máximo na minha aposentadoria?",
    content:
      "Erros de cálculo do INSS são extremamente comuns. Com o Planejamento Previdenciário Estratégico, analisamos todo o seu histórico contributivo para garantir que você se aposente com o maior benefício possível, no menor tempo e sem perder dinheiro.",
  },
  {
    header: "Tive meu benefício negado pelo INSS. O que devo fazer agora?",
    content:
      "Não desista. Negativas são frequentes, mas muitas vezes injustas. Com auxílio jurídico especializado, podemos entrar com recursos ou ações judiciais para reverter a decisão e, em muitos casos, garantir o pagamento de todos os valores retroativos desde o dia do seu pedido.",
  },
  {
    header: "Quanto tempo leva para conseguir um auxílio ou pensão?",
    content:
      "O tempo varia conforme o caso, mas a atuação de um advogado especialista acelera o processo e evita erros na documentação que causam atrasos de meses. Nossa missão é destravar o sistema e garantir que o seu benefício chegue o quanto antes.",
  },
];

const FAQCollapse = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>(0.2);
  const [openItems, setOpenItems] = useState<number[]>([0]);

  function toggleItem(index: number) {
    setOpenItems((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  }

  return (
    <section
      className={`${styles.faq} ${isVisible ? "revealVisible" : "reveal"}`}
      id="faq"
      aria-labelledby="faq-heading"
      ref={elementRef}
    >
      <header className={styles.header}>
        <p className={styles.eyebrow}>Sem juridiques de fachada</p>
        <h2 id="faq-heading" className="section-title">
          Perguntas que chegam quando a renda trava e a urgencia aperta.
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

export default FAQCollapse;
