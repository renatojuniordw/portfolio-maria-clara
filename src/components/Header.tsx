'use client';

import Image from 'next/image';
import logo from '@/assets/images/logo-footer.png';
import logoScroll from '@/assets/images/Maria_Clara-adv-03.png';
import { useEffect, useState } from 'react';

import { Menubar } from 'primereact/menubar';

import styles from '@/assets/styles/Header.module.scss';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

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
                                width={scrolled || isMobile ? 55 : 450}
                                height={scrolled || isMobile ? 45 : 73}
                            />
                        );
                    })()}
                </div>
                <Menubar model={items} className={styles.menu} />
            </nav>
        </header>
    );
};

export default Header;