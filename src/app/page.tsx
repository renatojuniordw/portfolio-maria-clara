'use client';

import { NextPage } from 'next';
import Head from 'next/head';

import style from '@/app/page.module.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSlider from '@/components/FAQSlider';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Maria Clara Santos | Advocacia Previdenciária</title>

        <meta
          name="description"
          content="Maria Clara Santos é advogada especializada em Direito Previdenciário. Planejamento de aposentadoria, revisão de benefícios e BPC/LOAS com atendimento acolhedor e foco na segurança jurídica."
        />
        <meta
          name="keywords"
          content="advogada previdenciária, direito previdenciário, aposentadoria, BPC, LOAS, revisão de benefícios, INSS, planejamento previdenciário, Maria Clara Santos, Maria Clara, Advocacia Recife, Advogada em Recife, advogada recife, previdenciário recife, aposentadoria, planejamento previdenciário, aposentadoria recife, como ter direito ao LOAS"
        />
        <meta name="author" content="Maria Clara Santos" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Maria Clara Santos | Advocacia Previdenciária" />
        <meta
          property="og:description"
          content="Advogada especializada em Direito Previdenciário, oferecendo planejamento e revisão de benefícios com segurança jurídica e atendimento humanizado."
        />
        <meta property="og:url" content="https://mariaclarasantos.adv.br" />
        <meta property="og:image" content="https://mariaclarasantos.adv.br/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maria Clara Santos | Advocacia Previdenciária" />
        <meta
          name="twitter:description"
          content="Planejamento previdenciário, BPC/LOAS e revisão de benefícios com atendimento acolhedor e técnico."
        />
        <meta name="twitter:image" content="https://mariaclarasantos.adv.br/og-image.jpg" />
      </Head>
      <main>
        <Header />
        <div className={style.wrapper}>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <FAQSlider />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
