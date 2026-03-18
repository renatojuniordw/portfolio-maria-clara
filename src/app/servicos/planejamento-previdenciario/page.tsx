import Link from "next/link";
import styles from "@/assets/styles/ServicePage.module.scss";
import { CONSTANTS } from "@/constants/constants";
import { Metadata } from "next";
import AboutAuthor from "@/components/AboutAuthor";

export const metadata: Metadata = {
  title: "Planejamento Previdenciário em Recife | Dra. Maria Clara Santos",
  description:
    "Planejamento previdenciário em Recife. Saiba quando se aposentar, quanto contribuir e como receber o valor máximo do INSS.",
  keywords:
    "planejamento previdenciário recife, quanto pagar de inss recife, calculo de aposentadoria recife, quando vou me aposentar recife, consultoria previdenciária recife",
  alternates: {
    canonical: "https://www.mariaclarasantos.adv.br/servicos/planejamento-previdenciario",
  },
  openGraph: {
    title:
      "Planejamento Previdenciário - Invista no seu Amanhã de Força Estratégica",
    description:
      "Evite surpresas negativas. Planejamos seu benefício para que você tenha a melhor aposentadoria possível, com segurança jurídica e economia.",
    url: "https://www.mariaclarasantos.adv.br/servicos/planejamento-previdenciario",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Planejamento Previdenciário Estratégico",
  provider: {
    "@type": "LegalService",
    name: "Dra. Maria Clara Santos",
    url: "https://www.mariaclarasantos.adv.br",
  },
  areaServed: { "@type": "City", name: "Recife" },
  description:
    "Consultoria técnica para planejamento de aposentadoria com máxima eficiência contributiva e segurança jurídica em Recife.",
  url: "https://www.mariaclarasantos.adv.br/servicos/planejamento-previdenciario",
};

export default function PlanejamentoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <div className={styles.servicePage}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <Link href="/#servicos" className={styles.backLink}>
            <i className="pi pi-arrow-left"></i> Voltar para serviços
          </Link>
          <h1 className={styles.title}>Planejamento Estratégico</h1>
          <p className={styles.subtitle}>
            A inteligência aplicada ao seu benefício. Planejar hoje para
            garantir o <strong>maior valor de recebimento</strong> e o menor
            custo amanhã.
          </p>
        </div>
      </header>

      <main className={styles.contentWrapper}>
        <div className={styles.grid}>
          <article className={styles.mainContent}>
            <section>
              <h2>O Que é o Planejamento?</h2>
              <p>
                O planejamento previdenciário é um serviço preventivo
                indispensável para quem deseja se aposentar com tranquilidade e
                inteligência. Através de cálculos detalhados e análise de
                múltiplos cenários, definimos a estratégia ideal para que você
                obtenha o melhor ROI (Retorno sobre Investimento).
              </p>
              <p>
                <strong>Ao planejar, você evita:</strong>
              </p>
              <ul>
                <li>
                  Pagar contribuições do INSS com valores desnecessariamente
                  altos;
                </li>
                <li>
                  Aposentar-se em uma regra menos vantajosa por simples
                  desconhecimento técnico;
                </li>
                <li>
                  Ter o benefício negado no futuro por pendências ignoradas no
                  CNIS hoje.
                </li>
              </ul>
            </section>

            <section>
              <h2>Como Funciona a Consultoria Técnica?</h2>
              <p>
                A partir do seu histórico completo de vida e trabalho,
                realizamos um dossiê técnico:
              </p>
              <ul>
                <li>
                  <strong>Auditoria Profunda do CNIS:</strong> Identificamos
                  lacunas, erros e tempos de contribuições que precisam de
                  acerto imediato;
                </li>
                <li>
                  <strong>Projeção de Cenários:</strong> Simulamos todas as
                  regras de transição da reforma de 2019 e identificamos o
                  momento exato de cada uma;
                </li>
                <li>
                  <strong>Cálculo do ROI:</strong> Demonstramos claramente em
                  quanto tempo você recuperará o valor investido na previdência
                  (mês a mês);
                </li>
                <li>
                  <strong>Correção Preventiva:</strong> Deixamos tudo pronto
                  para que sua aposentadoria seja automática e sem exigências do
                  INSS.
                </li>
              </ul>
            </section>

            <section>
              <h2>Como funciona o planejamento previdenciário?</h2>
              <ol>
                <li>
                  <strong>Levantamento do histórico:</strong> coletamos todo o
                  histórico de trabalho e contribuições, formais e informais.
                </li>
                <li>
                  <strong>Auditoria profunda do CNIS:</strong> identificamos
                  lacunas, erros e períodos que precisam de regularização
                  imediata.
                </li>
                <li>
                  <strong>Simulação de cenários:</strong> calculamos todas as
                  regras de transição da Reforma de 2019 e o impacto de cada
                  uma no valor do seu benefício.
                </li>
                <li>
                  <strong>Definição da estratégia:</strong> escolhemos o
                  momento ideal para pedir a aposentadoria e o valor de
                  contribuição mais eficiente.
                </li>
                <li>
                  <strong>Correção preventiva:</strong> regularizamos tudo
                  antes do pedido para que a concessão seja automática, sem
                  exigências do INSS.
                </li>
              </ol>
            </section>

            <section>
              <h2>O Valor de uma Estratégia</h2>
              <p>
                O planejamento é um investimento em segurança. Um pequeno ajuste
                no valor da sua contribuição ou na escolha do mês correto para
                pedir o benefício pode representar uma diferença de centenas de
                milhares de reais ao longo de toda a sua vida de aposentado.
              </p>
            </section>
            <section>
              <h2>Veja também</h2>
              <ul>
                <li>
                  <Link href="/servicos/bpc-loas">
                    BPC/LOAS — benefício assistencial para quem nunca contribuiu
                    ao INSS
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/aposentadorias">
                    Aposentadorias — assessoria para garantir o maior valor de
                    benefício
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/auxilio-doenca-pensao">
                    Auxílio-Doença e Pensão por Morte — suporte em negativas por
                    incapacidade
                  </Link>
                </li>
              </ul>
            </section>
          </article>

          <aside className={styles.sidebar}>
            <div className={styles.stickyContainer}>
              <div className={styles.contactCard}>
                <div className={styles.iconBox}>
                  <i className="pi pi-chart-line"></i>
                </div>
                <h3>Solicitar Planejamento</h3>
                <p>
                  Deseja saber exatamente quanto falta para se aposentar com o
                  valor máximo? Deixe nossa equipe estratégica planejar o seu
                  futuro.
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
    </>
  );
}
