'use client';

import { Divider } from 'primereact/divider';
import styles from '@/assets/styles/ServicesSection.module.scss';

const ServicesSection = () => {
    const services = [
        {
            title: 'Auxílio no INSS',
        },
        {
            title: 'Aposentadorias, Pensões e Auxílios',
        },
        {
            title: 'BPC / LOAS',
        },
        {
            title: 'Planejamento Previdenciário',
        }
    ];

    return (
        <section
            className={styles.services}
            id="servicos"
            aria-labelledby="services-heading"
            role="region"
        >
            <header>
                <h2 id="services-heading" className="section-title">
                    Área <span aria-hidden="true"><br /></span>de atuação
                </h2>
                <Divider />
            </header>
            <div className={styles.grid}>
                <div className={styles.text}>
                    Sou especializada em Direito Previdenciário, oferecendo um atendimento humanizado e estratégico para garantir seus direitos. Atendo com empatia e conhecimento técnico para buscar o melhor benefício possível junto ao INSS.
                </div>
                <ul className={styles.list}>
                    {services.map((service, index) => (
                        <li key={index} className={styles.item}>
                            {service.title}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ServicesSection;