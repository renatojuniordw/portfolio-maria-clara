"use client";

import { Accordion, AccordionTab } from "primereact/accordion";
import styles from "@/assets/styles/FAQSlider.module.scss";
import { Divider } from "primereact/divider";
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
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      className={`${styles.faq} ${isVisible ? "revealVisible" : "reveal"}`}
      id="faq"
      aria-labelledby="faq-heading"
      ref={elementRef as any}
    >
      <header>
        <h2 id="faq-heading" className="section-title">
          Dúvidas Frequentes{" "}
          <span className={styles.lineBreak}>BPC/LOAS e INSS</span>
        </h2>
        <Divider />
      </header>
      <Accordion multiple>
        {faqItems.map((item, index) => (
          <AccordionTab key={index} header={item.header}>
            <p style={{ whiteSpace: "pre-line" }}>{item.content}</p>
          </AccordionTab>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQCollapse;
