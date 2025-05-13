'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

export default function NotFound() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const circlesRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animazione del titolo
    gsap.from(titleRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Animazione del testo
    gsap.from(textRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out"
    });

    // Animazione del pulsante
    gsap.from(buttonRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      delay: 0.6,
      ease: "elastic.out(1, 0.3)"
    });

    // Animazione dei cerchi decorativi
    const circles = circlesRef.current.querySelectorAll('.circle');
    gsap.fromTo(circles, 
      { scale: 0, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.8,
        stagger: 0.1,
        delay: 0.2,
        ease: "back.out(1.7)"
      }
    );

    // Animazione continua per i cerchi
    gsap.to(circles, {
      y: -15,
      duration: 2,
      stagger: 0.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-brown-light font-sans relative overflow-hidden">
      {/* Cerchi decorativi */}
      <div ref={circlesRef} className="absolute w-full h-full z-0">
        <div className="circle absolute top-[15%] left-[10%] w-32 h-32 rounded-full bg-blue-light opacity-60"></div>
        <div className="circle absolute top-[60%] left-[20%] w-20 h-20 rounded-full bg-orange opacity-50"></div>
        <div className="circle absolute top-[30%] right-[15%] w-36 h-36 rounded-full bg-blue-medium opacity-40"></div>
        <div className="circle absolute bottom-[20%] right-[10%] w-24 h-24 rounded-full bg-blue-dark opacity-70"></div>
      </div>

      <div className="z-10 text-center max-w-xl bg-white bg-opacity-90 p-10 rounded-2xl shadow-lg">
        <h1 ref={titleRef} className="text-8xl m-0 mb-5 font-bold bg-gradient-blue bg-clip-text text-transparent">
          404
        </h1>
        
        <div ref={textRef}>
          <h2 className="text-4xl mb-5 text-blue-dark">
            Pagina non trovata
          </h2>
          
          <p className="text-lg leading-relaxed mb-8 text-black">
            Ci dispiace, la pagina che stai cercando non esiste o è stata spostata.
          </p>
        </div>

        <Link href="/" passHref>
          <div 
            ref={buttonRef}
            className="inline-block px-8 py-3 bg-gradient-orange text-white rounded-full font-bold text-lg cursor-pointer transition-transform duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
          >
            Torna alla Home
          </div>
        </Link>
      </div>
    </div>
  );
}