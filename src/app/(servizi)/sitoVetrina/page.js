"use client";

import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Francesco from './HeroSection.js';
import PercheSceglierci from '@/components/percheSceglierci.js';
import OurPipeline from '@/components/ourPipeline.js';
import PianiAbbonamento from '@/components/pianiAbbonamento.js';
import SiteSample from '@/components/siteSample.js';

// Registriamo ScrollTrigger
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function SitoVetrina() {
    // Refs per le animazioni
    const heroRef = useRef(null);
    const timelineRef = useRef(null);
    const ctaRef = useRef(null);

    // Animazioni con GSAP quando il componente è montato
    useEffect(() => {
        // Hero Section animation
        gsap.fromTo(
            heroRef.current.querySelectorAll('.hero-text'),
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: 'power3.out' }
        );

        // Pulsante pulsante
        gsap.to(heroRef.current.querySelector('.cta-button'), {
            scale: 1.05,
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: 'sine.inOut'
        });

        // Cards animation on scroll


        // Timeline animation
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
                    ease: 'power2.out'
                }
            );
        });

        // CTA finale animation
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
                ease: 'elastic.out(1, 0.5)'
            }
        );

        // Shine effect manuale per il pulsante CTA
        const shineAnimation = () => {
            if (!ctaRef.current) return;

            const shineElement = ctaRef.current.querySelector('.shine-effect');
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
                        }
                    }
                );
            }
        };
        setTimeout(shineAnimation, 2000);

    }, []);

    return (
        <div className="bg-[#ede7e4]">
            <Head>
                <title>Sito Vetrina | La tua presenza digitale professionale</title>
                <meta name="description" content="Crea una vetrina digitale professionale per la tua azienda. Design personalizzato, mobile-friendly e ottimizzato per le conversioni." />
            </Head>

            {/* 1. Hero Section */}
            <section ref={heroRef} className="relative h-screen w-screen overflow-hidden pt-16 ">
                <Francesco />
            </section>

            {/* 2. Sezione "Perché Sceglierlo" */}
            <section className="bg-[#ede7e4]">
                <PercheSceglierci
                    sectionTitle="Perché scegliere un Sito Vetrina"
                    icon1="📱"
                    cardTitle1="Mobile First"
                    cardBody1="Adattabile a tutti i dispositivi con design fluidi. L'esperienza utente ottimale su smartphone, tablet e desktop."
                    icon2="🚀"
                    cardTitle2="Velocità Ottimizzata"
                    cardBody2="Tempi di caricamento rapidi per mantenere i visitatori coinvolti e migliorare il posizionamento sui motori di ricerca."
                    icon3="🔍"
                    cardTitle3="SEO Integrato"
                    cardBody3="Ottimizzato per i motori di ricerca fin dal primo giorno, per far trovare la tua azienda ai clienti giusti."
                />
            </section>

            {/* 3. Demo Interattiva */}
            <section className="bg-white">
                <SiteSample
                    sectionTitle="Esempi di Siti Vetrina"
                />
            </section>

            {/* 4. Dettagli del Servizio (Timeline) */}
            <section className="bg-[#ede7e4]">
                <OurPipeline 
                    sectionTitle={"Il nostro processo"}
                    cardTitle1={"Analisi delle esigenze"}
                    cardBody1={"Iniziamo ascoltando le tue necessità. Comprendiamo il tuo business, i tuoi obiettivi e il tuo pubblico di riferimento per creare una strategia digitale su misura per te."}
                    cardTitle2={"Design personalizzato"}
                    cardBody2={"Creiamo un design unico che riflette l'identità del tuo brand. Ogni elemento è pensato per offrire una user experience eccellente e per comunicare efficacemente i tuoi valori."}
                    cardTitle3={"Ottimizzazione SEO"}
                    cardBody3={"Implementiamo le migliori pratiche SEO per assicurare che il tuo sito sia ben posizionato sui motori di ricerca, aumentando la tua visibilità online e il traffico qualificato."}
                />
            </section>

            {/* 6. CTA Finale */}
            <section ref={ctaRef} className="py-24 bg-gradient-blue ">
                <div className="container mx-auto px-4 text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        Pronto a far crescere la tua presenza online?
                    </h2>
                    <p className="text-xl max-w-2xl mx-auto mb-12">
                        Trasforma la tua attività con un sito vetrina professionale e inizia a conquistare nuovi clienti oggi stesso.
                    </p>

                    {/* Pulsante con shine effect migliorato */}
                    <div className="relative inline-block overflow-hidden rounded-full group">
                        <button className="relative z-10 bg-gradient-orange text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition duration-300">
                            Richiedi un preventivo gratuito
                        </button>
                        {/* Shine effect animato con GSAP */}
                        <div className="shine-effect absolute top-0 left-0 w-full h-full bg-white bg-opacity-30 transform -skew-x-45"></div>
                    </div>
                </div>
            </section>
            <section>
                <PianiAbbonamento />
            </section>
        </div>
    );
}