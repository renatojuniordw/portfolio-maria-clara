import Link from "next/link";
import styles from "@/assets/styles/ServicePage.module.scss";

const ServiceBackLink = () => (
  <Link href="/#servicos" className={styles.backLink}>
    <i className="pi pi-arrow-left"></i> Voltar para serviços
  </Link>
);

export default ServiceBackLink;
