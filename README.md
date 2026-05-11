# Portfolio Maria Clara

Site institucional da Dra. Maria Clara dos Santos, com foco em advocacia previdenciária, captação de contatos e páginas de serviços otimizadas para busca orgânica.

## Visão geral

O projeto foi construído com Next.js App Router e reúne:

- página inicial com seções de apresentação, serviços, prova social, FAQ e captura de contato;
- páginas dedicadas para serviços previdenciários;
- SEO técnico com metadados, Open Graph, JSON-LD e sitemap;
- atalhos de contato por WhatsApp, telefone, e-mail, Instagram e LinkedIn.

## Stack

- Next.js 16
- React 19
- TypeScript
- Sass
- PrimeReact / PrimeIcons
- `next-sitemap`

## Rotas principais

- `/` - página inicial
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

## Scripts disponíveis

- `npm run dev` - inicia o servidor Next.js na porta `21000`
- `npm run build` - gera a build de produção
- `npm run start` - sobe a aplicação em modo produção na porta `21000`
- `npm run lint` - executa o ESLint

## Pontos importantes do projeto

- Metadados e schema foram configurados em [`src/app/layout.tsx`](src/app/layout.tsx) e nas páginas de serviço.
- O sitemap é gerado em [`src/app/sitemap.ts`](src/app/sitemap.ts).
- Os links institucionais e de contato ficam centralizados em [`src/constants/constants.ts`](src/constants/constants.ts).
- A homepage é composta por seções reutilizáveis em `src/components`.

## Conteúdo e manutenção

Para atualizar textos, CTAs e blocos da home:

- revise os componentes em `src/components`;
- ajuste as páginas em `src/app/servicos/*`;
- atualize imagens e estilos em `src/assets`.

## Deploy

O projeto é compatível com deploy em plataformas que suportam Next.js, como Vercel. Depois do build, o passo `postbuild` executa o `next-sitemap`.
