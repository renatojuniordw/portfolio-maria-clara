"use client";

import { NextPage } from "next";
import Head from "next/head";

import style from "@/app/page.module.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSlider from "@/components/FAQSlider";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import PhoneVerifier from "@/components/PhoneVerifier";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Dra. Maria Clara Santos | Advogada Previdenciária em Recife -
          Especialista em INSS
        </title>

        <meta
          name="description"
          content="Procurando Advogada Previdenciária em Recife? Dra. Maria Clara Santos é especialista em BPC/LOAS, Aposentadorias e Auxílios do INSS. Recupere seu benefício negado com atendimento humanizado."
        />
        <meta
          name="keywords"
          content="advogada previdenciária recife, especialista em inss recife, bpc loas recife, aposentadoria recife, maria clara santos"
        />
        <meta name="author" content="Maria Clara Santos" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dra. Maria Clara Santos | Advocacia Previdenciária em Recife"
        />
        <meta
          property="og:description"
          content="Especialista em BPC/LOAS, Aposentadorias e Revisional de Benefícios. Atendimento humanizado com foco em garantir o seu direito junto ao INSS."
        />
        <meta property="og:url" content="https://mariaclarasantos.adv.br" />
        <meta
          property="og:image"
          content="https://mariaclarasantos.adv.br/Maria_Clara-adv-03.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dra. Maria Clara Santos | Advocacia Previdenciária"
        />
        <meta
          name="twitter:description"
          content="Recupere seu benefício negado com atendimento humanizado e segurança jurídica."
        />
        <meta
          name="twitter:image"
          content="https://mariaclarasantos.adv.br/Maria_Clara-adv-03.png"
        />
      </Head>
      <div className={style.wrapper}>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <AboutSection />
        <FAQSlider />
        <PhoneVerifier />
      </div>
    </>
  );
};

export default Home;
