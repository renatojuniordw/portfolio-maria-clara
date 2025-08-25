'use client';

import Image from 'next/image';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

import styles from '@/assets/styles/Footer.module.scss';
import logo from '@/assets/images/logo-footer.png';
import { CONSTANTS } from '@/constants/constants';

const Footer = () => {
    return (
        <footer className={styles.footer} role="contentinfo">
            <div className={styles.container}>
                <div className={styles.column}>
                    <div className={styles.socials}>
                        <a href={CONSTANTS.linkedin} target='_blank' rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedinIn size={22} />
                        </a>
                        <a href={CONSTANTS.whatsapp} target='_blank' rel="noopener noreferrer" aria-label="Whatsapp">
                            <FaWhatsapp size={22} />
                        </a>
                        <a href={CONSTANTS.instagram} target='_blank' rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram size={22} />
                        </a>
                    </div>
                    <div className={styles.contact}>
                        <p className={styles.contactLine}>
                            {CONSTANTS.telephone}
                        </p>
                        <p className={styles.contactLine}>
                            {CONSTANTS.email}
                        </p>
                    </div>
                </div>
                <div className={`${styles.column}`}>
                    <Image src={logo} alt="Logo Maria Clara" width={350} height={60} />
                </div>
            </div>
            <p className={styles.copyright}>© {new Date().getFullYear()} Maria Clara Santos. Todos os direitos reservados. <br />
                OAB/PE 60.655 – Maria Clara Santos, Advogada Previdenciária.</p>

        </footer>
    );
};

export default Footer;
