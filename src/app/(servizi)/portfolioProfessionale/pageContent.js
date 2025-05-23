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
                <title>Portfolio | Mostra il tuo lavoro e le tue competenze</title>
                <meta
                    name="description"
                    content="Crea un portfolio online professionale per presentare i tuoi progetti, le tue esperienze e le tue competenze in modo chiaro e accattivante."
                />
            </Head>

            {/* Hero Section */}
            <section ref={heroRef} className="relative h-screen w-screen overflow-hidden pt-16">
                <HeroSection
                    title="Portfolio Professionale"
                    subtitle="Metti in risalto i tuoi successi e competenze."
                    descr="Un portfolio digitale per presentare i tuoi lavori, esperienze e progetti in modo chiaro, professionale e facilmente accessibile."
                />
            </section>

            {/* Perché Sceglierci */}
            <section className="bg-[#ede7e4]">
                <PercheSceglierci
                    sectionTitle="Perché creare un Portfolio"
                    icon1="📁"
                    cardTitle1="Rendi visibile il tuo lavoro"
                    cardBody1="Mostra i tuoi progetti in un layout pulito e organizzato, che evidenzi le tue competenze e il tuo stile."
                    icon2="🌐"
                    cardTitle2="Visibilità online"
                    cardBody2="Condividi il tuo portfolio con potenziali clienti o datori di lavoro in tutto il mondo, con un semplice clic."
                    icon3="📈"
                    cardTitle3="Opportunità di crescita"
                    cardBody3="Un portfolio ben realizzato ti permette di accedere a nuove opportunità professionali e di far crescere la tua rete di contatti."
                />
            </section>

            {/* Demo */}
            {/* <section className="bg-white">
                <SiteSample
                    sectionTitle="Esempi di Portfolio"
                    images={[
                        "/siteSamples/portfolio_1.png",
                        "/siteSamples/portfolio_2.png"
                    ]}
                />
            </section> */}

            {/* Pipeline */}
            <section ref={timelineRef} className="bg-[#ede7e4]">
                <OurPipeline
                    sectionTitle="Come creiamo il tuo Portfolio"
                    cardTitle1="Analisi delle tue esigenze"
                    cardBody1="Studiamo insieme le tue necessità e obiettivi per costruire un portfolio che rispecchi la tua professionalità."
                    cardTitle2="Design su misura"
                    cardBody2="Realizziamo un layout moderno e funzionale, ottimizzato per mostrare i tuoi progetti e competenze nel miglior modo possibile."
                    cardTitle3="Ottimizzazione e Promozione"
                    cardBody3="Ottimizziamo il tuo portfolio per i motori di ricerca e ti aiutiamo a condividerlo sui canali più adatti per raggiungere il pubblico giusto."
                />
            </section>

            {/* CTA */}
            <section className="bg-gradient-blue" ref={ctaRef}>
                <ServiceCTA
                    question="Vuoi far conoscere il tuo lavoro?"
                    cta="Crea il tuo portfolio professionale online e metti in mostra le tue competenze, progetti e realizzazioni al mondo intero."
                />
            </section>

            {/* Piani */}
            <section>
                <PianiAbbonamento />
            </section>
        </div>
    );
}
