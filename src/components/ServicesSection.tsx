"use client";

import { Divider } from "primereact/divider";
import styles from "@/assets/styles/ServicesSection.module.scss";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ServicesSection = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);
  const services = [
    {
      title: "BPC / LOAS",
      subtitle: "(Idosos e Deficientes)",
      icon: "pi-users",
    },
    {
      title: "Aposentadorias",
      subtitle: "(Idade, Tempo e Especial)",
      icon: "pi-calendar",
    },
    {
      title: "INSS",
      subtitle: "Auxílio-Doença e Pensão por Morte",
      icon: "pi-shield",
    },
    {
      title: "Planejamento",
      subtitle: "Estratégico Previdenciário",
      icon: "pi-chart-line",
    },
  ];

  return (
    <section
      className={`${styles.services} ${isVisible ? "revealVisible" : "reveal"}`}
      id="servicos"
      aria-labelledby="services-heading"
      role="region"
      ref={elementRef as any}
    >
      <header>
        <h2 id="services-heading" className="section-title">
          Soluções para <span className={styles.lineBreak}>seu benefício</span>
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
        <div className={styles.list}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <i className={`pi ${service.icon}`} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardSubtitle}>{service.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
