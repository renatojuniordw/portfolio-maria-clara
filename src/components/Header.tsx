'use client';

import Image from 'next/image';
import logo from '@/assets/images/logo-footer.png';
import logoScroll from '@/assets/images/Maria_Clara-adv-03.png';
import { useEffect, useState } from 'react';

import styles from '@/assets/styles/Header.module.scss';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    const items = [
        { label: 'Início', url: '#inicio' },
        { label: 'Sobre a doutora', url: '#sobre' },
        { label: 'Área de atuação', url: '#servicos' },
        { label: 'Principais dúvidas', url: '#faq' },
    ];

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    {(() => {
                        const logoToShow = isMobile ? logoScroll : (scrolled ? logoScroll : logo);
                        return (
                            <Image
                                src={logoToShow}
                                alt="Logo"
                                width={scrolled || isMobile ? 55 : 350}
                                height={scrolled || isMobile ? 45 : 73}
                            />
                        );
                    })()}
                </div>
                <div className={styles.navRight}>
                    <button
                        className={styles.hamburger}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="pi pi-bars" />
                    </button>
                    <ul
                        className={`${styles.menuItems} ${isMobileMenuOpen ? styles.menuOpen : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {items.map((item) => (
                            <li key={item.label}>
                                <a href={item.url}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;