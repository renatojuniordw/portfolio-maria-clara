'use client';

import styles from '@/assets/styles/AboutSection.module.scss';
import { Divider } from 'primereact/divider';


const AboutSection = () => {
    return (
        <section className={styles.about} id="sobre">
            <div className={styles.container}>

                <article className={styles.textWrapper} aria-labelledby="about-heading">
                    <header>
                        <h1 id="about-heading" className="section-title">
                            Sobre mim
                        </h1>
                        <Divider />
                    </header>

                    <p className={styles.description}>
                        Sou Maria Clara Santos, advogada previdenciarista com atuação especializada em Direito Previdenciário em Recife (PE). Bacharela em Direito pela UNICAP (2021.1), com MBA em Mediação e Arbitragem pela mesma instituição (2023), atualmente curso pós-graduação em Direito da Seguridade Social – Direito e Prática Previdenciária pela Faculdade Legale (2025/2026).
                        <br /><br />
                        Atuo com foco exclusivo em benefícios do INSS, como aposentadorias, pensões, auxílios e BPC/LOAS, sempre com estratégias personalizadas para garantir o melhor resultado para cada cliente. Meu trabalho é baseado em seriedade, técnica e comprometimento.
                        <br /><br />
                        Sou advogada regularmente inscrita na OAB/PE nº 60.655 e tenho como missão oferecer um atendimento humanizado e transparente, com foco na segurança jurídica e na tranquilidade de quem busca os seus direitos junto à Previdência Social.
                        <br /><br />
                        Se você procura uma advogada especialista em INSS, que atua com empatia, responsabilidade e conhecimento profundo das regras previdenciárias, conte comigo para te orientar em cada etapa do processo.
                    </p>

                </article>
            </div>
        </section>
    );
};

export default AboutSection;