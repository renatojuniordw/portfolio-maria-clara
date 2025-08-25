'use client';

import styles from '@/assets/styles/AboutSection.module.scss';
import { Divider } from 'primereact/divider';


const AboutSection = () => {
    return (
        <section className={styles.about} id="sobre">
            <div className={styles.container}>

                <div className={styles.textWrapper}>
                    <h2 className="section-title">Sobre
                        <br /> a Doutora</h2>
                    <Divider />
                    <p className={styles.description}>
                        Sou bacharela em Direito pela UNICAP (2021.1), com MBA em Mediação e Arbitragem pela mesma instituição (2023), e atualmente curso pós-graduação em Direito da Seguridade Social – Direito e Prática Previdenciária – pela Faculdade Legale (2025/2026).

                        <br /><br />
                        Com dedicação e seriedade, atuo exclusivamente em causas voltadas ao Direito Previdenciário, auxiliando meus clientes na conquista do melhor benefício junto ao INSS, sempre de forma justa, segura e estratégica.

                        <br /><br />
                        Meu compromisso é oferecer um atendimento humanizado, transparente e eficiente, com foco na segurança jurídica e na tranquilidade de cada cliente.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;