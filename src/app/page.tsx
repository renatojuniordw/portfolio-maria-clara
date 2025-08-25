'use client';

import { NextPage } from 'next';
import Head from 'next/head';


import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSlider from '@/components/FAQSlider';
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Maria Clara Santos | Advocacia Previdenciária</title>
        <meta
          name="description"
          content="Ajudando você a garantir seu melhor benefício no INSS. Atendimento humanizado com segurança jurídica."
        />
      </Head>
      <main>
        <Header />
        <HeroSection />
        {/* <AboutSection /> */}
        <ServicesSection />
        <FAQSlider />
      </main>
      <Footer />
    </>
  );
}

export default Home;
