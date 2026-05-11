export type ItemFaq = { pergunta: string; resposta: string };

export const FAQ_PRINCIPAL: ItemFaq[] = [
  {
    pergunta: "Nunca contribuí para o INSS, posso receber algum benefício?",
    resposta:
      "SIM. O BPC/LOAS garante um salário mínimo mensal para idosos acima de 65 anos ou pessoas com deficiência em situação de vulnerabilidade, mesmo que nunca tenham pago o INSS. " +
      "Nós avaliamos seu perfil detalhadamente para garantir que você tenha acesso a esse direito essencial.",
  },
  {
    pergunta: "Como ter certeza de que vou receber o valor máximo na minha aposentadoria?",
    resposta:
      "Erros de cálculo do INSS são extremamente comuns. Com o Planejamento Previdenciário Estratégico, analisamos todo o seu histórico contributivo para garantir que você se aposente com o maior benefício possível, no menor tempo e sem perder dinheiro.",
  },
  {
    pergunta: "Tive meu benefício negado pelo INSS. O que devo fazer agora?",
    resposta:
      "Não desista. Negativas são frequentes, mas muitas vezes injustas. Com auxílio jurídico especializado, podemos entrar com recursos ou ações judiciais para reverter a decisão e, em muitos casos, garantir o pagamento de todos os valores retroativos desde o dia do seu pedido.",
  },
  {
    pergunta: "Quanto tempo leva para conseguir um auxílio ou pensão?",
    resposta:
      "O tempo varia conforme o caso, mas a atuação de um advogado especialista acelera o processo e evita erros na documentação que causam atrasos de meses. Nossa missão é destravar o sistema e garantir que o seu benefício chegue o quanto antes.",
  },
];

export function buildFaqJsonLd(itens: ItemFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: itens.map(({ pergunta, resposta }) => ({
      "@type": "Question",
      name: pergunta,
      acceptedAnswer: { "@type": "Answer", text: resposta },
    })),
  };
}

export const FAQ_APOSENTADORIAS: ItemFaq[] = [
  {
    pergunta: "Qual a idade mínima para se aposentar após a Reforma da Previdência?",
    resposta:
      "Após a Reforma de 2019, a aposentadoria por idade exige 65 anos para homens e 62 anos para mulheres, com mínimo de 15 anos de contribuição. Porém, existem diversas regras de transição que podem ser mais vantajosas para quem já contribuía antes da reforma. Uma análise individual é fundamental.",
  },
  {
    pergunta: "Tempo trabalhado no campo (rural) conta para aposentadoria?",
    resposta:
      "Sim. O trabalho rural, mesmo sem carteira assinada, pode ser comprovado e conta para aposentadoria. É necessário reunir provas como notas fiscais agrícolas, declarações de sindicato rural, fotos e testemunhos. Um advogado especialista orienta na melhor forma de comprovar esse período.",
  },
  {
    pergunta: "O INSS pode calcular minha aposentadoria de forma errada?",
    resposta:
      "Sim, e isso acontece com frequência. O INSS pode não reconhecer períodos de atividade especial, tempo rural, serviço militar ou trabalho no exterior. Esses erros reduzem o valor do benefício. Nossa assessoria audita todo o CNIS para garantir que você receba o valor correto.",
  },
  {
    pergunta: "O que é aposentadoria especial e quem tem direito?",
    resposta:
      "A aposentadoria especial é destinada a quem trabalhou exposto a agentes nocivos à saúde (ruído acima de 85dB, calor excessivo, agentes químicos como benzeno, poeira mineral etc.). Permite aposentadoria com menos tempo de contribuição. Exige laudo técnico (LTCAT) e PPP (Perfil Profissiográfico Previdenciário).",
  },
];

