import { Metadata } from "next";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/jsonLd";
import { buildFaqJsonLd, FAQ_APOSENTADORIAS } from "@/lib/faqs";
import ServicePageLayout from "@/components/ServicePageLayout";
import RelatedServices from "@/components/RelatedServices";

const PAGE_URL = "https://www.mariaclarasantos.adv.br/servicos/aposentadorias";
const PAGE_TITLE = "Aposentadoria pelo INSS em Recife";
const OG_IMAGE = {
  url: "https://www.mariaclarasantos.adv.br/Maria_Clara-adv-03.png",
  width: 1200,
  height: 630,
  alt: "Dra. Maria Clara Santos - Advogada Previdenciária em Recife",
};

export const metadata: Metadata = {
  title: "Aposentadoria em Recife | Dra. Maria Clara Santos",
  description:
    "Especialista em Aposentadoria por Idade, Tempo e Especial em Recife. Garanta o maior valor de benefício e receba todos os atrasados.",
  keywords: [
    "aposentadoria recife",
    "advogado aposentadoria recife",
    "inss aposentadoria recife",
    "tempo de contribuição inss recife",
    "aposentadoria especial recife",
    "advogado aposentadoria pernambuco",
    "advogado aposentadoria camaragibe",
    "aposentadoria especial pernambuco",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Aposentadorias - Planeje seu Benefício e Garanta seu Futuro em Recife",
    description:
      "Saiba como se aposentar com o maior valor possível. Orientação técnica sobre regras de transição e direito adquirido.",
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aposentadoria em Recife | Dra. Maria Clara Santos",
    description:
      "Saiba como se aposentar com o maior valor possível. Orientação técnica sobre regras de transição e direito adquirido.",
    images: [OG_IMAGE.url],
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd(PAGE_TITLE, PAGE_URL);

const serviceJsonLd = buildServiceJsonLd(
  "Assessoria em Aposentadorias pelo INSS",
  "Planejamento e assessoria jurídica para aposentadoria por idade, tempo de contribuição e especial em Recife.",
  "https://www.mariaclarasantos.adv.br/servicos/aposentadorias",
);

const faqJsonLd = buildFaqJsonLd(FAQ_APOSENTADORIAS);

export default function AposentadoriasPage() {
  return (
    <ServicePageLayout
      breadcrumbJsonLd={breadcrumbJsonLd}
      title={PAGE_TITLE}
      subtitle={
        <>
          A certeza de que sua vida de trabalho será recompensada com o{" "}
          <strong>benefício máximo</strong> que você merece. Analisamos cada
          detalhe do seu histórico.
        </>
      }
      serviceJsonLd={serviceJsonLd}
      faqJsonLd={faqJsonLd}
      sidebarIcon="pi-calendar"
      sidebarTitle="Verificar Possibilidade"
      sidebarDescription="Planeje seu futuro com quem entende. Analisamos seu tempo e suas contribuições para garantir o melhor benefício."
    >
      <section>
        <h2>Tipos de Aposentadoria</h2>
        <p>
          Após a Reforma da Previdência (EC 103/2019), as regras de aposentadoria
          no Brasil mudaram drasticamente. Com diversas regras de transição
          vigentes, é fundamental uma análise individual para identificar qual o
          melhor caminho para cada segurado.
        </p>
        <ul>
          <li>
            <strong>Por Idade:</strong> Uma das mais comuns, para quem não possui
            longo período de contribuição.
          </li>
          <li>
            <strong>Por Tempo de Contribuição:</strong> Foco em quem começou a
            trabalhar cedo e possui longo período de recolhimento.
          </li>
          <li>
            <strong>Aposentadoria Especial:</strong> Para quem trabalhou em
            condições prejudiciais à saúde (ruído, calor, agentes químicos).
          </li>
          <li>
            <strong>Pessoas com Deficiência (PCD):</strong> Regras diferenciadas
            e vantajosas para quem possui impedimentos físicos ou intelectuais.
          </li>
        </ul>
      </section>

      <section>
        <h2>O Perigo do Erro no INSS</h2>
        <p>
          O INSS frequentemente falha em reconhecer períodos de atividade
          especial, tempos de serviço militar, tempo rural ou períodos trabalhados
          em outro país. Esses erros resultam em benefícios muito menores do que o
          segurado teria direito.
        </p>
        <p>
          Meu trabalho envolve auditar todo o CNIS (Cadastro Nacional de
          Informações Sociais) e documentos complementares para garantir que nem
          um centavo seja perdido.
        </p>
      </section>

      <section>
        <h2>Como funciona a assessoria para aposentadoria?</h2>
        <ol>
          <li>
            <strong>Análise do histórico contributivo:</strong> auditamos todo o
            CNIS para identificar períodos não reconhecidos pelo INSS.
          </li>
          <li>
            <strong>Simulação de cenários:</strong> calculamos todas as regras de
            transição vigentes e identificamos a mais vantajosa para o seu perfil.
          </li>
          <li>
            <strong>Correção do CNIS:</strong> regularizamos pendências e períodos
            divergentes antes de protocolar o requerimento.
          </li>
          <li>
            <strong>Protocolo do requerimento:</strong> entramos com o pedido no
            INSS garantindo que todos os documentos estejam corretos.
          </li>
          <li>
            <strong>Acompanhamento até a concessão:</strong> monitoramos o
            processo e recorremos em caso de negativa ou cálculo incorreto.
          </li>
        </ol>
      </section>

      <section>
        <h2>Vantagens da Assessoria Jurídica</h2>
        <ul>
          <li>
            <strong>Agilidade Extrema:</strong> Evite o vai-e-vem de documentos e
            exigências do INSS que travam o processo;
          </li>
          <li>
            <strong>Valor Máximo Garantido:</strong> Garantia de que a regra de
            cálculo aplicada seja a mais vantajosa para você;
          </li>
          <li>
            <strong>Segurança Técnica:</strong> Antes de aceitar sua aposentadoria,
            verificamos se todos os períodos foram considerados corretamente.
          </li>
        </ul>
      </section>

      <RelatedServices slugAtual="aposentadorias" />
    </ServicePageLayout>
  );
}
