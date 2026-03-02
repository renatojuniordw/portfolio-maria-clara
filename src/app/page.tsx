import { Metadata } from "next";
import style from "@/app/page.module.css";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import FAQSlider from "@/components/FAQSlider";
import PhoneVerifier from "@/components/PhoneVerifier";

export const metadata: Metadata = {
  title:
    "Dra. Maria Clara Santos | Reversão de Benefício Negado e BPC/LOAS em Recife",
  description:
    "Teve seu benefício do INSS negado ou travado? Dra. Maria Clara é especialista em reverter negativas de BPC/LOAS e Aposentadorias em Recife. Garanta sua dignidade e receba seus atrasados.",
  keywords:
    "reversão de benefício negado recife, advogada especialista em inss recife, bpc loas recife, auxilio doença negado recife, maria clara santos advocacia",
  openGraph: {
    title:
      "Dra. Maria Clara Santos | Especialista em Reversão de Negativa INSS",
    description:
      "Não aceite um 'não' automático do INSS. Recuperamos seu benefício negado e garantimos sua dignidade financeira. Atendimento em Recife.",
    url: "https://mariaclarasantos.adv.br",
    images: ["https://mariaclarasantos.adv.br/Maria_Clara-adv-03.png"],
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
