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
              Garanta sua Aposentadoria ou BPC/LOAS em Recife
            </h1>
            <p className={styles.slogan}>
              Especialista em Direito Previdenciário com atendimento humanizado
              e segurança jurídica para o seu benefício.
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
