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

export default function PortfolioCreativo() {
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
        <div className="bg-[#f5f0eb]">
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
            <section className="bg-[#f5f0eb]">
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
            <section ref={timelineRef} className="bg-[#f5f0eb]">
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
