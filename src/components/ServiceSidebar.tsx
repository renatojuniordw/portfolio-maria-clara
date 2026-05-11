import type { IconType } from "react-icons";
import {
  FaWhatsapp,
  FaCalendarAlt,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";
import styles from "@/assets/styles/ServicePage.module.scss";
import { CONSTANTS } from "@/constants/constants";

const ICON_MAP: Record<string, IconType> = {
  "pi-whatsapp": FaWhatsapp,
  "pi-calendar": FaCalendarAlt,
  "pi-chart-line": FaChartLine,
  "pi-shield": FaShieldAlt,
};

interface ServiceSidebarProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceSidebar = ({ icon, title, description }: ServiceSidebarProps) => {
  const IconComponent = ICON_MAP[icon] ?? FaShieldAlt;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.stickyContainer}>
        <div className={styles.contactCard}>
          <div className={styles.iconBox}>
            <IconComponent aria-hidden="true" />
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
            <FaShieldAlt aria-hidden="true" />
            <span>Ambiente Seguro e Ético OAB/PE</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ServiceSidebar;
