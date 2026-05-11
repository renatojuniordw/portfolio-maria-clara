import { Metadata } from "next";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/jsonLd";
import { buildFaqJsonLd, FAQ_PLANEJAMENTO } from "@/lib/faqs";
import ServicePageLayout from "@/components/ServicePageLayout";
import RelatedServices from "@/components/RelatedServices";

const PAGE_URL = "https://www.mariaclarasantos.adv.br/servicos/planejamento-previdenciario";
const PAGE_TITLE = "Planejamento Previdenciário em Recife";
const OG_IMAGE = {
  url: "https://www.mariaclarasantos.adv.br/Maria_Clara-adv-03.png",
  width: 1200,
  height: 630,
  alt: "Dra. Maria Clara Santos - Advogada Previdenciária em Recife",
};

export const metadata: Metadata = {
  title: "Planejamento Previdenciário em Recife | Dra. Maria Clara Santos",
  description:
    "Planejamento previdenciário em Recife. Saiba quando se aposentar, quanto contribuir e como receber o valor máximo do INSS.",
  keywords: [
    "planejamento previdenciário recife",
    "quanto pagar de inss recife",
    "cálculo de aposentadoria recife",
    "quando vou me aposentar recife",
    "consultoria previdenciária recife",
    "planejamento previdenciário pernambuco",
    "consultoria previdenciária camaragibe",
    "advogado servidor público pernambuco",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Planejamento Previdenciário - Invista no seu Amanhã de Força Estratégica",
    description:
      "Evite surpresas negativas. Planejamos seu benefício para que você tenha a melhor aposentadoria possível, com segurança jurídica e economia.",
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Planejamento Previdenciário em Recife | Dra. Maria Clara Santos",
    description:
      "Evite surpresas negativas. Planejamos seu benefício para que você tenha a melhor aposentadoria possível, com segurança jurídica e economia.",
    images: [OG_IMAGE.url],
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd(PAGE_TITLE, PAGE_URL);

const serviceJsonLd = buildServiceJsonLd(
  "Planejamento Previdenciário Estratégico",
  "Consultoria técnica para planejamento de aposentadoria com máxima eficiência contributiva e segurança jurídica em Recife e Pernambuco.",
  PAGE_URL,
);

const faqJsonLd = buildFaqJsonLd(FAQ_PLANEJAMENTO);

export default function PlanejamentoPage() {
  return (
    <ServicePageLayout
      breadcrumbJsonLd={breadcrumbJsonLd}
      title={PAGE_TITLE}
      subtitle={
        <>
          A inteligência aplicada ao seu benefício. Planejar hoje para garantir o{" "}
          <strong>maior valor de recebimento</strong> e o menor custo amanhã.
        </>
      }
      serviceJsonLd={serviceJsonLd}
      faqJsonLd={faqJsonLd}
      sidebarIcon="pi-chart-line"
      sidebarTitle="Solicitar Planejamento"
      sidebarDescription="Deseja saber exatamente quanto falta para se aposentar com o valor máximo? Deixe nossa equipe estratégica planejar o seu futuro."
    >
      <section>
        <h2>O Que é o Planejamento?</h2>
        <p>
          O planejamento previdenciário é um serviço preventivo indispensável para
          quem deseja se aposentar com tranquilidade e inteligência. Através de
          cálculos detalhados e análise de múltiplos cenários, definimos a
          estratégia ideal para que você obtenha o melhor ROI (Retorno sobre
          Investimento).
        </p>
        <p>
          <strong>Ao planejar, você evita:</strong>
        </p>
        <ul>
          <li>
            Pagar contribuições do INSS com valores desnecessariamente altos;
          </li>
          <li>
            Aposentar-se em uma regra menos vantajosa por simples desconhecimento
            técnico;
          </li>
          <li>
            Ter o benefício negado no futuro por pendências ignoradas no CNIS hoje.
          </li>
        </ul>
      </section>

      <section>
        <h2>Como Funciona a Consultoria Técnica?</h2>
        <p>
          A partir do seu histórico completo de vida e trabalho, realizamos um
          dossiê técnico:
        </p>
        <ul>
          <li>
            <strong>Auditoria Profunda do CNIS:</strong> Identificamos lacunas,
            erros e tempos de contribuições que precisam de acerto imediato;
          </li>
          <li>
            <strong>Projeção de Cenários:</strong> Simulamos todas as regras de
            transição da reforma de 2019 e identificamos o momento exato de cada
            uma;
          </li>
          <li>
            <strong>Cálculo do ROI:</strong> Demonstramos claramente em quanto
            tempo você recuperará o valor investido na previdência (mês a mês);
          </li>
          <li>
            <strong>Correção Preventiva:</strong> Deixamos tudo pronto para que sua
            aposentadoria seja automática e sem exigências do INSS.
          </li>
        </ul>
      </section>

      <section>
        <h2>Como funciona o planejamento previdenciário?</h2>
        <ol>
          <li>
            <strong>Levantamento do histórico:</strong> coletamos todo o histórico
            de trabalho e contribuições, formais e informais.
          </li>
          <li>
            <strong>Auditoria profunda do CNIS:</strong> identificamos lacunas,
            erros e períodos que precisam de regularização imediata.
          </li>
          <li>
            <strong>Simulação de cenários:</strong> calculamos todas as regras de
            transição da Reforma de 2019 e o impacto de cada uma no valor do seu
            benefício.
          </li>
          <li>
            <strong>Definição da estratégia:</strong> escolhemos o momento ideal
            para pedir a aposentadoria e o valor de contribuição mais eficiente.
          </li>
          <li>
            <strong>Correção preventiva:</strong> regularizamos tudo antes do
            pedido para que a concessão seja automática, sem exigências do INSS.
          </li>
        </ol>
      </section>

      <section>
        <h2>O Valor de uma Estratégia</h2>
        <p>
          O planejamento é um investimento em segurança. Um pequeno ajuste no valor
          da sua contribuição ou na escolha do mês correto para pedir o benefício
          pode representar uma diferença de centenas de milhares de reais ao longo
          de toda a sua vida de aposentado.
        </p>
      </section>

      <RelatedServices slugAtual="planejamento-previdenciario" />
    </ServicePageLayout>
  );
}
