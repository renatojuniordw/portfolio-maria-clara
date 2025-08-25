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
  title: 'Maria Clara - Advocacia Previdenciária',
  description: 'Especialista em aposentadorias, pensões, auxílios e BPC/LOAS. Planejamento e revisão de benefícios com acolhimento e segurança jurídica.',
  keywords: [
    'advocacia previdenciária',
    'aposentadoria',
    'BPC',
    'LOAS',
    'planejamento previdenciário',
    'revisão de aposentadoria',
    'Maria Clara Santos',
    'advogada'
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Maria Clara - Advocacia Previdenciária',
    description: 'Especialista em aposentadorias, pensões, auxílios e BPC/LOAS. Atendimento humanizado com foco na segurança jurídica.',
    url: 'https://www.mariaclarasantos.adv.br',
    siteName: 'Maria Clara Advocacia',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
