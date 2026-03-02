"use client";

import styles from "@/assets/styles/HeroSection.module.scss";
import { CONSTANTS } from "@/constants/constants";

const HeroSection = () => {
  return (
    <section
      className={styles.hero}
      id="inicio"
      role="region"
      aria-labelledby="hero-title"
    >
      <div className={styles.container}>
        <div className={styles.text}>
          <header>
            <h1 id="hero-title" className={styles.title}>
              Benefício <span className={styles.highlight}>Negado</span> ou
              Travado no INSS?
            </h1>
            <p className={styles.slogan}>
              Eu reverto a injustiça e garanto sua dignidade. Especialista em
              BPC/LOAS e Aposentadorias em Recife.{" "}
              <strong>Não aceite um "não" automático do sistema.</strong>
            </p>
            <a
              href={CONSTANTS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Falar com a Dra. Maria Clara
            </a>
          </header>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
