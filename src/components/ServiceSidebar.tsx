import styles from "@/assets/styles/ServicePage.module.scss";
import { CONSTANTS } from "@/constants/constants";

interface ServiceSidebarProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceSidebar = ({ icon, title, description }: ServiceSidebarProps) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.stickyContainer}>
        <div className={styles.contactCard}>
          <div className={styles.iconBox}>
            <i className={`pi ${icon}`}></i>
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
          <a
            href={CONSTANTS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Falar no WhatsApp
          </a>
          <div className={styles.safeBadge}>
            <i className="pi pi-shield"></i>
            <span>Ambiente Seguro e Ético OAB/PE</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ServiceSidebar;
