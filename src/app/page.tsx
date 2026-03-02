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
          Dra. Maria Clara Santos | Reversão de Benefício Negado e BPC/LOAS em
          Recife
        </title>

        <meta
          name="description"
          content="Teve seu benefício do INSS negado ou travado? Dra. Maria Clara é especialista em reverter negativas de BPC/LOAS e Aposentadorias em Recife. Garanta sua dignidade e receba seus atrasados."
        />
        <meta
          name="keywords"
          content="reversão de benefício negado recife, advogada especialista em inss recife, bpc loas recife, auxilio doença negado recife, maria clara santos advocacia"
        />
        <meta name="author" content="Maria Clara Santos" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dra. Maria Clara Santos | Especialista em Reversão de Negativa INSS"
        />
        <meta
          property="og:description"
          content="Não aceite um 'não' automático do INSS. Recuperamos seu benefício negado e garantimos sua dignidade financeira. Atendimento em Recife."
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
          content="Benefício Negado ou Travado no INSS?"
        />
        <meta
          name="twitter:description"
          content="Reverta a injustiça do sistema. Especialista em BPC/LOAS e Aposentadorias em Recife."
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
