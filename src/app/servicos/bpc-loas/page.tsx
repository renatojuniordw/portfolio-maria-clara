import Link from "next/link";
import styles from "@/assets/styles/ServicePage.module.scss";
import { CONSTANTS } from "@/constants/constants";
import { Metadata } from "next";
import AboutAuthor from "@/components/AboutAuthor";

export const metadata: Metadata = {
  title:
    "BPC / LOAS - Benefício para Idosos e Deficientes em Recife | Dra. Maria Clara Santos",
  description:
    "Teve o BPC/LOAS negado pelo INSS? Especialista em garantir o benefício para idosos e pessoas com deficiência em situação de vulnerabilidade em Recife. Recupere seus direitos agora.",
  keywords:
    "bpc loas recife, advogado bpc loas recife, beneficio inss idoso recife, beneficio inss deficientes recife, como conseguir bpc loas recife",
  openGraph: {
    title:
      "BPC / LOAS - Garanta seu Benefício do INSS com Especialista em Recife",
    description:
      "Nunca pagou o INSS? Saiba como ter direito a um salário mínimo mensal se você for idoso ou pessoa com deficiência em situação de vulnerabilidade financeira.",
    url: "https://www.mariaclarasantos.adv.br/servicos/bpc-loas",
  },
};

export default function BPCPage() {
  return (
    <div className={styles.servicePage}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <Link href="/#servicos" className={styles.backLink}>
            <i className="pi pi-arrow-left"></i> Voltar para serviços
          </Link>
          <h1 className={styles.title}>BPC / LOAS</h1>
          <p className={styles.subtitle}>
            Apoio jurídico especializado para garantir{" "}
            <strong>dignidade e renda</strong> a quem mais precisa. O benefício
            assistencial é um direito, não um favor.
          </p>
        </div>
      </header>

      <main className={styles.contentWrapper}>
        <div className={styles.grid}>
          <article className={styles.mainContent}>
            <section>
              <h2>O que é o BPC/LOAS?</h2>
              <p>
                O Benefício de Prestação Continuada (BPC), previsto na Lei
                Orgânica da Assistência Social (LOAS), é um benefício de um
                salário mínimo mensal pago pelo Governo Federal a pessoas que
                nunca contribuíram para o INSS, mas que preenchem requisitos
                específicos de idade ou deficiência.
              </p>
              <p>
                Muitas vezes o INSS nega esse benefício por erros automáticos de
                cálculo de renda ou avaliações médicas superficiais. Como
                advogada especialista, meu papel é reverter essas negativas e
                garantir que a justiça seja feita.
              </p>
            </section>

            <section>
              <h2>Quem tem direito ao benefício?</h2>
              <p>
                Para ter acesso ao BPC/LOAS, é necessário cumprir dois
                requisitos principais:
              </p>
              <ul>
                <li>
                  <strong>Idosos:</strong> Pessoas com 65 anos ou mais que não
                  possuem meios de prover a própria manutenção.
                </li>
                <li>
                  <strong>Pessoas com Deficiência:</strong> Pessoas de qualquer
                  idade que possuam impedimentos de longo prazo (mínimo de 2
                  anos).
                </li>
                <li>
                  <strong>Renda Familiar:</strong> A renda per capita da família
                  deve ser inferior a 1/4 do salário mínimo (podendo ser
                  flexibilizada judicialmente).
                </li>
              </ul>
            </section>

            <section>
              <h2>Por que contratar uma especialista?</h2>
              <p>
                O processo de solicitação do BPC envolve critérios subjetivos do
                INSS que frequentemente barram pedidos legítimos. Atuamos com
                análise estratégica de documentos e provas para:
              </p>
              <ul>
                <li>Reverter indeferimentos do INSS com agilidade;</li>
                <li>
                  Garantir o pagamento de todos os valores retroativos
                  (atrasados);
                </li>
                <li>
                  Realizar o cálculo correto da renda familiar, excluindo gastos
                  com medicamentos e fraldas;
                </li>
                <li>
                  Acompanhar perícias médicas e sociais com orientação técnica e
                  jurídica.
                </li>
              </ul>
            </section>
          </article>

          <aside className={styles.sidebar}>
            <div className={styles.stickyContainer}>
              <div className={styles.contactCard}>
                <div className={styles.iconBox}>
                  <i className="pi pi-whatsapp"></i>
                </div>
                <h3>Agendar Consulta</h3>
                <p>
                  Analisamos seu caso detalhadamente para garantir sua segurança
                  financeira. Fale agora com nossa equipe.
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