export const FAQ_AUXILIO_DOENCA: ItemFaq[] = [
  {
    pergunta: "O INSS negou meu auxílio-doença. O que fazer?",
    resposta:
      "Não aceite a negativa como definitiva. É possível entrar com recurso administrativo no prazo de 30 dias ou ajuizar ação judicial para reverter a decisão. Com orientação especializada, a documentação médica é reforçada e a estratégia de recurso maximiza as chances de concessão — com pagamento retroativo.",
  },
  {
    pergunta: "Quem tem direito à pensão por morte do INSS?",
    resposta:
      "Têm direito à pensão por morte: cônjuge ou companheiro(a) em união estável, filhos menores de 21 anos (ou inválidos de qualquer idade), e pais dependentes economicamente. O falecido deve ter qualidade de segurado no momento do óbito ou cumprir a carência mínima.",
  },
  {
    pergunta: "União estável dá direito à pensão por morte do INSS?",
    resposta:
      "Sim. A companheira ou companheiro em união estável tem direito à pensão por morte, desde que comprovada a relação. Na ausência de documento formal, a comprovação pode ser feita com contas conjuntas, contratos de aluguel, fotos, testemunhas e outros documentos que demonstrem vida em comum.",
  },
  {
    pergunta: "O INSS cortou meu auxílio-doença na perícia. Tenho recurso?",
    resposta:
      "Sim. A chamada 'alta programada' ou cessação do benefício por perícia pode ser contestada. Com laudo médico atualizado e orientação jurídica, é possível pedir nova perícia, entrar com recurso administrativo ou obter liminar judicial para restabelecer o benefício enquanto o processo tramita.",
  },
];

export const FAQ_BPC_LOAS: ItemFaq[] = [
  {
    pergunta: "Qual a renda máxima para ter direito ao BPC/LOAS?",
    resposta:
      "A renda per capita familiar deve ser inferior a 1/4 do salário mínimo (aproximadamente R$353,00 em 2024). Porém, com a ajuda de um advogado especialista, é possível excluir do cálculo gastos com medicamentos, fraldas e tratamentos de saúde, o que frequentemente permite a concessão mesmo para quem inicialmente parece não se enquadrar.",
  },
  {
    pergunta: "Pessoa com deficiência que trabalha pode receber BPC/LOAS?",
    resposta:
      "Sim. O STJ firmou entendimento de que o exercício de atividade remunerada por pessoa com deficiência não impede automaticamente o recebimento do BPC/LOAS, desde que a renda não supere o limite legal. Cada caso deve ser analisado individualmente.",
  },
  {
    pergunta: "O BPC/LOAS acumula com outros benefícios do INSS?",
    resposta:
      "Em regra, o BPC/LOAS não pode ser acumulado com outros benefícios da Seguridade Social, como aposentadoria ou auxílio-doença. Porém, existem exceções judiciais dependendo do caso. Um advogado especialista pode avaliar a melhor estratégia para o seu perfil.",
  },
  {
    pergunta: "Meu BPC/LOAS foi negado pelo INSS. Ainda tenho como receber?",
    resposta:
      "Sim. Negativas do INSS são frequentes e muitas vezes injustas. É possível entrar com recurso administrativo ou ação judicial para reverter a decisão e garantir o pagamento retroativo desde a data do pedido original.",
  },
];

export const FAQ_PLANEJAMENTO: ItemFaq[] = [
  {
    pergunta: "Vale a pena fazer planejamento previdenciário antes de se aposentar?",
    resposta:
      "Sim. Um planejamento bem feito pode representar diferença de centenas de milhares de reais ao longo da aposentadoria. Identificar a regra de transição mais vantajosa, corrigir erros no CNIS e definir o momento ideal para pedir o benefício são ações que um advogado especialista realiza para maximizar o valor do seu benefício.",
  },
  {
    pergunta: "Posso me aposentar mais cedo com planejamento previdenciário?",
    resposta:
      "Em muitos casos, sim. As regras de transição da Reforma de 2019 permitem combinações que possibilitam a aposentadoria antes da idade mínima padrão. Além disso, períodos não reconhecidos (rural, especial, serviço militar) podem antecipar significativamente a data.",
  },
  {
    pergunta: "O planejamento previdenciário serve para quem é autônomo ou MEI?",
    resposta:
      "Especialmente para autônomos e MEIs. Quem contribui por conta própria tem liberdade para escolher o valor da contribuição e pode otimizar esse investimento com orientação técnica, evitando pagar mais do que o necessário ou contribuir de forma que prejudique o benefício futuro.",
  },
  {
    pergunta: "O que é auditoria do CNIS e por que é importante?",
    resposta:
      "O CNIS (Cadastro Nacional de Informações Sociais) é o histórico de contribuições que o INSS usa para calcular sua aposentadoria. Erros são comuns: períodos desaparecidos, atividades especiais não registradas, vínculos incorretos. Uma auditoria profunda identifica esses problemas antes do pedido, evitando que você receba menos do que tem direito.",
  },
];
