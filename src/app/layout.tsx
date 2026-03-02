import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";

import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mariaclarasantos.adv.br"),
  title:
    "Dra. Maria Clara Santos | Advogada Previdenciária em Recife - Especialista em INSS",
  description:
    "Procurando Advogada Previdenciária em Recife? Dra. Maria Clara Santos é especialista em BPC/LOAS, Aposentadorias e Auxílios do INSS. Recupere seu benefício negado com atendimento humanizado.",
  keywords: [
    "advogada previdenciária recife",
    "advogada especialista em inss recife",
    "como conseguir bpc loas em recife",
    "advogado para aposentadoria recife",
    "auxílio doença negado recife",
    "planejamento previdenciário recife",
    "revisão de benefício inss recife",
    "Dra Maria Clara Santos advocacia",
    "escritório de advocacia previdenciária recife",
    "melhor advogada previdenciária recife",
    "OAB/PE 60655",
  ],
  robots: "index, follow",
  authors: [{ name: "Maria Clara Santos" }],
  openGraph: {
    title: "Dra. Maria Clara Santos | Advocacia Previdenciária em Recife",
    description:
      "Especialista em BPC/LOAS, Aposentadorias e Revisional de Benefícios. Atendimento humanizado com foco em garantir o seu direito junto ao INSS.",
    url: "https://www.mariaclarasantos.adv.br",
    siteName: "Dra. Maria Clara Santos | Advocacia Previdenciária",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "Dra. Maria Clara Santos - Advocacia Previdenciária",
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
    { "@type": "City", name: "Recife" },
    { "@type": "City", name: "Olinda" },
    { "@type": "City", name: "Jaboatão dos Guararapes" },
    { "@type": "City", name: "Paulista" },
    { "@type": "City", name: "Camaragibe" },
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
  sameAs: ["https://www.instagram.com/mariaclarasantos.adv"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Nunca contribuí para o INSS, posso receber algum benefício?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SIM. O BPC/LOAS garante um salário mínimo mensal para idosos acima de 65 anos ou pessoas com deficiência em situação de vulnerabilidade, mesmo que nunca tenham pago o INSS.",
      },
    },
    {
      "@type": "Question",
      name: "Tive meu benefício negado pelo INSS. O que devo fazer agora?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não desista. Negativas são frequentes, mas muitas vezes injustas. Com auxílio jurídico especializado, podemos entrar com recursos ou ações judiciais para reverter a decisão.",
      },
    },
  ],
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
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
