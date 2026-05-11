import { Metadata } from "next";
import { buildServiceJsonLd } from "@/lib/jsonLd";
import { buildFaqJsonLd, FAQ_BPC_LOAS } from "@/lib/faqs";
import ServicePageLayout from "@/components/ServicePageLayout";
import RelatedServices from "@/components/RelatedServices";

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
    title: "BPC / LOAS - Garanta seu Benefício do INSS com Especialista em Recife",
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

const faqJsonLd = buildFaqJsonLd(FAQ_BPC_LOAS);

export default function BPCPage() {
  return (
    <ServicePageLayout
      title="BPC/LOAS em Recife e Pernambuco"
      subtitle={
        <>
          Apoio jurídico especializado para garantir{" "}
          <strong>dignidade e renda</strong> a quem mais precisa. O benefício
          assistencial é um direito, não um favor.
        </>
      }
      serviceJsonLd={serviceJsonLd}
      faqJsonLd={faqJsonLd}
      sidebarIcon="pi-whatsapp"
      sidebarTitle="Agendar Consulta"
      sidebarDescription="Analisamos seu caso detalhadamente para garantir sua segurança financeira. Fale agora com nossa equipe."
    >
      <section>
        <h2>O que é o BPC/LOAS?</h2>
        <p>
          O Benefício de Prestação Continuada (BPC), previsto na Lei Orgânica da
          Assistência Social (LOAS), é um benefício de um salário mínimo mensal
          pago pelo Governo Federal a pessoas que nunca contribuíram para o INSS,
          mas que preenchem requisitos específicos de idade ou deficiência.
        </p>
        <p>
          Muitas vezes o INSS nega esse benefício por erros automáticos de cálculo
          de renda ou avaliações médicas superficiais. Como advogada especialista,
          meu papel é reverter essas negativas e garantir que a justiça seja feita.
        </p>
      </section>

      <section>
        <h2>Quem tem direito ao benefício?</h2>
        <p>
          Para ter acesso ao BPC/LOAS, é necessário cumprir dois requisitos
          principais:
        </p>
        <ul>
          <li>
            <strong>Idosos:</strong> Pessoas com 65 anos ou mais que não possuem
            meios de prover a própria manutenção.
          </li>
          <li>
            <strong>Pessoas com Deficiência:</strong> Pessoas de qualquer idade que
            possuam impedimentos de longo prazo (mínimo de 2 anos).
          </li>
          <li>
            <strong>Renda Familiar:</strong> A renda per capita da família deve ser
            inferior a 1/4 do salário mínimo (podendo ser flexibilizada
            judicialmente).
          </li>
        </ul>
      </section>

      <section>
        <h2>Como funciona o processo para obter o BPC/LOAS?</h2>
        <ol>
          <li>
            <strong>Análise do perfil:</strong> verificamos se você preenche os
            requisitos de idade, deficiência e renda familiar.
          </li>
          <li>
            <strong>Reunião de documentos:</strong> listamos exatamente quais
            documentos o INSS exige para o seu caso específico.
          </li>
          <li>
            <strong>Protocolo do pedido:</strong> realizamos o agendamento e
            acompanhamos a entrada do requerimento no INSS.
          </li>
          <li>
            <strong>Acompanhamento da perícia:</strong> orientamos sobre a avaliação
            médica ou social do INSS e preparamos a documentação de apoio.
          </li>
          <li>
            <strong>Recurso em caso de negativa:</strong> entramos com recurso
            administrativo ou ação judicial para reverter a decisão e garantir os
            valores retroativos.
          </li>
        </ol>
      </section>

      <section>
        <h2>Por que contratar uma especialista?</h2>
        <p>
          O processo de solicitação do BPC envolve critérios subjetivos do INSS que
          frequentemente barram pedidos legítimos. Atuamos com análise estratégica
          de documentos e provas para:
        </p>
        <ul>
          <li>Reverter indeferimentos do INSS com agilidade;</li>
          <li>
            Garantir o pagamento de todos os valores retroativos (atrasados);
          </li>
          <li>
            Realizar o cálculo correto da renda familiar, excluindo gastos com
            medicamentos e fraldas;
          </li>
          <li>
            Acompanhar perícias médicas e sociais com orientação técnica e
            jurídica.
          </li>
        </ul>
      </section>

      <RelatedServices slugAtual="bpc-loas" />
    </ServicePageLayout>
  );
}
