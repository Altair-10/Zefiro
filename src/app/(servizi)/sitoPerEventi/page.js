"use client";

import { useEffect, useRef } from 'react';
import Head from 'next/head';
import HeroSection from '../../../components/HeroSection';
import PercheSceglierci from '@/components/whyUs.js';
import OurPipeline from '@/components/ourPipeline.js';
import ServiceCTA from '@/components/serviceCTA.js';
import PianiAbbonamento from '@/components/plans.js';
import SiteSample from '@/components/siteSample.js';
import { ServicePagesCostants } from '@/app/constants/servicePagesCostants';

export default function SitoVetrina() {
    const heroRef = useRef(null);
    const timelineRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        ServicePagesCostants(heroRef, timelineRef, ctaRef);
    }, []);

    return (
        <div className="bg-[#ede7e4]">
            <Head>
                <title>Sito per Eventi | Promuovi il tuo evento in grande stile</title>
                <meta
                    name="description"
                    content="Crea un sito dedicato per il tuo evento, completo di programma, iscrizioni e aggiornamenti in tempo reale."
                />
            </Head>

            {/* Hero Section */}
            <section ref={heroRef} className="relative h-screen w-screen overflow-hidden pt-16">
                <HeroSection
                    title="Sito per Eventi"
                    subtitle="Promuovi il tuo evento con stile."
                    descr="Un sito dedicato per presentare programma, ospiti e registrazioni, tutto in un'unica piattaforma."
                />

            </section>

            {/* Perché Sceglierci */}
            <section className="bg-[#ede7e4]">
                <PercheSceglierci
                    sectionTitle="Perché creare un Sito per Eventi"
                    icon1="📅"
                    cardTitle1="Organizzazione Perfetta"
                    cardBody1="Offri ai partecipanti tutte le informazioni aggiornate: programma, location, ospiti e modalità di iscrizione."
                    icon2="🧩"
                    cardTitle2="Personalizzazione Completa"
                    cardBody2="Design su misura per il tema del tuo evento, con funzionalità su richiesta come registrazione online o ticketing."
                    icon3="📢"
                    cardTitle3="Massima Visibilità"
                    cardBody3="Promuovi il tuo evento con SEO, integrazione social e strumenti di marketing mirati."
                />
            </section>

            {/* Demo */}
            <section className="bg-white">
                <SiteSample sectionTitle="Esempi di Siti per Eventi" />
            </section>

            {/* Pipeline */}
            <section ref={timelineRef} className="bg-[#ede7e4]">
                <OurPipeline
                    sectionTitle="Come realizziamo il sito del tuo evento"
                    cardTitle1="Pianificazione"
                    cardBody1="Raccogliamo tutte le informazioni sull'evento per costruire una struttura chiara ed efficace."
                    cardTitle2="Design ed Esperienza"
                    cardBody2="Creiamo un sito intuitivo e accattivante per stimolare la partecipazione e semplificare le iscrizioni."
                    cardTitle3="Supporto Live"
                    cardBody3="Ti affianchiamo anche durante l'evento con aggiornamenti, notifiche e assistenza tecnica in tempo reale."
                />
            </section>

            {/* CTA */}
            <section className="bg-gradient-blue" ref={ctaRef}>
                <ServiceCTA
                    question="Hai un evento da promuovere?"
                    cta="Crea un sito evento su misura per attirare partecipanti, gestire registrazioni e rendere ogni dettaglio memorabile."
                />
            </section>

            {/* Piani */}
            <section>
                <PianiAbbonamento />
            </section>
        </div>
    );
}
