import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";

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
