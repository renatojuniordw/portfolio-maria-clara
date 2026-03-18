import Link from "next/link";
import styles from "@/assets/styles/ServicePage.module.scss";
import { CONSTANTS } from "@/constants/constants";
import { Metadata } from "next";
import AboutAuthor from "@/components/AboutAuthor";

export const metadata: Metadata = {
  title:
    "Auxílio-Doença e Pensão por Morte em Recife - Especialista em INSS | Dra. Maria Clara Santos",
  description:
    "Teve seu auxílio-doença cortado ou pensão por morte negada? Atendimento especializado em casos de doença, incapacidade e amparo familiar em Recife. Garanta o que é seu por direito.",
  keywords:
    "auxilio doença recife, advogado auxilio doença recife, pensao por morte recife, inss beneficios incapacidade recife, advogado inss recife",
  openGraph: {
    title:
      "INSS - Auxílio-Doença, Pensão por Morte e Amparo Familiar em Recife",
    description:
      "Reversão de benefício negado por perícia médica. Pensão por morte para união estável e filhos em Recife.",
    url: "https://www.mariaclarasantos.adv.br/servicos/auxilio-doenca-pensao",
  },
};

export default function INSSPage() {
  return (
    <div className={styles.servicePage}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <Link href="/#servicos" className={styles.backLink}>
            <i className="pi pi-arrow-left"></i> Voltar para serviços
          </Link>
          <h1 className={styles.title}>INSS - Auxílio & Pensões</h1>
          <p className={styles.subtitle}>
            Suporte técnico e acolhimento nos momentos mais difíceis. Atuação em
            benefícios por <strong>incapacidade e amparo familiar</strong> com
            rapidez.
          </p>
        </div>
      </header>

      <main className={styles.contentWrapper}>
        <div className={styles.grid}>
          <article className={styles.mainContent}>
            <section>
              <h2>Auxílio-Doença (Incapacidade Temporária)</h2>
              <p>
                O auxílio-doença é um benefício para quem está temporariamente
                incapacitado para o trabalho. O grande problema desses casos é a
                perícia médica do INSS, que muitas vezes dá o &quot;alta
                médica&quot;
                precocemente, antes que o segurado esteja apto a retornar à sua
                atividade.
              </p>
              <p>Nossa atuação envolve técnica médica e jurídica para:</p>
              <ul>
                <li>
                  <strong>Reintegração de Benefício:</strong> Garantir que você
                  receba enquanto estiver impedido de trabalhar;
                </li>
                <li>
                  <strong>Recurso em Perícia Negada:</strong> Ação judicial
                  especializada contra o indeferimento injusto da perícia;
                </li>
                <li>
                  <strong>Orientações Técnicas:</strong> Analisamos se seus
                  laudos e exames estão nos padrões exigidos legalmente para
                  facilitar a concessão.
                </li>
              </ul>
            </section>

            <section>
              <h2>Pensão por Morte (Amparo à Família)</h2>
              <p>
                Garantir o amparo aos dependentes após o falecimento do segurado
                é uma das atuações mais delicadas e essenciais da advocacia
                previdenciária. Auxiliamos em casos complexos de:
              </p>
              <ul>
                <li>
                  <strong>Comprovação de União Estável:</strong> Provamos o
                  relacionamento quando não há certidão formal de casamento;
                </li>
                <li>
                  <strong>Direito de Ex-Cônjuge:</strong> Garantimos a cota
                  parte para quem recebia pensão alimentícia;
                </li>
                <li>
                  <strong>Pensão Negada por Falta de Qualidade:</strong>{" "}
                  Reversão de negativas quando o segurado estava desempregado no
                  momento do óbito.
                </li>
              </ul>
            </section>
          </article>

          <aside className={styles.sidebar}>
            <div className={styles.stickyContainer}>
              <div className={styles.contactCard}>
                <div className={styles.iconBox}>
                  <i className="pi pi-shield"></i>
                </div>
                <h3>Analisar Negativa</h3>
                <p>
                  Teve o benefício cortado ou negado pela perícia? Não desista.
                  Uma análise especializada pode reverter sua situação e
                  garantir seus direitos.
                </p>
                <a
                  href={CONSTANTS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaButton}
                >
                  Falar no WhatsApp
                </a>
                <div className={styles.safeBadge}>
                  <i className="pi pi-shield"></i>
                  <span>Ambiente Seguro e Ético OAB/PE</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <AboutAuthor />
    </div>
  );
}
