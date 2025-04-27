"use client";

import { useEffect, useRef } from 'react';
import Head from 'next/head';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import HeroSection from '../sitoVetrina/HeroSection';
import PercheSceglierci from '@/components/percheSceglierci.js';
import OurPipeline from '@/components/ourPipeline.js';
import ServiceCTA from '@/components/serviceCTA.js';
import PianiAbbonamento from '@/components/pianiAbbonamento.js';
import SiteSample from '@/components/siteSample.js';
import { initAnimations } from '../animationConfig';

export default function SitoVetrina() {
    const heroRef = useRef(null);
    const timelineRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        initAnimations(heroRef, timelineRef, ctaRef);  // Avvia le animazioni
    }, []);
    return (
        <div className="bg-[#ede7e4]">
            <Head>
                <title>Portfolio Creativo | Mostra il tuo talento al mondo</title>
                <meta
                    name="description"
                    content="Crea un portfolio online elegante e professionale per mostrare i tuoi progetti, opere e competenze creative."
                />
            </Head>

            {/* Hero Section */}
            <section ref={heroRef} className="relative h-screen w-screen overflow-hidden pt-16">
                <HeroSection
                    title="Portfolio Creativo"
                    subtitle="Mostra al mondo il tuo talento."
                    descr="Un portfolio digitale elegante e dinamico per mettere in risalto i tuoi lavori e attirare nuove opportunità."
                />

            </section>

            {/* Perché Sceglierci */}
            <section className="bg-[#ede7e4]">
                <PercheSceglierci
                    sectionTitle="Perché creare un Portfolio Creativo"
                    icon1="🎨"
                    cardTitle1="Valorizza il tuo stile"
                    cardBody1="Presenta i tuoi progetti in un layout studiato per esaltare la tua identità creativa e unica."
                    icon2="🌍"
                    cardTitle2="Visibilità Globale"
                    cardBody2="Fatti conoscere da clienti e aziende in tutto il mondo grazie a un portfolio accessibile ovunque."
                    icon3="💼"
                    cardTitle3="Opportunità Professionali"
                    cardBody3="Cattura nuove collaborazioni e offerte di lavoro mostrando le tue migliori realizzazioni."
                />
            </section>

            {/* Demo */}
            <section className="bg-white">
                <SiteSample sectionTitle="Esempi di Portfolio Creativi" />
            </section>

            {/* Pipeline */}
            <section ref={timelineRef} className="bg-[#ede7e4]">
                <OurPipeline
                    sectionTitle="Come creiamo il tuo portfolio"
                    cardTitle1="Brief Creativo"
                    cardBody1="Raccogliamo tutte le informazioni sui tuoi progetti e sulla tua visione artistica per tradurli in un portfolio efficace."
                    cardTitle2="Design su misura"
                    cardBody2="Realizziamo un layout elegante e dinamico per mettere in risalto ogni tuo lavoro."
                    cardTitle3="Pubblicazione e Promozione"
                    cardBody3="Ottimizziamo il portfolio per i motori di ricerca e ti aiutiamo a condividerlo sui canali più adatti al tuo settore."
                />
            </section>

            {/* CTA */}
            <section className="bg-gradient-blue" ref={ctaRef}>
                <ServiceCTA
                    question="Vuoi mettere in luce il tuo talento?"
                    cta="Realizza il tuo portfolio creativo online e lascia che i tuoi lavori parlino per te al mondo intero."
                />
            </section>

            {/* Piani */}
            <section>
                <PianiAbbonamento />
            </section>
        </div>
    );
}
