# Portfolio Maria Clara

Site institucional da Dra. Maria Clara dos Santos, com foco em advocacia previdenciaria, captacao de contatos e paginas de servicos otimizadas para busca organica.

## Visao geral

O projeto foi construido com Next.js App Router e reúne:

- pagina inicial com secoes de apresentacao, servicos, prova social, FAQ e captura de contato;
- paginas dedicadas para servicos previdenciarios;
- SEO tecnico com metadados, Open Graph, JSON-LD e sitemap;
- atalhos de contato por WhatsApp, telefone, e-mail, Instagram e LinkedIn.

## Stack

- Next.js 16
- React 19
- TypeScript
- Sass
- PrimeReact / PrimeIcons
- `next-sitemap`

## Rotas principais

- `/` - pagina inicial
- `/servicos/aposentadorias`
- `/servicos/bpc-loas`
- `/servicos/auxilio-doenca-pensao`
- `/servicos/planejamento-previdenciario`

## Estrutura resumida

```text
src/
  app/
    page.tsx
    layout.tsx
    sitemap.ts
    servicos/
  components/
  assets/
    styles/
    images/
  constants/
  hooks/
```

## Como rodar localmente

### Requisitos

- Node.js 20+ recomendado
- npm

### Instalar dependencias

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

O projeto sobe em `http://localhost:21000`.

### Build de producao

```bash
npm run build
npm run start
```

## Scripts disponiveis

- `npm run dev` - inicia o servidor Next.js na porta `21000`
- `npm run build` - gera a build de producao
- `npm run start` - sobe a aplicacao em modo producao na porta `21000`
- `npm run lint` - executa o ESLint

## Pontos importantes do projeto

- Metadados e schema foram configurados em [`src/app/layout.tsx`](src/app/layout.tsx) e nas paginas de servico.
- O sitemap e gerado em [`src/app/sitemap.ts`](src/app/sitemap.ts).
- Os links institucionais e de contato ficam centralizados em [`src/constants/constants.ts`](src/constants/constants.ts).
- A homepage e composta por secoes reutilizaveis em `src/components`.

## Conteudo e manutencao

Para atualizar textos, CTAs e blocos da home:

- revise os componentes em `src/components`;
- ajuste as paginas em `src/app/servicos/*`;
- atualize imagens e estilos em `src/assets`.

## Deploy

O projeto e compativel com deploy em plataformas que suportam Next.js, como Vercel. Depois do build, o passo `postbuild` executa o `next-sitemap`.
