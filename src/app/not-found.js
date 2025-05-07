'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

// Usando la palette di colori fornita
const theme = {
  colors: {
    black: "#000000",
    white: "#ffffff",
    blue: {
      light: "#82bfca",
      medium: "#489fb5",
      dark: "#16697a",
    },
    brown: {
      light: "#ede7e4",
    },
    orange: "#ffa62b",
  },
  backgroundImage: {
    "gradient-orange": "linear-gradient(to right, #ffa62b, #ff9a3b, #ff8c00)",
    "gradient-blue": "linear-gradient(to right, #16697a, #489fb5)"
  }
};

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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      backgroundColor: theme.colors.brown.light,
      fontFamily: 'system-ui, -apple-system, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Cerchi decorativi */}
      <div ref={circlesRef} style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
        <div className="circle" style={{ 
          position: 'absolute', 
          top: '15%', 
          left: '10%', 
          width: '120px', 
          height: '120px', 
          borderRadius: '50%', 
          background: theme.colors.blue.light,
          opacity: 0.6 
        }}></div>
        <div className="circle" style={{ 
          position: 'absolute', 
          top: '60%', 
          left: '20%', 
          width: '80px', 
          height: '80px', 
          borderRadius: '50%', 
          background: theme.colors.orange,
          opacity: 0.5 
        }}></div>
        <div className="circle" style={{ 
          position: 'absolute', 
          top: '30%', 
          right: '15%', 
          width: '150px', 
          height: '150px', 
          borderRadius: '50%', 
          background: theme.colors.blue.medium,
          opacity: 0.4 
        }}></div>
        <div className="circle" style={{ 
          position: 'absolute', 
          bottom: '20%', 
          right: '10%', 
          width: '100px', 
          height: '100px', 
          borderRadius: '50%', 
          background: theme.colors.blue.dark,
          opacity: 0.7 
        }}></div>
      </div>

      <div style={{ 
        zIndex: 1,
        textAlign: 'center',
        maxWidth: '600px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 ref={titleRef} style={{ 
          fontSize: '5rem', 
          margin: '0 0 20px',
          background: theme.backgroundImage["gradient-blue"],
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold'
        }}>
          404
        </h1>
        
        <div ref={textRef}>
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '20px',
            color: theme.colors.blue.dark
          }}>
            Pagina non trovata
          </h2>
          
          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.5',
            marginBottom: '30px',
            color: theme.colors.black
          }}>
            Ci dispiace, la pagina che stai cercando non esiste o è stata spostata.
          </p>
        </div>

        <Link href="/" passHref>
          <div 
            ref={buttonRef}
            style={{
              display: 'inline-block',
              padding: '12px 30px',
              background: theme.backgroundImage["gradient-orange"],
              color: theme.colors.white,
              borderRadius: '30px',
              fontWeight: 'bold',
              textDecoration: 'none',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(255, 166, 43, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 10px rgba(255, 166, 43, 0.2)';
            }}
          >
            Torna alla Home
          </div>
        </Link>
      </div>
    </div>
  );
}