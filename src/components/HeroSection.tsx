'use client';

import { useEffect, useState } from 'react';
import styles from '@/assets/styles/HeroSection.module.scss';

const HeroSection = () => {
    const messages = [
        'Advocacia com excelência e compromisso.',
        'Direito previdenciário com propósito.',
        'Justiça com humanidade e segurança.'
    ];

    const [textIndex, setTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentMessage = messages[textIndex];
        if (charIndex <= currentMessage.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(currentMessage.substring(0, charIndex));
                setCharIndex(charIndex + 1);
            }, 70);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCharIndex(0);
                setTextIndex((textIndex + 1) % messages.length);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, textIndex]);

    return (
        <section className={styles.hero} id='inicio' role="region" aria-labelledby="hero-title">
            <div className={styles.container}>
                <div className={styles.text}>
                    <header>
                        <h1 id="hero-title" className={styles.title}>{displayedText}</h1>
                        <p className={styles.slogan}>
                            Experiência, eficiência e credibilidade.
                        </p>
                    </header>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;