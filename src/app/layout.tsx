import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import Script from "next/script";
import { buildFaqJsonLd, FAQ_PRINCIPAL } from "@/lib/faqs";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mariaclarasantos.adv.br"),
  title: "Dra. Maria Clara dos Santos | Advogada Previdenciária em Recife",
  description:
    "Dra. Maria Clara dos Santos — advogada previdenciária em Recife especialista em BPC/LOAS, Aposentadorias e Auxílios do INSS. Benefício negado? Recupere seus direitos.",
  keywords: [
    "maria clara dos santos advogada",
    "maria clara santos advocacia",
    "dra maria clara dos santos",
    "advogada previdenciária recife",
    "advogada especialista em inss recife",
    "como conseguir bpc loas em recife",
    "advogado para aposentadoria recife",
    "auxílio doença negado recife",
    "planejamento previdenciário recife",
    "revisão de benefício inss recife",
    "advogada previdenciária pernambuco",
    "advogado previdenciário camaragibe",
    "advogado previdenciário olinda",
    "advogado previdenciário jaboatão",
    "escritório de advocacia previdenciária recife",
    "OAB/PE 60655",
  ],
  alternates: {
    canonical: "https://www.mariaclarasantos.adv.br",
  },
  robots: "index, follow",
  authors: [{ name: "Maria Clara Santos" }],
  openGraph: {
    title: "Dra. Maria Clara dos Santos | Advocacia Previdenciária em Recife",
    description:
      "Especialista em BPC/LOAS, Aposentadorias e Revisional de Benefícios. Atendimento humanizado com foco em garantir o seu direito junto ao INSS.",
    url: "https://www.mariaclarasantos.adv.br",
    siteName: "Dra. Maria Clara dos Santos | Advocacia Previdenciária",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "https://www.mariaclarasantos.adv.br/Maria_Clara-adv-03.png",
        width: 1200,
        height: 630,
        alt: "Dra. Maria Clara Santos - Advocacia Previdenciária em Recife",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Maria Clara dos Santos | Advogada Previdenciária em Recife",
    description:
      "Especialista em BPC/LOAS, Aposentadorias e Revisional de Benefícios. Atendimento humanizado com foco em garantir o seu direito junto ao INSS.",
    images: ["https://www.mariaclarasantos.adv.br/Maria_Clara-adv-03.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "Attorney"],
  name: "Dra. Maria Clara dos Santos - Advocacia Previdenciária",
  alternateName: [
    "Maria Clara dos Santos",
    "Maria Clara Santos",
    "Dra. Maria Clara Santos",
    "Dra. Maria Clara",
  ],
  image: "https://www.mariaclarasantos.adv.br/Maria_Clara-adv-03.png",
  "@id": "https://www.mariaclarasantos.adv.br",
  url: "https://www.mariaclarasantos.adv.br",
  telephone: "+5581985240415",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Atendimento em Recife e Região Metropolitana",
    addressLocality: "Recife",
    addressRegion: "PE",
    postalCode: "50000-000",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "State", name: "Pernambuco" },
    { "@type": "City", name: "Recife" },
    { "@type": "City", name: "Olinda" },
    { "@type": "City", name: "Jaboatão dos Guararapes" },
    { "@type": "City", name: "Paulista" },
    { "@type": "City", name: "Camaragibe" },
    { "@type": "City", name: "Caruaru" },
    { "@type": "City", name: "São Lourenço da Mata" },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.047562,
    longitude: -34.876964,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.instagram.com/mariaclarasantos.adv",
    "https://www.linkedin.com/in/maria-clara-santos-352614265/",
  ],
};

const faqJsonLd = buildFaqJsonLd(FAQ_PRINCIPAL);

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollReveal from "@/components/ScrollReveal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${playfair.variable} antialiased`}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-QLX5SP3DR7`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QLX5SP3DR7');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <ScrollReveal />
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
