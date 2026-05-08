import Link from "next/link";
import styles from "@/assets/styles/ServicePage.module.scss";
import { Metadata } from "next";
import AboutAuthor from "@/components/AboutAuthor";
import ServiceSidebar from "@/components/ServiceSidebar";
import ServiceBackLink from "@/components/ServiceBackLink";
import JsonLdScript from "@/components/JsonLdScript";
import { buildServiceJsonLd } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "BPC/LOAS em Recife | Dra. Maria Clara Santos",
  description:
    "BPC/LOAS negado em Recife? Especialista em garantir o benefício para idosos e pessoas com deficiência em vulnerabilidade financeira.",
  keywords:
    "bpc loas recife, advogado bpc loas recife, benefício inss idoso recife, benefício inss deficientes recife, como conseguir bpc loas recife, bpc loas pernambuco, advogado bpc loas camaragibe, bpc loas negado pernambuco",
  alternates: {
    canonical: "https://www.mariaclarasantos.adv.br/servicos/bpc-loas",
  },
  openGraph: {
    title:
      "BPC / LOAS - Garanta seu Benefício do INSS com Especialista em Recife",
    description:
      "Nunca pagou o INSS? Saiba como ter direito a um salário mínimo mensal se você for idoso ou pessoa com deficiência em situação de vulnerabilidade financeira.",
    url: "https://www.mariaclarasantos.adv.br/servicos/bpc-loas",
  },
};

const serviceJsonLd = buildServiceJsonLd(
  "BPC/LOAS - Benefício de Prestação Continuada",
  "Assessoria jurídica especializada para obtenção e revisão do BPC/LOAS para idosos e pessoas com deficiência em Recife.",
  "https://www.mariaclarasantos.adv.br/servicos/bpc-loas",
);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qual a renda máxima para ter direito ao BPC/LOAS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A renda per capita familiar deve ser inferior a 1/4 do salário mínimo (aproximadamente R$353,00 em 2024). Porém, com a ajuda de um advogado especialista, é possível excluir do cálculo gastos com medicamentos, fraldas e tratamentos de saúde, o que frequentemente permite a concessão mesmo para quem inicialmente parece não se enquadrar.",
      },
    },
    {
      "@type": "Question",
      name: "Pessoa com deficiência que trabalha pode receber BPC/LOAS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O STJ firmou entendimento de que o exercício de atividade remunerada por pessoa com deficiência não impede automaticamente o recebimento do BPC/LOAS, desde que a renda não supere o limite legal. Cada caso deve ser analisado individualmente.",
      },
    },
    {
      "@type": "Question",
      name: "O BPC/LOAS acumula com outros benefícios do INSS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Em regra, o BPC/LOAS não pode ser acumulado com outros benefícios da Seguridade Social, como aposentadoria ou auxílio-doença. Porém, existem exceções judiciais dependendo do caso. Um advogado especialista pode avaliar a melhor estratégia para o seu perfil.",
      },
    },
    {
      "@type": "Question",
      name: "Meu BPC/LOAS foi negado pelo INSS. Ainda tenho como receber?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Negativas do INSS são frequentes e muitas vezes injustas. É possível entrar com recurso administrativo ou ação judicial para reverter a decisão e garantir o pagamento retroativo desde a data do pedido original.",
      },
    },
  ],
};

export default function BPCPage() {
  return (
    <>
      <JsonLdScript data={serviceJsonLd} />
      <JsonLdScript data={faqJsonLd} />
      <div className={styles.servicePage}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <ServiceBackLink />
          <h1 className={styles.title}>BPC/LOAS em Recife e Pernambuco</h1>
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
              <h2>Como funciona o processo para obter o BPC/LOAS?</h2>
              <ol>
                <li>
                  <strong>Análise do perfil:</strong> verificamos se você
                  preenche os requisitos de idade, deficiência e renda familiar.
                </li>
                <li>
                  <strong>Reunião de documentos:</strong> listamos exatamente
                  quais documentos o INSS exige para o seu caso específico.
                </li>
                <li>
                  <strong>Protocolo do pedido:</strong> realizamos o
                  agendamento e acompanhamos a entrada do requerimento no INSS.
                </li>
                <li>
                  <strong>Acompanhamento da perícia:</strong> orientamos sobre a
                  avaliação médica ou social do INSS e preparamos a
                  documentação de apoio.
                </li>
                <li>
                  <strong>Recurso em caso de negativa:</strong> entramos com
                  recurso administrativo ou ação judicial para reverter a
                  decisão e garantir os valores retroativos.
                </li>
              </ol>
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
            <section>
              <h2>Veja também</h2>
              <ul>
                <li>
                  <Link href="/servicos/aposentadorias">
                    Aposentadorias — planeje seu benefício com o maior valor
                    possível
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/auxilio-doenca-pensao">
                    Auxílio-Doença e Pensão por Morte — reversão de negativas
                    por incapacidade
                  </Link>
                </li>
                <li>
                  <Link href="/servicos/planejamento-previdenciario">
                    Planejamento Previdenciário — estratégia para a melhor
                    aposentadoria
                  </Link>
                </li>
              </ul>
            </section>
          </article>

          <ServiceSidebar
            icon="pi-whatsapp"
            title="Agendar Consulta"
            description="Analisamos seu caso detalhadamente para garantir sua segurança financeira. Fale agora com nossa equipe."
          />
        </div>
      </main>
      <AboutAuthor />
    </div>
    </>
  );
}
