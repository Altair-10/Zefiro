"use client";

import { useEffect, useRef } from 'react';
import Head from 'next/head';
import HeroSection from '../../../components/HeroSection';
import PercheSceglierci from '@/components/whyUs.js';
import OurPipeline from '@/components/ourPipeline.js';
import ServiceCTA from '@/components/serviceCTA.js';
import PianiAbbonamento from '@/components/plans.js';
// import SiteSample from '@/components/siteSample.js';
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
                <title>Landing Page Promozionale | Massimizza le conversioni</title>
                <meta
                    name="description"
                    content="Cattura l’attenzione e aumenta le vendite con una landing page efficace, su misura per il tuo prodotto o servizio."
                />
            </Head>

            {/* Hero Section */}
            <section ref={heroRef} className="relative h-screen w-screen overflow-hidden pt-16">
                <HeroSection
                    title="Landing Page Promozionale"
                    subtitle="Impatto immediato, risultati concreti."
                    descr="Promuovi il tuo prodotto o servizio con una pagina pensata per convertire visitatori in clienti."
                />
            </section>

            {/* Perché Sceglierci */}
            <section className="bg-[#ede7e4]">
                <PercheSceglierci
                    sectionTitle="Perché scegliere una landing page"
                    icon1="🚀"
                    cardTitle1="Conversione Ottimizzata"
                    cardBody1="Design e contenuti focalizzati su un solo obiettivo: ottenere contatti, iscrizioni o vendite."
                    icon2="🎯"
                    cardTitle2="Messaggio Diretto"
                    cardBody2="Comunica un’offerta chiara e irresistibile con call to action mirate e persuasive."
                    icon3="📊"
                    cardTitle3="Misurabilità Totale"
                    cardBody3="Monitora facilmente traffico, click e conversioni per ottimizzare le performance."
                />
            </section>

            {/* Demo */}
            {/* <section className="bg-white">
                <SiteSample sectionTitle="Esempi di Landing Page" />
            </section> */}

            {/* Pipeline */}
            <section ref={timelineRef} className="bg-[#ede7e4]">
                <OurPipeline
                    sectionTitle="Come realizziamo la tua landing page"
                    cardTitle1="Obiettivo di Marketing"
                    cardBody1="Definiamo con te lo scopo della landing: vendere, lanciare, raccogliere contatti o altro."
                    cardTitle2="Copy & Design"
                    cardBody2="Creiamo testi incisivi, layout accattivante e un percorso utente orientato alla conversione."
                    cardTitle3="Pubblicazione & A/B Test"
                    cardBody3="Mettiamo online la pagina e, se necessario, testiamo più varianti per ottimizzare i risultati."
                />
            </section>

            {/* CTA */}
            <section className="bg-gradient-blue" ref={ctaRef}>
                <ServiceCTA
                    question="Vuoi una pagina che trasforma i visitatori in clienti?"
                    cta="Costruiamo la tua landing page su misura: persuasiva, veloce e pronta a convertire fin da subito."
                />
            </section>

            {/* Piani */}
            <section>
                <PianiAbbonamento />
            </section>
        </div>
    );
}
