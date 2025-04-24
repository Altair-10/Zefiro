"use client";

import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Francesco from './HeroSection.js';

// Registriamo ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SitoVetrina() {
  // Refs per le animazioni
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
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
    const cards = cardsRef.current.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { 
          opacity: 0, 
          y: 50,
          rotateY: index % 2 === 0 ? -5 : 5 
        },
        {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.8,
          ease: 'power3.out'
        }
      );
    });

    // Icon rotation animation
    const iconWrappers = cardsRef.current.querySelectorAll('.icon-wrapper');
    iconWrappers.forEach((icon) => {
      gsap.to(icon.querySelector('div'), {
        scrollTrigger: {
          trigger: icon,
          start: 'top 70%',
        },
        rotate: 360,
        duration: 1.5,
        ease: 'elastic.out(1, 0.3)'
      });
    });

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
      <section ref={cardsRef} className="py-20 bg-[#ede7e4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-dark mb-16">Perché scegliere un Sito Vetrina</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="feature-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#489fb5]">
              <div className="icon-wrapper mb-6 text-5xl text-[#489fb5] flex justify-center">
                <div className="transform transition-transform duration-300 hover:rotate-12 bg-brown-light p-4 rounded-full">
                  📱
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-dark text-center">Mobile First</h3>
              <p className="text-gray-700">
                Adattabile a tutti i dispositivi con design fluidi. L'esperienza utente ottimale su smartphone, tablet e desktop.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="feature-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#489fb5]">
              <div className="icon-wrapper mb-6 text-5xl text-[#489fb5] flex justify-center">
                <div className="transform transition-transform duration-300 hover:rotate-12 bg-brown-light p-4 rounded-full">
                  🚀
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-dark text-center">Velocità ottimizzata</h3>
              <p className="text-gray-700">
                Tempi di caricamento rapidi per mantenere i visitatori coinvolti e migliorare il posizionamento sui motori di ricerca.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="feature-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#489fb5]">
              <div className="icon-wrapper mb-6 text-5xl text-[#489fb5] flex justify-center">
                <div className="transform transition-transform duration-300 hover:rotate-12 bg-brown-light p-4 rounded-full">
                  🔍
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-dark text-center">SEO Integrato</h3>
              <p className="text-gray-700">
                Ottimizzato per i motori di ricerca fin dal primo giorno, per far trovare la tua azienda ai clienti giusti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Demo Interattiva */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-dark mb-16">Esempi di Siti Vetrina</h2>
          
          {/* Qui inseriamo il carousel */}
          <div className="demo-carousel relative max-w-5xl mx-auto">
            {/* Immagini demo - in produzione usare un vero carousel */}
            <div className="overflow-hidden rounded-lg shadow-xl border-4 border-[#ede7e4]">
              <Image 
                src="/images/showcase-example-1.jpg" 
                alt="Esempio Sito Vetrina" 
                width={1200} 
                height={675}
                className="w-full"
              />
            </div>
            
            {/* Controlli custom */}
            <div className="flex justify-center mt-8 space-x-4">
              <button className="w-12 h-12 rounded-full bg-blue-light flex items-center justify-center hover:bg-blue-medium text-white transition-colors duration-300 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-blue-light flex items-center justify-center hover:bg-blue-medium text-white transition-colors duration-300 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Dettagli del Servizio (Timeline) */}
      <section ref={timelineRef} className="py-20 bg-[#ede7e4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-dark mb-16">Il nostro processo</h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="timeline-step flex flex-col md:flex-row mb-16 bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0 mb-4 md:mb-0 mx-auto md:mx-0">
                1
              </div>
              <div className="md:ml-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-dark text-center md:text-left">Analisi delle esigenze</h3>
                <p className="text-gray-700">
                  Iniziamo ascoltando le tue necessità. Comprendiamo il tuo business, i tuoi obiettivi e il tuo pubblico di riferimento per creare una strategia digitale su misura per te.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="timeline-step flex flex-col md:flex-row mb-16 bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0 mb-4 md:mb-0 mx-auto md:mx-0">
                2
              </div>
              <div className="md:ml-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-dark text-center md:text-left">Design personalizzato</h3>
                <p className="text-gray-700">
                  Creiamo un design unico che riflette l'identità del tuo brand. Ogni elemento è pensato per offrire una user experience eccellente e per comunicare efficacemente i tuoi valori.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="timeline-step flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0 mb-4 md:mb-0 mx-auto md:mx-0">
                3
              </div>
              <div className="md:ml-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-dark text-center md:text-left">Ottimizzazione SEO</h3>
                <p className="text-gray-700">
                  Implementiamo le migliori pratiche SEO per assicurare che il tuo sito sia ben posizionato sui motori di ricerca, aumentando la tua visibilità online e il traffico qualificato.
                </p>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
}