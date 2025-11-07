'use client';

import { useState, useMemo } from 'react';
import styles from '@/assets/styles/PhoneVerifier.module.scss';
import { Divider } from 'primereact/divider';

const OFFICIAL_NUMBERS = [
    '81985240415',
    '985240415',
];

function normalizeBRPhone(input: string): string {
    const onlyDigits = (input || '').replace(/\D+/g, '');
    if (onlyDigits.startsWith('55')) {
        const rest = onlyDigits.slice(2);
        if (rest.length === 10 || rest.length === 11) return rest;
    }
    const noLeadingZeros = onlyDigits.replace(/^0+/, '');
    if (noLeadingZeros.length === 10 || noLeadingZeros.length === 11) return noLeadingZeros;
    return onlyDigits;
}

function formatBRPhone(digits: string): string {
    const d = digits.replace(/\D+/g, '');
    if (d.length === 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
    if (d.length === 11) return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
    return digits;
}

function stripDDD(digits: string): string {
    if (digits.length === 11) return digits.slice(-9);
    if (digits.length === 10) return digits.slice(-8);
    return digits;
}

const PhoneVerifier = () => {
    const [raw, setRaw] = useState('');
    const [checked, setChecked] = useState(false);

    const normalized = useMemo(() => normalizeBRPhone(raw), [raw]);
    const normalizedNoDDD = useMemo(() => stripDDD(normalized), [normalized]);
    const lookupSets = useMemo(() => {
        const withDDD = new Set(OFFICIAL_NUMBERS.map(normalizeBRPhone));
        const withoutDDD = new Set(Array.from(withDDD).map(stripDDD));
        return { withDDD, withoutDDD };
    }, []);
    const isValidLength = normalized.length >= 8 && normalized.length <= 11;
    const isOfficial = isValidLength && (
        lookupSets.withDDD.has(normalized) ||
        lookupSets.withoutDDD.has(normalizedNoDDD)
    );
    const resultId = 'phone-verifier-result';

    function handleCheck(e: React.FormEvent) {
        e.preventDefault();
        setChecked(true);
    }

    function handleClear() {
        setRaw('');
        setChecked(false);
    }

    return (
        <section
            className={styles.verifierSection}
            id="verificador"
            aria-labelledby="phone-verifier-heading"
            role="region"
        >
            <header>
                <h2 id="phone-verifier-heading" className="section-title">
                    Valide se o <span aria-hidden="true"><br /></span>número é oficial
                </h2>
                <Divider />
            </header>

            <div className={styles.grid}>
                <div className={styles.text}>
                    <p className={styles.subtitle}>
                        Digite o telefone que está entrando em contato com você. Conferimos se ele pertence aos nossos
                        canais oficiais para garantir sua segurança.
                    </p>

                    <div className={styles.alertBox}>
                        <h3>Alerta de golpes</h3>
                        <ul>
                            <li>Converse apenas pelos nossos canais oficiais.</li>
                            <li>Nunca solicitamos pagamentos por números desconhecidos.</li>
                            <li>Desconfie de urgência ou descontos fora do comum.</li>
                            <li>Confirme o número aqui antes de transferir qualquer valor.</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.panel}>
                    <form onSubmit={handleCheck} className={styles.form}>
                        <label htmlFor="phoneNumber" className={styles.visuallyHidden}>
                            Número de telefone para validação
                        </label>
                        <input
                            id="phoneNumber"
                            type="tel"
                            inputMode="tel"
                            placeholder="Ex: (81) 98765-4321"
                            value={raw}
                            onChange={(e) => setRaw(e.target.value)}
                            className={styles.input}
                            aria-invalid={checked && !isOfficial}
                            aria-describedby={checked ? resultId : undefined}
                        />

                        <div className={styles.buttonGroup}>
                            <button type="submit" className={styles.primaryButton}>
                                Validar
                            </button>
                            <button type="button" onClick={handleClear} className={styles.secondaryButton}>
                                Limpar
                            </button>
                        </div>
                    </form>

                    {checked && (
                        <div
                            id={resultId}
                            className={`${styles.resultBox} ${isOfficial ? styles.success : styles.error}`}
                            role="status"
                            aria-live="polite"
                        >
                            <p><strong>{isOfficial ? 'Número OFICIAL' : 'Número NÃO é oficial'}</strong></p>
                            <p>
                                Número consultado: <code>{formatBRPhone(normalized)}</code>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default PhoneVerifier
