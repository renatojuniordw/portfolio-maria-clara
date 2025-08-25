import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Maria Clara Santos | Advocacia Previdenciária',
  description: 'Maria Clara Santos, advogada inscrita na OAB/PE 60.655. Especialista em aposentadorias, pensões, auxílios e BPC/LOAS. Planejamento e revisão de benefícios com acolhimento e segurança jurídica.',
  keywords: [
    'advocacia previdenciária',
    'direito previdenciário',
    'aposentadoria',
    'BPC',
    'LOAS',
    'planejamento previdenciário',
    'revisão de aposentadoria',
    'Maria Clara Santos',
    'Maria Clara',
    'aposentadoria',
    'advogada',
    'Advocacia Recife',
    'Advogada em Recife',
    'advogada recife',
    'previdenciário recife',
    'aposentadoria',
    'planejamento previdenciário',
    'aposentadoria recife',
    'como ter direito ao LOAS',
    'advogada recife',
    'advogada em recife',
    'direito previdenciário recife',
    'previdenciário recife',
    'revisão aposentadoria recife',
    'advocacia previdenciária recife',
    'melhor advogada previdenciária recife',
    'bpc loas recife',
    'Maria Clara Santos advogada previdenciária',
    'Maria Clara advogada previdenciária',
    'Maria Clara advogada previdenciária em Recife',
    'OAB 60655',
    'OAB/PE 60655',
    'advogada OAB Pernambuco',
    'Maria Clara Santos'
  ],
  robots: 'index, follow',
  authors: [{ name: 'Maria Clara Santos' }],
  openGraph: {
    title: 'Maria Clara Santos | Advocacia Previdenciária',
    description: 'Especialista em aposentadorias, pensões, auxílios e BPC/LOAS. Atendimento humanizado com foco na segurança jurídica.',
    url: 'https://www.mariaclarasantos.adv.br',
    siteName: 'Maria Clara Santos | Advocacia Previdenciária',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: 'https://www.mariaclarasantos.adv.br/Maria_Clara-adv-03.png',
        width: 1200,
        height: 630,
        alt: 'Maria Clara Santos - Advocacia Previdenciária',
      },
    ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Maria Clara Santos | Advocacia Previdenciária',
  //   description: 'Atendimento humanizado e especializado em Direito Previdenciário, com foco em aposentadorias, BPC/LOAS e revisão de benefícios.',
  //   images: ['https://www.mariaclarasantos.adv.br/Maria_Clara-adv-03.png'],
  //   creator: '@mariaclara.adv', // Ajuste se necessário
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
