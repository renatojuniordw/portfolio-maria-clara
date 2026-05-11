import Link from "next/link";
import {
  FaUsers,
  FaCalendarAlt,
  FaShieldAlt,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";
import styles from "@/assets/styles/ServicesSection.module.scss";

const services = [
  {
    title: "BPC / LOAS",
    subtitle: "(Idosos e Deficientes)",
    Icon: FaUsers,
    slug: "bpc-loas",
  },
  {
    title: "Aposentadorias",
    subtitle: "(Idade, Tempo e Especial)",
    Icon: FaCalendarAlt,
    slug: "aposentadorias",
  },
  {
    title: "INSS",
    subtitle: "Auxílio-Doença e Pensão por Morte",
    Icon: FaShieldAlt,
    slug: "auxilio-doenca-pensao",
  },
  {
    title: "Planejamento",
    subtitle: "Estratégico Previdenciário",
    Icon: FaChartLine,
    slug: "planejamento-previdenciario",
  },
];

const ServicesSection = () => {
  return (
    <section
      className={`${styles.services} reveal`}
      id="servicos"
      aria-labelledby="services-heading"
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
                <service.Icon aria-hidden="true" />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardSubtitle}>{service.subtitle}</p>
                <div className={styles.verMais}>
                  Ver detalhes <FaArrowRight aria-hidden="true" />
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
