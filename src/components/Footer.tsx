'use client';

import Image from 'next/image';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import styles from '@/assets/styles/Footer.module.scss';
import logo from '@/assets/images/logo-footer.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <Image src={logo} alt="Logo Maria Clara" width={350} height={60} />
                </div>
                <div className={styles.column}>
                    <div className={styles.contact}>
                        <p className={styles.contactLine}>
                            (81) 98524-0415
                        </p>
                        <p className={styles.contactLine}>
                            contato@mariaclara.adv.br
                        </p>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.socials}>
                        <a href="#" aria-label="LinkedIn"><FaLinkedinIn size={22} /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram size={22} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
