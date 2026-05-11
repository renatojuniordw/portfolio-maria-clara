import Link from "next/link";
import styles from "@/assets/styles/ServicePage.module.scss";
import { Metadata } from "next";
import AboutAuthor from "@/components/AboutAuthor";
import ServiceSidebar from "@/components/ServiceSidebar";
import ServiceBackLink from "@/components/ServiceBackLink";
import JsonLdScript from "@/components/JsonLdScript";
import { buildServiceJsonLd } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Auxílio-Doença e Pensão por Morte Recife | INSS",
  description:
    "Auxílio-doença cortado ou pensão por morte negada em Recife? Revertemos negativas do INSS e garantimos seus direitos. Fale agora.",
  keywords:
    "auxílio doença recife, advogado auxílio doença recife, pensao por morte recife, inss benefícios incapacidade recife, advogado inss recife, auxílio doença pernambuco, pensão por morte pernambuco, advogado inss camaragibe",
  alternates: {
    canonical: "https://www.mariaclarasantos.adv.br/servicos/auxilio-doenca-pensao",
  },
  openGraph: {
    title:
      "INSS - Auxílio-Doença, Pensão por Morte e Amparo Familiar em Recife",
    description:
      "Reversão de benefício negado por perícia médica. Pensão por morte para união estável e filhos em Recife.",
    url: "https://www.mariaclarasantos.adv.br/servicos/auxilio-doenca-pensao",
  },
};

const serviceJsonLd = buildServiceJsonLd(
  "Auxílio-Doença e Pensão por Morte pelo INSS",
  "Assessoria jurídica para reversão de auxílio-doença negado por perícia e pensão por morte em Recife.",
  "https://www.mariaclarasantos.adv.br/servicos/auxilio-doenca-pensao",
);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O INSS negou meu auxílio-doença. O que fazer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não aceite a negativa como definitiva. É possível entrar com recurso administrativo no prazo de 30 dias ou ajuizar ação judicial para reverter a decisão. Com orientação especializada, a documentação médica é reforçada e a estratégia de recurso maximiza as chances de concessão — com pagamento retroativo.",
      },
    },
    {
      "@type": "Question",
      name: "Quem tem direito à pensão por morte do INSS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Têm direito à pensão por morte: cônjuge ou companheiro(a) em união estável, filhos menores de 21 anos (ou inválidos de qualquer idade), e pais dependentes economicamente. O falecido deve ter qualidade de segurado no momento do óbito ou cumprir a carência mínima.",
      },
    },
    {
      "@type": "Question",
      name: "União estável dá direito à pensão por morte do INSS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. A companheira ou companheiro em união estável tem direito à pensão por morte, desde que comprovada a relação. Na ausência de documento formal, a comprovação pode ser feita com contas conjuntas, contratos de aluguel, fotos, testemunhas e outros documentos que demonstrem vida em comum.",
      },
    },
    {
      "@type": "Question",
      name: "O INSS cortou meu auxílio-doença na perícia. Tenho recurso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. A chamada 'alta programada' ou cessação do benefício por perícia pode ser contestada. Com laudo médico atualizado e orientação jurídica, é possível pedir nova perícia, entrar com recurso administrativo ou obter liminar judicial para restabelecer o benefício enquanto o processo tramita.",
      },
    },
  ],
};

export default function INSSPage() {
  return (
    <>
      <JsonLdScript data={serviceJsonLd} />
      <JsonLdScript data={faqJsonLd} />
      <div className={styles.servicePage}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <ServiceBackLink />
          <h1 className={styles.title}>Auxílio-Doença e Pensão por Morte em Recife</h1>
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
              <h2>Como funciona o processo para reverter uma negativa?</h2>
              <ol>
                <li>
                  <strong>Análise da negativa:</strong> revisamos a carta de
                  indeferimento e identificamos o motivo técnico da recusa do
                  INSS.
                </li>
                <li>
                  <strong>Avaliação da documentação médica:</strong> verificamos
                  se os laudos e exames atendem aos critérios exigidos
                  legalmente.
                </li>
                <li>
                  <strong>Estratégia de recurso:</strong> definimos o melhor
                  caminho — recurso administrativo ou ação judicial.
                </li>
                <li>
                  <strong>Protocolo do recurso:</strong> entramos com o pedido
                  de revisão formalmente e acompanhamos cada etapa do processo.
                </li>
                <li>
                  <strong>Recebimento dos retroativos:</strong> garantimos o
                  pagamento de todos os valores devidos desde a data do pedido
                  original.
                </li>
              </ol>
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
            <section>
              <h2>Veja também</h2>
              <ul>
                <li>
                  <Link href="/servicos/bpc-loas">
                    BPC/LOAS — benefício assistencial para idosos e pessoas com
                    deficiência
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/aposentadorias">
                    Aposentadorias — garanta o maior valor de benefício possível
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/planejamento-previdenciario">
                    Planejamento Previdenciário — antecipe sua aposentadoria com
                    segurança jurídica
                  </Link>
                </li>
              </ul>
            </section>
          </article>

          <ServiceSidebar
            icon="pi-shield"
            title="Analisar Negativa"
            description="Teve o benefício cortado ou negado pela perícia? Não desista. Uma análise especializada pode reverter sua situação e garantir seus direitos."
          />
        </div>
      </main>
      <AboutAuthor />
    </div>
    </>
  );
}
