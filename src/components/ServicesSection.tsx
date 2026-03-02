"use client";

import { Divider } from "primereact/divider";
import styles from "@/assets/styles/ServicesSection.module.scss";

const ServicesSection = () => {
  const services = [
    {
      title: "BPC / LOAS (Idosos e Deficientes)",
    },
    {
      title: "Aposentadorias (Idade, Tempo e Especial)",
    },
    {
      title: "Auxílio-Doença e Pensão por Morte",
    },
    {
      title: "Planejamento Previdenciário Estratégico",
    },
  ];

  return (
    <section
      className={styles.services}
      id="servicos"
      aria-labelledby="services-heading"
      role="region"
    >
      <header>
        <h2 id="services-heading" className="section-title">
          Soluções para{" "}
          <span aria-hidden="true">
            <br />
          </span>
          seu benefício
        </h2>
        <Divider />
      </header>
      <div className={styles.grid}>
        <div className={styles.text}>
          <p>
            Sou especializada em Direito Previdenciário, oferecendo um
            atendimento humanizado e estratégico para garantir seus direitos
            junto ao INSS.
          </p>
          <p className={styles.highlight}>
            <strong>Teve seu benefício negado?</strong> Não desista. Analisamos
            seu caso detalhadamente para reverter decisões injustas e garantir o
            que é seu por direito.
          </p>
        </div>
        <ul className={styles.list}>
          {services.map((service, index) => (
            <li key={index} className={styles.item}>
              {service.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
