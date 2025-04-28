"use client";

import { useEffect, useRef } from 'react';
import Head from 'next/head';
import HeroSection from '../sitoVetrina/HeroSection';
import PercheSceglierci from '@/components/percheSceglierci.js';
import OurPipeline from '@/components/ourPipeline.js';
import ServiceCTA from '@/components/serviceCTA.js';
import PianiAbbonamento from '@/components/pianiAbbonamento.js';
import SiteSample from '@/components/siteSample.js';
import { ServicePagesCostants } from '@/app/config/servicePagesCostants';

export default function SitoVetrina() {
    const heroRef = useRef(null);
    const timelineRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        ServicePagesCostants(heroRef, timelineRef, ctaRef);  // Avvia le animazioni
    }, []);

    return (
        <div className="bg-[#ede7e4]">
            <Head>
                <title>Piattaforma E-learning | Corsi online su misura</title>
                <meta
                    name="description"
                    content="Crea la tua piattaforma E-learning per offrire corsi, lezioni e contenuti formativi online in modo professionale e accessibile."
                />
            </Head>

            {/* Hero Section */}
            <section ref={heroRef} className="relative h-screen w-screen overflow-hidden pt-16">
                <HeroSection
                    title="Piattaforma E-learning"
                    subtitle="La tua scuola online, sempre accessibile."
                    descr="Crea corsi, gestisci studenti e offri un'esperienza formativa moderna e coinvolgente."
                />

            </section>

            {/* Perché Sceglierci */}
            <section className="bg-[#ede7e4]">
                <PercheSceglierci
                    sectionTitle="Perché creare una piattaforma E-learning"
                    icon1="🎓"
                    cardTitle1="Formazione Accessibile"
                    cardBody1="Offri contenuti formativi 24/7, raggiungendo studenti ovunque e in qualsiasi momento."
                    icon2="📈"
                    cardTitle2="Crescita Scalabile"
                    cardBody2="Espandi la tua offerta didattica senza limiti fisici, raggiungendo un pubblico globale."
                    icon3="⚙️"
                    cardTitle3="Gestione Intuitiva"
                    cardBody3="Controlla corsi, utenti e certificazioni in modo semplice con una dashboard user-friendly."
                />
            </section>

            {/* Demo */}
            <section className="bg-white">
                <SiteSample sectionTitle="Esempi di Piattaforme E-learning" />
            </section>

            {/* Pipeline */}
            <section ref={timelineRef} className="bg-[#ede7e4]">
                <OurPipeline
                    sectionTitle="Come realizziamo la tua piattaforma"
                    cardTitle1="Analisi dei bisogni"
                    cardBody1="Identifichiamo il tipo di corsi, utenti e funzionalità necessarie per una piattaforma su misura."
                    cardTitle2="Progettazione UX"
                    cardBody2="Costruiamo un'interfaccia facile da usare, incentivando la partecipazione e il completamento dei corsi."
                    cardTitle3="Implementazione Tecnica"
                    cardBody3="Sviluppiamo funzionalità avanzate: gestione utenti, progressi, certificati, pagamenti integrati."
                />
            </section>

            {/* CTA */}
            <section className="bg-gradient-blue" ref={ctaRef}>
                <ServiceCTA
                    question="Pronto a lanciare la tua scuola online?"
                    cta="Crea la tua piattaforma e-learning personalizzata e porta i tuoi corsi al prossimo livello, ovunque e in qualsiasi momento."
                />
            </section>

            {/* Piani */}
            <section>
                <PianiAbbonamento />
            </section>
        </div>
    );
}
