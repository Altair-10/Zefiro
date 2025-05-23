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
        ServicePagesCostants(heroRef, timelineRef, ctaRef);
    }, []);

    return (
        <div className="bg-[#ede7e4]">
            <Head>
                <title>Blog | Condividi idee e costruisci il tuo pubblico</title>
                <meta
                    name="description"
                    content="Crea un blog professionale per raccontare il tuo brand, condividere esperienze e costruire una community online solida e autentica."
                />
            </Head>

            {/* Hero Section */}
            <section ref={heroRef} className="relative h-screen w-screen overflow-hidden pt-16">
                <HeroSection
                    title="Blog"
                    subtitle="Condividi storie, novità e competenze."
                    descr="Un blog professionale per aumentare l'autorità del tuo brand, migliorare la SEO e coinvolgere il tuo pubblico."
                />
            </section>

            {/* Sezione "Perché Sceglierci" */}
            <section className="bg-[#ede7e4]">
                <PercheSceglierci
                    sectionTitle="Perché scegliere un Blog"
                    icon1="✍🏻"
                    cardTitle1="Costruisci Autorità"
                    cardBody1="Attraverso articoli di qualità puoi posizionarti come esperto nel tuo settore e guadagnare fiducia."
                    icon2="🧠"
                    cardTitle2="Condividi Conoscenza"
                    cardBody2="Un blog è il miglior modo per educare il tuo pubblico, raccontare esperienze e condividere idee di valore."
                    icon3="🔗"
                    cardTitle3="Collega il tuo Brand"
                    cardBody3="Rafforza il legame tra il tuo brand e i tuoi clienti, costruendo una community attorno ai tuoi contenuti."
                />
            </section>

            {/* Demo Interattiva */}
            {/* <section className="bg-white">
                <SiteSample
                    sectionTitle="Esempi di Blog"
                    images={[
                        "/siteSamples/blog_1.png",
                        "/siteSamples/blog_1.png"
                    ]}
                />
            </section> */}

            {/* Pipeline del servizio */}
            <section ref={timelineRef} className="bg-[#ede7e4]">
                <OurPipeline
                    sectionTitle="Come realizziamo il tuo Blog"
                    cardTitle1="Strategia Editoriale"
                    cardBody1="Definiamo insieme obiettivi, target e tipologie di contenuti per creare un piano editoriale solido e coerente."
                    cardTitle2="Design su Misura"
                    cardBody2="Progettiamo un'interfaccia moderna, leggibile e mobile-friendly, con focus sull'esperienza di lettura."
                    cardTitle3="SEO & Performance"
                    cardBody3="Ottimizziamo il tuo blog per il caricamento rapido, l'indicizzazione SEO e l'integrazione social."
                />
            </section>

            {/* CTA finale */}
            <section className="bg-gradient-blue" ref={ctaRef}>
                <ServiceCTA
                    question="Vuoi far sentire la tua voce online?"
                    cta="Crea il tuo blog aziendale e inizia a costruire relazioni durature con il tuo pubblico attraverso contenuti di valore."
                />
            </section>

            {/* Piani di abbonamento */}
            <section>
                <PianiAbbonamento />
            </section>
        </div>
    );
}
