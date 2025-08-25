'use client';

import { Carousel } from 'primereact/carousel';
import styles from '@/assets/styles/Testimonials.module.scss';
import { Divider } from 'primereact/divider';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Ana Souza',
            feedback: 'Fui muito bem atendida. A Dra. Maria Clara me explicou tudo com paciência e clareza. Consegui minha aposentadoria sem dor de cabeça.'
        },
        {
            name: 'João Ferreira',
            feedback: 'Atendimento excelente, com empatia e profissionalismo. Recomendo de olhos fechados.'
        },
        {
            name: 'Mariana Lima',
            feedback: 'Graças ao planejamento da doutora, tive acesso ao melhor benefício. Muito grata pelo cuidado e atenção.'
        }
    ];

    const testimonialTemplate = (item: { name: string; feedback: string }) => {
        return (
            <div className={styles.card}>
                <p className={styles.feedback}>&ldquo;{item.feedback}&rdquo;</p>
                <p className={styles.name}>— {item.name}</p>
            </div>
        );
    };

    return (
        <section className={styles.testimonials}>
            <h2 className="section-title">Depoimentos</h2>
            <Divider />
            <Carousel
                value={testimonials}
                itemTemplate={testimonialTemplate}
                numVisible={1}
                numScroll={1}
                circular
                autoplayInterval={5000}
                showIndicators
                showNavigators
            />
        </section>
    );
};

export default Testimonials;
