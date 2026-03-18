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
      <p className={styles.kicker}>Advocacia previdenciária em Recife</p>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <header>
            <h1 id="hero-title" className={styles.title}>
              Negaram seu benefício. A história não termina no guichê.
            </h1>
            <p className={styles.slogan}>
              Estratégia jurídica para reverter negativas do INSS, proteger sua
              renda e recuperar o que foi travado pelo sistema.
            </p>
            <ul className={styles.tags} aria-label="Área de atuação">
              <li>Recife</li>
              <li>INSS</li>
              <li>Defesa técnica</li>
            </ul>
            <div className={styles.actions}>
              <a
                href={CONSTANTS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                Falar com a Dra. Maria Clara
              </a>
              <a href="#servicos" className={styles.secondaryLink}>
                Ver frentes de atuação
              </a>
            </div>
          </header>
        </div>
        <div className={styles.sidePanel} aria-label="Diferenciais de atendimento">
          <p className={styles.panelLabel}>Foco exclusivo</p>
          <ul className={styles.points}>
            <li>BPC / LOAS</li>
            <li>Aposentadorias</li>
            <li>Auxílios e pensões</li>
            <li>Planejamento previdenciário</li>
          </ul>
          <p className={styles.panelNote}>
            Atendimento humano, linguagem clara e condução técnica do início ao
            desfecho.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
