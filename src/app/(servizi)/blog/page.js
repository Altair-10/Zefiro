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

export default function BlogWebsite() {
    const heroRef = useRef(null);
    const timelineRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Animazioni Hero
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

        // Animazioni Timeline
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

        // Animazioni CTA
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
        <div className="bg-[#f5f5f5]">
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
                    title="Blog Aziendale"
                    subtitle="Condividi storie, novità e competenze."
                    descr="Un blog professionale per aumentare l'autorità del tuo brand, migliorare la SEO e coinvolgere il tuo pubblico."
                />
            </section>

            {/* Sezione "Perché Sceglierci" */}
            <section className="bg-[#f5f5f5]">
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
            <section className="bg-white">
                <SiteSample sectionTitle="Esempi di Blog" />
            </section>

            {/* Pipeline del servizio */}
            <section ref={timelineRef} className="bg-[#f5f5f5]">
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
