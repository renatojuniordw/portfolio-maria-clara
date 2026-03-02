"use client";

import { Divider } from "primereact/divider";
import styles from "@/assets/styles/StatsSection.module.scss";

const StatsSection = () => {
  const stats = [
    {
      value: "+2.000.000",
      label: "Pessoas na fila do INSS",
      description:
        "Um erro na documentação pode te deixar anos esperando. Nós cuidamos do seu processo para garantir agilidade.",
    },
    {
      value: "13.2%",
      label: "Negativas Indevidas",
      description:
        "Segundo auditoria do TCU, o INSS nega milhares de benefícios por falhas de sistema. Nós auditamos sua negativa.",
    },
    {
      value: "Especialista",
      label: "Foco Previdenciário",
      description:
        "Atuação 100% dedicada a garantir que você receba o valor máximo e todos os seus retroativos.",
    },
  ];

  return (
    <section
      className={styles.stats}
      id="estatisticas"
      aria-labelledby="stats-heading"
    >
      <div className={styles.outerContainer}>
        <header>
          <h2 id="stats-heading" className="section-title">
            Estatísticas e{" "}
            <span aria-hidden="true">
              <br />
            </span>
            Diferenciais
          </h2>
          <Divider />
        </header>
        <div className={styles.container}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.iconWrapper}>
                <span className={styles.value}>{stat.value}</span>
              </div>
              <h3 className={styles.label}>{stat.label}</h3>
              <p className={styles.description}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
