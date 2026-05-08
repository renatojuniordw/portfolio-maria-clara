import { Metadata } from "next";
import style from "@/app/page.module.css";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import FAQSlider from "@/components/FAQSlider";
import PhoneVerifier from "@/components/PhoneVerifier";

export const metadata: Metadata = {
  title: "Dra. Maria Clara dos Santos | Advogada Previdenciária em Recife",
  description:
    "Dra. Maria Clara dos Santos — advogada previdenciária em Recife. BPC/LOAS negado? Aposentadoria atrasada? Recupere seus direitos e retroativos com quem entende do INSS.",
  keywords:
    "maria clara dos santos advogada, maria clara santos advocacia, reversão de benefício negado recife, advogada especialista em inss recife, bpc loas recife, auxilio doença negado recife, advogada previdenciária pernambuco",
  alternates: {
    canonical: "https://www.mariaclarasantos.adv.br",
  },
  openGraph: {
    title: "Dra. Maria Clara dos Santos | Advogada Previdenciária em Recife",
    description:
      "Não aceite um 'não' automático do INSS. Dra. Maria Clara dos Santos reverte negativas de BPC/LOAS e Aposentadorias. Garanta seus retroativos.",
    url: "https://www.mariaclarasantos.adv.br",
    images: [
      {
        url: "https://www.mariaclarasantos.adv.br/Maria_Clara-adv-03.png",
        width: 1125,
        height: 995,
        alt: "Dra. Maria Clara dos Santos - Advogada Previdenciária em Recife",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className={style.wrapper}>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <FAQSlider />
      <PhoneVerifier />
    </div>
  );
}
