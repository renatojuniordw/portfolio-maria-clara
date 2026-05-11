import styles from "@/assets/styles/ServicePage.module.scss";
import AboutAuthor from "@/components/AboutAuthor";
import ServiceBackLink from "@/components/ServiceBackLink";
import ServiceSidebar from "@/components/ServiceSidebar";
import JsonLdScript from "@/components/JsonLdScript";

interface ServicePageLayoutProps {
  title: string;
  subtitle: React.ReactNode;
  serviceJsonLd: object;
  faqJsonLd: object;
  sidebarIcon: string;
  sidebarTitle: string;
  sidebarDescription: string;
  children: React.ReactNode;
}

export default function ServicePageLayout({
  title,
  subtitle,
  serviceJsonLd,
  faqJsonLd,
  sidebarIcon,
  sidebarTitle,
  sidebarDescription,
  children,
}: ServicePageLayoutProps) {
  return (
    <>
      <JsonLdScript data={serviceJsonLd} />
      <JsonLdScript data={faqJsonLd} />
      <div className={styles.servicePage}>
        <header className={styles.hero}>
          <div className={styles.container}>
            <ServiceBackLink />
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
        </header>

        <main className={styles.contentWrapper}>
          <div className={styles.grid}>
            <article className={styles.mainContent}>{children}</article>
            <ServiceSidebar
              icon={sidebarIcon}
              title={sidebarTitle}
              description={sidebarDescription}
            />
          </div>
        </main>

        <AboutAuthor />
      </div>
    </>
  );
}
