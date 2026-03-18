import Link from "next/link";
import styles from "@/assets/styles/ServicePage.module.scss";
import { CONSTANTS } from "@/constants/constants";
import { Metadata } from "next";
import AboutAuthor from "@/components/AboutAuthor";

export const metadata: Metadata = {
  title: "Aposentadoria em Recife | Dra. Maria Clara Santos",
  description:
    "Especialista em Aposentadoria por Idade, Tempo e Especial em Recife. Garanta o maior valor de benefício e receba todos os atrasados.",
  keywords:
    "aposentadoria recife, advogado aposentadoria recife, inss aposentadoria recife, tempo de contribuição inss recife, aposentadoria especial recife",
  alternates: {
    canonical: "https://www.mariaclarasantos.adv.br/servicos/aposentadorias",
  },
  openGraph: {
    title:
      "Aposentadorias - Planeje seu Benefício e Garanta seu Futuro em Recife",
    description:
      "Saiba como se aposentar com o maior valor possível. Orientação técnica sobre regras de transição e direito adquirido.",
    url: "https://www.mariaclarasantos.adv.br/servicos/aposentadorias",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Assessoria em Aposentadorias pelo INSS",
  provider: {
    "@type": "LegalService",
    name: "Dra. Maria Clara Santos",
    url: "https://www.mariaclarasantos.adv.br",
  },
  areaServed: { "@type": "City", name: "Recife" },
  description:
    "Planejamento e assessoria jurídica para aposentadoria por idade, tempo de contribuição e especial em Recife.",
  url: "https://www.mariaclarasantos.adv.br/servicos/aposentadorias",
};

export default function AposentadoriasPage() {
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
          <h1 className={styles.title}>Aposentadorias</h1>
          <p className={styles.subtitle}>
            A certeza de que sua vida de trabalho será recompensada com o{" "}
            <strong>benefício máximo</strong> que você merece. Analisamos cada
            detalhe do seu histórico.
          </p>
        </div>
      </header>

      <main className={styles.contentWrapper}>
        <div className={styles.grid}>
          <article className={styles.mainContent}>
            <section>
              <h2>Tipos de Aposentadoria</h2>
              <p>
                Após a Reforma da Previdência (EC 103/2019), as regras de
                aposentadoria no Brasil mudaram drasticamente. Com diversas
                regras de transição vigentes, é fundamental uma análise
                individual para identificar qual o melhor caminho para cada
                segurado.
              </p>
              <ul>
                <li>
                  <strong>Por Idade:</strong> Uma das mais comuns, para quem não
                  possui longo período de contribuição.
                </li>
                <li>
                  <strong>Por Tempo de Contribuição:</strong> Foco em quem
                  começou a trabalhar cedo e possui longo período de
                  recolhimento.
                </li>
                <li>
                  <strong>Aposentadoria Especial:</strong> Para quem trabalhou
                  em condições prejudiciais à saúde (ruído, calor, agentes
                  químicos).
                </li>
                <li>
                  <strong>Pessoas com Deficiência (PCD):</strong> Regras
                  diferenciadas e vantajosas para quem possui impedimentos
                  físicos ou intelectuais.
                </li>
              </ul>
            </section>

            <section>
              <h2>O Perigo do Erro no INSS</h2>
              <p>
                O INSS frequentemente falha em reconhecer períodos de atividade
                especial, tempos de serviço militar, tempo rural ou períodos
                trabalhados em outro país. Esses erros resultam em benefícios
                muito menores do que o segurado teria direito.
              </p>
              <p>
                Meu trabalho envolve auditar todo o CNIS (Cadastro Nacional de
                Informações Sociais) e documentos complementares para garantir
                que nem um centavo seja perdido.
              </p>
            </section>

            <section>
              <h2>Como funciona a assessoria para aposentadoria?</h2>
              <ol>
                <li>
                  <strong>Análise do histórico contributivo:</strong> auditamos
                  todo o CNIS para identificar períodos não reconhecidos pelo
                  INSS.
                </li>
                <li>
                  <strong>Simulação de cenários:</strong> calculamos todas as
                  regras de transição vigentes e identificamos a mais vantajosa
                  para o seu perfil.
                </li>
                <li>
                  <strong>Correção do CNIS:</strong> regularizamos pendências e
                  períodos divergentes antes de protocolar o requerimento.
                </li>
                <li>
                  <strong>Protocolo do requerimento:</strong> entramos com o
                  pedido no INSS garantindo que todos os documentos estejam
                  corretos.
                </li>
                <li>
                  <strong>Acompanhamento até a concessão:</strong> monitoramos
                  o processo e recorremos em caso de negativa ou cálculo
                  incorreto.
                </li>
              </ol>
            </section>

            <section>
              <h2>Vantagens da Assessoria Jurídica</h2>
              <ul>
                <li>
                  <strong>Agilidade Extrema:</strong> Evite o vai-e-vem de
                  documentos e exigências do INSS que travam o processo;
                </li>
                <li>
                  <strong>Valor Máximo Garantido:</strong> Garantia de que a
                  regra de cálculo aplicada seja a mais vantajosa para você;
                </li>
                <li>
                  <strong>Segurança Técnica:</strong> Antes de aceitar sua
                  aposentadoria, verificamos se todos os períodos foram
                  considerados corretamente.
                </li>
              </ul>
            </section>
            <section>
              <h2>Veja também</h2>
              <ul>
                <li>
                  <Link href="/servicos/bpc-loas">
                    BPC/LOAS — benefício para idosos e pessoas com deficiência
                    sem contribuição ao INSS
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/auxilio-doenca-pensao">
                    Auxílio-Doença e Pensão por Morte — suporte em casos de
                    incapacidade e amparo familiar
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/planejamento-previdenciario">
                    Planejamento Previdenciário — estratégia para aposentar
                    com o maior valor
                  </Link>
                </li>
              </ul>
            </section>
          </article>

          <aside className={styles.sidebar}>
            <div className={styles.stickyContainer}>
              <div className={styles.contactCard}>
                <div className={styles.iconBox}>
                  <i className="pi pi-calendar"></i>
                </div>
                <h3>Verificar Possibilidade</h3>
                <p>
                  Planeje seu futuro com quem entende. Analisamos seu tempo e
                  suas contribuições para garantir o melhor benefício.
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
