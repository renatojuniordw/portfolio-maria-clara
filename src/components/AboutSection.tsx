'use client';

import styles from '@/assets/styles/AboutSection.module.scss';
import { Divider } from 'primereact/divider';


const AboutSection = () => {
    return (
        <section className={styles.about} id="sobre">
            <div className={styles.container}>

                <div className={styles.textWrapper}>
                    <h2 className="section-title">Sobre a Doutora</h2>
                    <Divider />
                    <p className={styles.description}>
                        Com atendimento humanizado, seguro e transparente, a Dra. Maria Clara Santos é especializada em Direito Previdenciário, ajudando seus clientes a conquistar o melhor benefício junto ao INSS. Cada caso é tratado com atenção, empatia e o compromisso com a segurança jurídica.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;