import Link from "next/link";
import styles from "@/assets/styles/NotFound.module.scss";
import { CONSTANTS } from "@/constants/constants";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <span className={styles.errorCode}>404</span>
        <h1 className={styles.title}>Página não encontrada</h1>
        <p className={styles.description}>
          O conteúdo que você está procurando não existe ou foi movido.
          <br />
          Não se preocupe, ainda podemos ajudar com o seu benefício.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.homeButton}>
            Voltar para o Início
          </Link>
          <a
            href={CONSTANTS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
