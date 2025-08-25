import { Accordion, AccordionTab } from 'primereact/accordion';
import styles from '@/assets/styles/FAQSlider.module.scss';
import { Divider } from 'primereact/divider';

const faqItems = [
    {
        header: 'O que é Aposentadoria?',
        content:
            'A aposentadoria é um benefício previdenciário concedido pelo INSS ao segurado que contribuiu durante sua vida laboral. ' +
            'Existem diferentes modalidades, como aposentadoria por idade, por tempo de contribuição, por invalidez e a aposentadoria especial, destinada a quem trabalhou em condições insalubres ou de risco.'
    },
    {
        header: 'O que são Pensões?',
        content:
            'As pensões são benefícios pagos aos dependentes de um segurado falecido, com o objetivo de garantir a subsistência e proteção financeira da família. ' +
            'O exemplo mais comum é a pensão por morte, que assegura aos dependentes legais uma continuidade de renda após o falecimento do segurado.'
    },
    {
        header: 'O que são Auxílios?',
        content:
            'Os auxílios são benefícios temporários concedidos quando o trabalhador se encontra incapaz de exercer suas atividades habituais. ' +
            'Entre os principais, destacam-se o auxílio-doença, voltado à incapacidade temporária, e o auxílio-acidente, destinado a casos de sequelas permanentes que reduzem a capacidade laboral.'
    },
    {
        header: 'O que é BPC/LOAS?',
        content:
            'O Benefício de Prestação Continuada (BPC), previsto na Lei Orgânica da Assistência Social (LOAS), garante um salário mínimo mensal a idosos a partir de 65 anos ou a pessoas com deficiência em situação de vulnerabilidade social. ' +
            'Diferentemente dos benefícios previdenciários, o BPC não exige contribuição prévia ao INSS, sendo de natureza assistencial.'
    }
];

const FAQCollapse = () => {
    return (
        <section className={styles.faq} id="faq" aria-labelledby="faq-heading">
            <header>
                <h2 id="faq-heading" className="section-title">
                    Principais <span aria-hidden="true"><br /></span>Dúvidas
                </h2>
                <Divider />
            </header>
            <Accordion multiple>
                {faqItems.map((item, index) => (
                    <AccordionTab key={index} header={item.header}>
                        <p style={{ whiteSpace: 'pre-line' }}>{item.content}</p>
                    </AccordionTab>
                ))}
            </Accordion>
        </section>
    );
};

export default FAQCollapse;