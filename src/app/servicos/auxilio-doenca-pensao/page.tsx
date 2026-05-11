import { Metadata } from "next";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/jsonLd";
import { buildFaqJsonLd, FAQ_AUXILIO_DOENCA } from "@/lib/faqs";
import ServicePageLayout from "@/components/ServicePageLayout";
import RelatedServices from "@/components/RelatedServices";

const PAGE_URL = "https://www.mariaclarasantos.adv.br/servicos/auxilio-doenca-pensao";
const PAGE_TITLE = "Auxílio-Doença e Pensão por Morte em Recife";
const OG_IMAGE = {
  url: "https://www.mariaclarasantos.adv.br/Maria_Clara-adv-03.png",
  width: 1200,
  height: 630,
  alt: "Dra. Maria Clara Santos - Advogada Previdenciária em Recife",
};

export const metadata: Metadata = {
  title: "Auxílio-Doença e Pensão por Morte Recife | INSS",
  description:
    "Auxílio-doença cortado ou pensão por morte negada em Recife? Revertemos negativas do INSS e garantimos seus direitos. Fale agora.",
  keywords: [
    "auxílio doença recife",
    "advogado auxílio doença recife",
    "pensao por morte recife",
    "inss benefícios incapacidade recife",
    "advogado inss recife",
    "auxílio doença pernambuco",
    "pensão por morte pernambuco",
    "advogado inss camaragibe",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "INSS - Auxílio-Doença, Pensão por Morte e Amparo Familiar em Recife",
    description:
      "Reversão de benefício negado por perícia médica. Pensão por morte para união estável e filhos em Recife.",
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auxílio-Doença e Pensão por Morte Recife | INSS",
    description:
      "Reversão de benefício negado por perícia médica. Pensão por morte para união estável e filhos em Recife.",
    images: [OG_IMAGE.url],
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd(PAGE_TITLE, PAGE_URL);

const serviceJsonLd = buildServiceJsonLd(
  "Auxílio-Doença e Pensão por Morte pelo INSS",
  "Assessoria jurídica para reversão de auxílio-doença negado por perícia e pensão por morte em Recife.",
  PAGE_URL,
);

const faqJsonLd = buildFaqJsonLd(FAQ_AUXILIO_DOENCA);

export default function INSSPage() {
  return (
    <ServicePageLayout
      breadcrumbJsonLd={breadcrumbJsonLd}
      title={PAGE_TITLE}
      subtitle={
        <>
          Suporte técnico e acolhimento nos momentos mais difíceis. Atuação em
          benefícios por <strong>incapacidade e amparo familiar</strong> com
          rapidez.
        </>
      }
      serviceJsonLd={serviceJsonLd}
      faqJsonLd={faqJsonLd}
      sidebarIcon="pi-shield"
      sidebarTitle="Analisar Negativa"
      sidebarDescription="Teve o benefício cortado ou negado pela perícia? Não desista. Uma análise especializada pode reverter sua situação e garantir seus direitos."
    >
      <section>
        <h2>Auxílio-Doença (Incapacidade Temporária)</h2>
        <p>
          O auxílio-doença é um benefício para quem está temporariamente
          incapacitado para o trabalho. O grande problema desses casos é a perícia
          médica do INSS, que muitas vezes dá o &quot;alta médica&quot;
          precocemente, antes que o segurado esteja apto a retornar à sua
          atividade.
        </p>
        <p>Nossa atuação envolve técnica médica e jurídica para:</p>
        <ul>
          <li>
            <strong>Reintegração de Benefício:</strong> Garantir que você receba
            enquanto estiver impedido de trabalhar;
          </li>
          <li>
            <strong>Recurso em Perícia Negada:</strong> Ação judicial especializada
            contra o indeferimento injusto da perícia;
          </li>
          <li>
            <strong>Orientações Técnicas:</strong> Analisamos se seus laudos e
            exames estão nos padrões exigidos legalmente para facilitar a
            concessão.
          </li>
        </ul>
      </section>

      <section>
        <h2>Como funciona o processo para reverter uma negativa?</h2>
        <ol>
          <li>
            <strong>Análise da negativa:</strong> revisamos a carta de
            indeferimento e identificamos o motivo técnico da recusa do INSS.
          </li>
          <li>
            <strong>Avaliação da documentação médica:</strong> verificamos se os
            laudos e exames atendem aos critérios exigidos legalmente.
          </li>
          <li>
            <strong>Estratégia de recurso:</strong> definimos o melhor caminho —
            recurso administrativo ou ação judicial.
          </li>
          <li>
            <strong>Protocolo do recurso:</strong> entramos com o pedido de revisão
            formalmente e acompanhamos cada etapa do processo.
          </li>
          <li>
            <strong>Recebimento dos retroativos:</strong> garantimos o pagamento de
            todos os valores devidos desde a data do pedido original.
          </li>
        </ol>
      </section>

      <section>
        <h2>Pensão por Morte (Amparo à Família)</h2>
        <p>
          Garantir o amparo aos dependentes após o falecimento do segurado é uma
          das atuações mais delicadas e essenciais da advocacia previdenciária.
          Auxiliamos em casos complexos de:
        </p>
        <ul>
          <li>
            <strong>Comprovação de União Estável:</strong> Provamos o
            relacionamento quando não há certidão formal de casamento;
          </li>
          <li>
            <strong>Direito de Ex-Cônjuge:</strong> Garantimos a cota parte para
            quem recebia pensão alimentícia;
          </li>
          <li>
            <strong>Pensão Negada por Falta de Qualidade:</strong> Reversão de
            negativas quando o segurado estava desempregado no momento do óbito.
          </li>
        </ul>
      </section>

      <RelatedServices slugAtual="auxilio-doenca-pensao" />
    </ServicePageLayout>
  );
}
