import { Metadata } from "next";
import style from "@/app/page.module.css";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import FAQSlider from "@/components/FAQSlider";
import PhoneVerifier from "@/components/PhoneVerifier";

export const metadata: Metadata = {
  title: "Benefício INSS Negado em Recife? Dra. Maria Clara Santos",
  description:
    "Benefício do INSS negado em Recife? Dra. Maria Clara Santos reverte negativas de BPC/LOAS e Aposentadorias. Garanta seus retroativos.",
  keywords:
    "reversão de benefício negado recife, advogada especialista em inss recife, bpc loas recife, auxilio doença negado recife, maria clara santos advocacia",
  alternates: {
    canonical: "https://www.mariaclarasantos.adv.br",
  },
  openGraph: {
    title: "Dra. Maria Clara Santos | Especialista em Reversão de Negativa INSS",
    description:
      "Não aceite um 'não' automático do INSS. Recuperamos seu benefício negado e garantimos sua dignidade financeira. Atendimento em Recife.",
    url: "https://www.mariaclarasantos.adv.br",
    images: [
      {
        url: "https://www.mariaclarasantos.adv.br/Maria_Clara-adv-03.png",
        width: 1125,
        height: 995,
        alt: "Dra. Maria Clara Santos - Advogada Previdenciária em Recife",
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
