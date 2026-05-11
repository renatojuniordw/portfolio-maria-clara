import Link from "next/link";
import styles from "@/assets/styles/ServicePage.module.scss";

const TODOS_OS_SERVICOS = [
  {
    slug: "aposentadorias",
    titulo: "Aposentadorias",
    descricao: "planeje seu benefício com o maior valor possível",
  },
  {
    slug: "auxilio-doenca-pensao",
    titulo: "Auxílio-Doença e Pensão por Morte",
    descricao: "reversão de negativas por incapacidade e amparo familiar",
  },
  {
    slug: "bpc-loas",
    titulo: "BPC/LOAS",
    descricao: "benefício assistencial para idosos e pessoas com deficiência",
  },
  {
    slug: "planejamento-previdenciario",
    titulo: "Planejamento Previdenciário",
    descricao: "estratégia para a melhor aposentadoria",
  },
];

interface RelatedServicesProps {
  slugAtual: string;
}

export default function RelatedServices({ slugAtual }: RelatedServicesProps) {
  return (
    <section>
      <h2>Veja também</h2>
      <ul>
        {TODOS_OS_SERVICOS.filter((s) => s.slug !== slugAtual).map((s) => (
          <li key={s.slug}>
            <Link href={`/servicos/${s.slug}`}>
              {s.titulo} — {s.descricao}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
