'use client';

import Image from 'next/image';
import logo from '@/assets/images/logo-footer.png';
import logoScroll from '@/assets/images/Maria_Clara-adv-03.png';
import { useEffect, useState } from 'react';

import styles from '@/assets/styles/Header.module.scss';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Image src={scrolled ? logoScroll : logo} alt="Logo" width={scrolled ? 55 : 450} height={scrolled ? 45 : 73} />
                </div>
                <ul className={styles.menu}>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#servicos">Área de atuação</a></li>
                    <li><a href="#faq">Principais Dúvidas</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;