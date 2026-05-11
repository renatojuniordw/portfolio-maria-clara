"use client";

import { useState, useCallback } from "react";
import styles from "@/assets/styles/PhoneVerifier.module.scss";

import { normalizeBRPhone, formatBRPhone, stripDDD } from "@/lib/phoneUtils";

const OFFICIAL_NUMBERS = ["81985240415", "985240415"];
const OFFICIAL_WITH_DDD = new Set(OFFICIAL_NUMBERS.map(normalizeBRPhone));
const OFFICIAL_WITHOUT_DDD = new Set(Array.from(OFFICIAL_WITH_DDD).map(stripDDD));

const PhoneVerifier = () => {
  const [raw, setRaw] = useState("");
  const [checked, setChecked] = useState(false);

  const normalized = normalizeBRPhone(raw);
  const normalizedNoDDD = stripDDD(normalized);
  const isValidLength = normalized.length >= 8 && normalized.length <= 11;
  const isOfficial =
    isValidLength &&
    (OFFICIAL_WITH_DDD.has(normalized) || OFFICIAL_WITHOUT_DDD.has(normalizedNoDDD));
  const resultId = "phone-verifier-result";

  const handleCheck = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setChecked(true);
  }, []);

  const handleClear = useCallback(() => {
    setRaw("");
    setChecked(false);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setRaw(e.target.value);
  }, []);

  return (
    <section
      className={`${styles.verifierSection} reveal`}
      id="verificador"
      aria-labelledby="phone-verifier-heading"
    >
      <header className={styles.header}>
        <p className={styles.eyebrow}>Camada de confiança</p>
        <h2 id="phone-verifier-heading" className="section-title">
          Antes de enviar documento ou dinheiro, confira o número.
        </h2>
        <p className={styles.sectionLead}>
          A segurança aqui não fica escondida no rodapé. Ela entra como serviço
          visível e útil no meio da navegação.
        </p>
        <span className="section-divider" aria-hidden="true" />
      </header>

      <div className={styles.grid}>
        <div className={styles.primaryColumn}>
          <p className={styles.subtitle}>
            Digite o telefone que está entrando em contato com você. Conferimos
            se ele pertence aos nossos canais oficiais para garantir sua
            segurança.
          </p>

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
                onChange={handleChange}
                className={styles.input}
                aria-invalid={checked && !isOfficial}
                aria-describedby={checked ? resultId : undefined}
              />

              <div className={styles.buttonGroup}>
                <button
                  type="submit"
                  className={styles.primaryButton}
                  aria-disabled={normalized.length < 8}
                  onClick={(e) => { if (normalized.length < 8) e.preventDefault(); }}
                >
                  Validar
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className={styles.secondaryButton}
                >
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
                <p>
                  <strong>
                    {isOfficial ? "Número OFICIAL" : "Número NÃO é oficial"}
                  </strong>
                </p>
                <p>
                  Número consultado: <code>{formatBRPhone(normalized)}</code>
                </p>
              </div>
            )}
          </div>
        </div>

        <div className={styles.alertBox}>
          <h3>Alerta de Golpes</h3>
          <ul>
            <li>
              Converse apenas pelos nossos canais oficiais listados no site ou
              redes verificadas.
            </li>
            <li>
              Nunca solicitamos pagamentos por números desconhecidos ou via
              mensagens instantâneas.
            </li>
            <li>
              Desconfie de contatos que afirmam urgência ou prometem liberação
              imediata de valores.
            </li>
            <li>
              Confirme o número aqui antes de transferir qualquer quantia ou
              enviar documentos.
            </li>
            <li>
              Em caso de dúvida, entre em contato diretamente conosco antes de
              tomar qualquer decisão.
            </li>
            <li>
              Processos judiciais verdadeiros podem ser consultados nos portais
              oficiais dos tribunais.
            </li>
            <li>
              Guarde prints e registros se suspeitar de golpe e procure as
              autoridades competentes.
            </li>
          </ul>
          <p className={styles.alertNote}>
            A segurança das suas informações é prioridade no nosso escritório.
            <strong> Maria Clara Santos Advocacia</strong> atua com ética,
            transparência e atendimento humanizado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhoneVerifier;
