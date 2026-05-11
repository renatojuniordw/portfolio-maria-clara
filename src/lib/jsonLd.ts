const SERVICE_PROVIDER = {
  "@type": "LegalService",
  name: "Dra. Maria Clara Santos",
  url: "https://www.mariaclarasantos.adv.br",
} as const;

const SERVICE_AREA = [
  { "@type": "State", name: "Pernambuco" },
  { "@type": "City", name: "Recife" },
  { "@type": "City", name: "Camaragibe" },
] as const;

export function buildServiceJsonLd(
  name: string,
  description: string,
  url: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name,
    provider: SERVICE_PROVIDER,
    areaServed: SERVICE_AREA,
    description,
    url,
  };
}

export function buildBreadcrumbJsonLd(pageTitle: string, pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: "https://www.mariaclarasantos.adv.br",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Serviços",
        item: "https://www.mariaclarasantos.adv.br/#servicos",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pageTitle,
        item: pageUrl,
      },
    ],
  };
}
