'use client';

import Image from 'next/image';
import { useState } from 'react';

import logoScroll from '@/assets/images/Maria_Clara-adv-03.png';
import styles from '@/assets/styles/Header.module.scss';
import { CONSTANTS } from '@/constants/constants';

const WhatsAppButton = ({ className = '' }: { className?: string }) => (
    <a
        href={CONSTANTS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.whatsappButton} ${className}`}
    >
        Agendar consulta
    </a>
);

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const items = [
        { label: 'Início', url: '#inicio' },
        { label: 'Sobre mim', url: '#sobre' },
        { label: 'Área de atuação', url: '#servicos' },
        { label: 'Principais dúvidas', url: '#faq' },
    ];

    return (
        <header className={styles.header} role="banner">
            <nav className={styles.nav} aria-label="Menu principal">
                <div className={styles.logo}>
                    {(() => {
                        return (
                            <Image
                                src={logoScroll}
                                alt="Logo da advogada Maria Clara"
                                width={55}
                                height={50}
                            />
                        );
                    })()}
                </div>
                <div className={styles.navRight}>
                    <button
                        className={styles.hamburger}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Abrir menu"
                    >
                        <span className="pi pi-bars" />
                    </button>
                    <ul
                        className={`${styles.menuItems} ${isMobileMenuOpen ? styles.menuOpen : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {items.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.url}
                                    aria-current={typeof window !== 'undefined' && window.location.hash === item.url ? 'page' : undefined}
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