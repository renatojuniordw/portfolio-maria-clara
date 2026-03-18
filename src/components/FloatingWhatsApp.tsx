import styles from "@/assets/styles/FloatingWhatsApp.module.scss";
import { CONSTANTS } from "@/constants/constants";

const FloatingWhatsApp = () => {
  return (
    <a
      href={CONSTANTS.whatsapp}
      className={styles.floatingButton}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Dra. Maria Clara no WhatsApp"
    >
      <i className="pi pi-whatsapp"></i>
      <span className={styles.tooltip}>Falar com a Dra.</span>
    </a>
  );
};

export default FloatingWhatsApp;
