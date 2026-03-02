"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import styles from "@/assets/styles/Header.module.scss";
import logo from "@/assets/images/Maria_Clara-adv-03.png";
import { CONSTANTS } from "@/constants/constants";

const WhatsAppButton = ({ className = "" }: { className?: string }) => (
  <a
    href={CONSTANTS.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    className={`${styles.whatsappButton} ${className}`}
  >
    Consultar meu Direito
  </a>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    // Definir hash inicial e adicionar listener
    setCurrentHash(window.location.hash);
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const items = [
    { label: "Início", url: "#inicio" },
    { label: "Soluções", url: "#servicos" },
    { label: "Diferenciais", url: "#estatisticas" },
    { label: "Sobre mim", url: "#sobre" },
    { label: "Dúvidas", url: "#faq" },
  ];

  return (
    <header className={styles.header} role="banner">
      <nav className={styles.nav} aria-label="Menu principal">
        <div className={styles.logo}>
          <Image
            src={logo}
            alt="Logo Dra. Maria Clara Santos"
            width={200}
            height={60}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.navRight}>
          <button
            className={styles.hamburger}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="pi pi-bars" />
          </button>
          <ul
            className={`${styles.menuItems} ${isMobileMenuOpen ? styles.menuOpen : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.url}
                  aria-current={currentHash === item.url ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className={styles.mobileOnly}>
              <WhatsAppButton />
            </li>
          </ul>

          <WhatsAppButton className={styles.desktopOnly} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
