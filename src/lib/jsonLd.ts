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
    "@type": "Service",
    name,
    provider: SERVICE_PROVIDER,
    areaServed: SERVICE_AREA,
    description,
    url,
  };
}
