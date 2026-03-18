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
        <header className={styles.header}>
          <p className={styles.eyebrow}>Pressão do sistema</p>
          <h2 id="stats-heading" className="section-title">
            NÃO é só burocracia. É atraso, erro e perda de renda real.
          </h2>
          <p className={styles.lead}>
            Os números existem para contextualizar o problema, mas o diferencial
            principal é transformar demora e negativa em plano de ação.
          </p>
          <span className="section-divider" aria-hidden="true" />
        </header>
        <div className={styles.container}>
          {stats.map((stat) => (
            <article key={stat.label} className={styles.statCard}>
              <p className={styles.cardTop}>Leitura estratégica</p>
              <div className={styles.iconWrapper}>
                <span className={styles.value}>{stat.value}</span>
              </div>
              <h3 className={styles.label}>{stat.label}</h3>
              <p className={styles.description}>{stat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
