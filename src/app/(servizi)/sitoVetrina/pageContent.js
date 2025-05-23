"use client";

import { useEffect, useRef } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import PercheSceglierci from '@/components/whyUs.js';
import OurPipeline from '@/components/ourPipeline.js';
import ServiceCTA from '@/components/serviceCTA.js';
import PianiAbbonamento from '@/components/plans.js';
import SiteSample from '@/components/siteSample.js';
import { ServicePagesCostants } from '@/app/constants/servicePagesCostants';

export default function PageContent() {
  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    ServicePagesCostants(heroRef, timelineRef, ctaRef);  // Avvia le animazioni
  }, []);

  return (
    <div className="bg-[#ede7e4]">
      <Head>
        <title>Sito Vetrina | La tua presenza digitale professionale</title>
        <meta
          name="description"
          content="Crea una vetrina digitale professionale per la tua azienda. Design personalizzato, mobile-friendly e ottimizzato per le conversioni."
        />
      </Head>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen w-screen overflow-hidden pt-16">
        <HeroSection
          title="Sito Vetrina"
          subtitle="La tua vetrina digitale sempre aperta."
          descr="Design su misura, mobile-friendly e ottimizzato per convertire visitatori in clienti."
        />
      </section>

      {/* Sezione "Perché Sceglierci" */}
      <section className="bg-[#ede7e4]">
        <PercheSceglierci
          sectionTitle="Perché scegliere un Sito Vetrina"
          icon1="📱"
          cardTitle1="Mobile First"
          cardBody1="Adattabile a tutti i dispositivi con design fluidi. L'esperienza utente ottimale su smartphone, tablet e desktop."
          icon2="🚀"
          cardTitle2="Velocità Ottimizzata"
          cardBody2="Tempi di caricamento rapidi per mantenere i visitatori coinvolti e migliorare il posizionamento sui motori di ricerca."
          icon3="🔍"
          cardTitle3="SEO Integrato"
          cardBody3="Ottimizzato per i motori di ricerca fin dal primo giorno, per far trovare la tua azienda ai clienti giusti."
        />
      </section>

      {/* Demo Interattiva */}
      <section className="bg-white">
        <SiteSample
          sectionTitle="Esempi di Siti Vetrina"
          images={[
            "/siteSamples/vetrina_1.png",
            "/siteSamples/vetrina_2.png"
          ]}
        />
      </section>

      {/* Pipeline del servizio */}
      <section ref={timelineRef} className="bg-[#ede7e4]">
        <OurPipeline
          sectionTitle="Il nostro processo"
          cardTitle1="Analisi delle esigenze"
          cardBody1="Iniziamo ascoltando le tue necessità. Comprendiamo il tuo business, i tuoi obiettivi e il tuo pubblico di riferimento per creare una strategia digitale su misura per te."
          cardTitle2="Design personalizzato"
          cardBody2="Creiamo un design unico che riflette l'identità del tuo brand. Ogni elemento è pensato per offrire una user experience eccellente e per comunicare efficacemente i tuoi valori."
          cardTitle3="Ottimizzazione SEO"
          cardBody3="Implementiamo le migliori pratiche SEO per assicurare che il tuo sito sia ben posizionato sui motori di ricerca, aumentando la tua visibilità online e il traffico qualificato."
        />
      </section>

      {/* CTA finale */}
      <section className="bg-gradient-blue" ref={ctaRef}>
        <ServiceCTA
          question="Pronto a far crescere la tua presenza online?"
          cta="Trasforma la tua attività con un sito vetrina professionale e inizia a conquistare nuovi clienti oggi stesso."
        />
      </section>
      {/* Piani di abbonamento */}
      <section>
        <PianiAbbonamento />
      </section>
    </div>
  );
}
