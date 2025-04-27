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

export default function ElearningPlatform() {
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
        <div className="bg-[#eef4f8]">
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
            <section className="bg-[#eef4f8]">
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
            <section ref={timelineRef} className="bg-[#eef4f8]">
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
