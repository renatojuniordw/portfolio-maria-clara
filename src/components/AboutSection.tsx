"use client";

import Image from "next/image";
import profileImg from "@/assets/images/profile.png";
import styles from "@/assets/styles/AboutSection.module.scss";
import { Divider } from "primereact/divider";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      className={`${styles.about} ${isVisible ? "revealVisible" : "reveal"}`}
      id="sobre"
      ref={elementRef as any}
    >
      <div className={styles.container}>
        <header className={styles.titleWrapper}>
          <h2 id="about-heading" className="section-title">
            Sobre mim
          </h2>
          <Divider />
        </header>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <Image
              src={profileImg}
              alt="Dra. Maria Clara Santos"
              width={400}
              height={400}
              className={styles.image}
            />
          </div>

          <div className={styles.textWrapper}>
            <p className={styles.description}>
              Sou Maria Clara Santos, advogada previdenciarista com atuação
              especializada em Direito Previdenciário em Recife (PE). Bacharela
              em Direito pela UNICAP (2021.1), com MBA em Mediação e Arbitragem
              pela mesma instituição (2023), atualmente curso pós-graduação em
              Direito da Seguridade Social – Direito e Prática Previdenciária
              pela Faculdade Legale (2025/2026).
              <br />
              <br />
              Atuo com foco exclusivo em benefícios do INSS, como
              aposentadorias, pensões, auxílios e BPC/LOAS, sempre com
              estratégias personalizadas para garantir o melhor resultado para
              cada cliente. Meu trabalho é baseado em seriedade, técnica e
              comprometimento.
              <br />
              <br />
              Sou advogada regularmente inscrita na OAB/PE nº 60.655 e tenho
              como missão oferecer um atendimento humanizado e transparente, com
              foco na segurança jurídica e na tranquilidade de quem busca os
              seus direitos junto à Previdência Social.
              <br />
              <br />
              Se você procura uma advogada especialista em INSS, que atua com
              empatia, responsabilidade e conhecimento profundo das regras
              previdenciárias, conte comigo para te orientar em cada etapa do
              processo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
