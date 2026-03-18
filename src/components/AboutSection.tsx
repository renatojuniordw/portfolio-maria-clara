"use client";

import Image from "next/image";
import profileImg from "@/assets/images/profile.png";
import styles from "@/assets/styles/AboutSection.module.scss";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>(0.2);

  return (
    <section
      className={`${styles.about} ${isVisible ? "revealVisible" : "reveal"}`}
      id="sobre"
      aria-labelledby="about-heading"
      ref={elementRef}
    >
      <div className={styles.container}>
        <header className={styles.titleWrapper}>
          <p className={styles.eyebrow}>Quem conduz seu caso</p>
          <h2 id="about-heading" className="section-title">
            Presença técnica. Linguagem humana. Atuação focada em
            previdenciário.
          </h2>
          <span className="section-divider" aria-hidden="true" />
        </header>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <Image
              src={profileImg}
              alt="Dra. Maria Clara Santos - Advogada Previdenciária Especialista em INSS em Recife"
              width={400}
              height={400}
              className={styles.image}
            />
          </div>

          <div className={styles.textWrapper}>
            <p className={styles.description}>
              Sou Maria Clara Santos, advogada previdenciarista com atuação
              especializada em Direito Previdenciário em Recife. Minha rotina de
              trabalho envolve aposentadorias, pensões, auxílios e BPC/LOAS,
              sempre com leitura individual do caso e estratégia sob medida.
            </p>
            <p className={styles.description}>
              Sou bacharela em Direito pela UNICAP, com MBA em Mediação e
              Arbitragem, e sigo em especialização continuada em seguridade
              social e direito previdenciário. A base do meu trabalho é unir
              técnica, clareza e responsabilidade.
            </p>
            <p className={styles.description}>
              Inscrita na OAB/PE 60.655, atuo com atendimento humanizado e
              transparente para clientes de Recife, Olinda, Jaboatão dos
              Guararapes, Paulista e Região Metropolitana.
            </p>
            <div className={styles.credentials}>
              <span>OAB/PE 60.655</span>
              <span>Foco exclusivo em INSS</span>
              <span>Atendimento em Recife e Região Metropolitana</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
