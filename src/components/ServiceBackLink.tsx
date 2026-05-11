import Link from "next/link";
import styles from "@/assets/styles/ServicePage.module.scss";

interface ServiceBackLinkProps {
  pageTitle: string;
}

const ServiceBackLink = ({ pageTitle }: ServiceBackLinkProps) => (
  <nav aria-label="Navegação de caminho" className={styles.breadcrumb}>
    <ol>
      <li>
        <Link href="/">Início</Link>
      </li>
      <li>
        <Link href="/#servicos">Serviços</Link>
      </li>
      <li aria-current="page">{pageTitle}</li>
    </ol>
  </nav>
);

export default ServiceBackLink;
