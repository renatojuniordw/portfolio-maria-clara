"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";

import styles from "@/assets/styles/Header.module.scss";
import logo from "@/assets/images/Maria_Clara-adv-03.png";
import { CONSTANTS } from "@/constants/constants";

const WhatsAppButton = ({ className = "" }: { className?: string }) => (
  <a
    id="link_consultar-direito"
    href={CONSTANTS.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    className={`${styles.whatsappButton} ${className}`}
  >
    Consultar meu Direito
  </a>
);

const navItems = [
  { label: "Início", url: "#inicio" },
  { label: "Soluções", url: "#servicos" },
  { label: "Diferenciais", url: "#estatisticas" },
  { label: "Sobre mim", url: "#sobre" },
  { label: "Dúvidas", url: "#faq" },
];

interface NavListProps {
  currentHash: string;
  pathname: string;
  onClose: () => void;
  isOpen: boolean;
}

const NavList = memo(function NavList({ currentHash, pathname, onClose, isOpen }: NavListProps) {
  return (
    <ul
      id="primary-navigation"
      className={`${styles.menuItems} ${isOpen ? styles.menuOpen : ""}`}
      onClick={onClose}
    >
      {navItems.map((item) => (
        <li key={item.label}>
          <Link
            href={pathname === "/" ? item.url : `/${item.url}`}
            aria-current={currentHash === item.url ? "page" : undefined}
          >
            {item.label}
          </Link>
        </li>
      ))}
      <li className={styles.mobileOnly}>
        <WhatsAppButton />
      </li>
    </ul>
  );
});

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const pathname = usePathname();

  const toggleMenu = useCallback(
    () => setIsMobileMenuOpen((prev) => !prev),
    []
  );

  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  useEffect(() => {
    setCurrentHash(window.location.hash);
    const handleHashChange = () => setCurrentHash(window.location.hash);
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className={styles.header} role="banner">
      <nav className={styles.nav} aria-label="Menu principal">
        <Link href="/" className={styles.logo}>
          <Image
            src={logo}
            alt="Logo Dra. Maria Clara Santos"
            width={200}
            height={60}
            priority
            style={{ objectFit: "contain" }}
          />
        </Link>
        <div className={styles.navRight}>
          <button
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-navigation"
          >
            <FaBars aria-hidden="true" />
          </button>
          <NavList
            currentHash={currentHash}
            pathname={pathname}
            onClose={closeMenu}
            isOpen={isMobileMenuOpen}
          />
          <WhatsAppButton className={styles.desktopOnly} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
