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

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function SitoPerEventi() {
    const heroRef = useRef(null);
    const timelineRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        if (heroRef.current) {
            const heroText = heroRef.current.querySelectorAll('.hero-text');
            if (heroText.length > 0) {
                gsap.fromTo(
                    heroText,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: 'power3.out' }
                );
            }

            const ctaButton = heroRef.current.querySelector('.cta-button');
            if (ctaButton) {
                gsap.to(ctaButton, {
                    scale: 1.05,
                    repeat: -1,
                    yoyo: true,
                    duration: 1.5,
                    ease: 'sine.inOut',
                });
            }
        }

        if (timelineRef.current) {
            const timelineSteps = timelineRef.current.querySelectorAll('.timeline-step');
            timelineSteps.forEach((step, index) => {
                gsap.fromTo(
                    step,
                    { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                    {
                        scrollTrigger: {
                            trigger: step,
                            start: 'top 75%',
                        },
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                    }
                );
            });
        }

        if (ctaRef.current) {
            gsap.fromTo(
                ctaRef.current,
                { opacity: 0, scale: 0.9 },
                {
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: 'top 80%',
                    },
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: 'elastic.out(1, 0.5)',
                }
            );

            const shineAnimation = () => {
                const shineElement = ctaRef.current?.querySelector('.shine-effect');
                if (shineElement) {
                    gsap.fromTo(
                        shineElement,
                        { left: '-100%', opacity: 0.5 },
                        {
                            left: '200%',
                            opacity: 0,
                            duration: 1.5,
                            ease: 'power2.inOut',
                            onComplete: () => {
                                gsap.set(shineElement, { left: '-100%' });
                                setTimeout(shineAnimation, 3000);
                            },
                        }
                    );
                }
            };

            setTimeout(shineAnimation, 2000);
        }
    }, []);

    return (
        <div className="bg-[#f0f5fb]">
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
            <section className="bg-[#f0f5fb]">
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
            <section ref={timelineRef} className="bg-[#f0f5fb]">
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
