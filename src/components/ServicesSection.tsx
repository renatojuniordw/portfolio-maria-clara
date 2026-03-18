"use client";

import Link from "next/link";
import styles from "@/assets/styles/ServicesSection.module.scss";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ServicesSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>(0.2);
  const services = [
    {
      title: "BPC / LOAS",
      subtitle: "(Idosos e Deficientes)",
      icon: "pi-users",
      slug: "bpc-loas",
    },
    {
      title: "Aposentadorias",
      subtitle: "(Idade, Tempo e Especial)",
      icon: "pi-calendar",
      slug: "aposentadorias",
    },
    {
      title: "INSS",
      subtitle: "Auxílio-Doença e Pensão por Morte",
      icon: "pi-shield",
      slug: "auxilio-doenca-pensao",
    },
    {
      title: "Planejamento",
      subtitle: "Estratégico Previdenciário",
      icon: "pi-chart-line",
      slug: "planejamento-previdenciario",
    },
  ];

  return (
    <section
      className={`${styles.services} ${isVisible ? "revealVisible" : "reveal"}`}
      id="servicos"
      aria-labelledby="services-heading"
      role="region"
      ref={elementRef}
    >
      <header className={styles.header}>
        <p className={styles.eyebrow}>Onde a atuação aperta o sistema</p>
        <h2 id="services-heading" className="section-title">
          Frentes de ataque para destravar seu direito.
        </h2>
        <p className={styles.intro}>
          Cada caso exige leitura de documento, estratégia de prova e escolha
          do melhor caminho administrativo ou judicial.
        </p>
        <span className="section-divider" aria-hidden="true" />
      </header>
      <div className={styles.grid}>
        <div className={styles.text}>
          <p className={styles.manifesto}>
            NÃO trabalho com promessa vazia. Trabalho com leitura de processo,
            revisão de CNIS, provas certas e condução firme.
          </p>
          <div className={styles.highlight}>
            <strong>Se o INSS travou sua renda, o site precisa dizer isso sem medo.</strong>
            <p>
              A abordagem aqui não é institucional neutra: ela comunica defesa,
              presença e especialização de nicho.
            </p>
          </div>
        </div>
        <div className={styles.list}>
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/servicos/${service.slug}`}
              className={styles.card}
              title={`Ver mais sobre ${service.title}`}
            >
              <span className={styles.cardIndex}>{service.slug.slice(0, 3)}</span>
              <div className={styles.iconWrapper}>
                <i className={`pi ${service.icon}`} aria-hidden="true" />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardSubtitle}>{service.subtitle}</p>
                <div className={styles.verMais}>
                  Ver detalhes <i className="pi pi-arrow-right" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
