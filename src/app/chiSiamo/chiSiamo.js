'use client';

import { useEffect, useRef, useState } from 'react';
import { Employee } from './components/ClassEmployees';
import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";

export default function ChiSiamo() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const teamMembers = [
    new Employee("Antonino La Ferrara", "Full stack developer 🧩", {
      src: "/cardEmployees/AntoninoLaFerrara.png",
    }),
    new Employee("Samuele Risso", "CTO", {
      src: "/cardEmployees/MarcoDonati.jpg",
    }),
    new Employee("Stive Baumi", "Design Lead", {
      src: "/cardEmployees/MarcoDonati.jpg",
    }),
    new Employee("Marco Donati", "Creatore di bug 👾", {
      src: "/cardEmployees/MarcoDonati.jpg",
    }),
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const { top } = containerRef.current.getBoundingClientRect();
            const progress = Math.min(
              1,
              Math.max(0, (window.innerHeight * 0.2 - top) / (window.innerHeight * 0.6))
            );
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-center items-center w-full min-h-[150vh] py-20 px-4 "
    >
      <h1
        ref={titleRef}
        className="text-[7vw] md:text-[6vw] text-blue-dark font-bold mb-[3vw] transition-transform duration-100"
        style={{
          transform: `translateY(${scrollProgress * -100}px) scale(${1 + scrollProgress * 0.2})`,
          opacity: 1 - scrollProgress * 0.3,
        }}
      >
        {`Scopri chi c'è dietro Altair`}
      </h1>

      <div className="w-full max-w-6xl">
        <div
          className="mb-24 transition-all duration-500 delay-200"
          style={{
            transform: `translateX(${(scrollProgress - 0.5) * 100}px)`,
            opacity: scrollProgress > 0.2 ? 1 : 0,
          }}
        >
          <div className="bg-blue-50 border-l-4 border-blue-medium p-6 rounded-lg shadow-md">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-[1.5vw]">
              Il nostro team
            </h2>
            <p className="text-lg text-gray-900 font-semibold">
              Pionieri di soluzioni, guidati dalla curiosità e dalla voglia di cambiare le regole del gioco.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2.5vw]">
          {teamMembers.map((employee, index) =>
            employee.getCardComponent(scrollProgress, index)
          )}
        </div>

        <div
          className="mt-[7vw] p-[1vw] bg-blue-50 border-l-4 border-blue-medium shadow-md rounded-3xl"
          >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-[1vw]">I nostri valori</h2>
            <p ref={ref} className="text-lg text-gray-900 font-semibold">
              {inView && (
                <TypeAnimation
                  sequence={[
                    "🌍 Oltre i confini\n Esploriamo territori inesplorati con curiosità da pionieri.\n🧰 Ecosistema umano\n Tecnologia che amplifica, non sostituisce l'umanità.\n🍃 Bellezza funzionale\n Cerchiamo l'armonia perfetta tra forma e sostanza.\n🥳 Gioia contagiosa\n Lavoriamo con il sorriso e lo trasmettiamo attraverso ciò che creiamo.",
                  ]}
                  speed={60}
                  style={{ whiteSpace: "pre-line" }}
                  cursor={false}
                />
              )}
            </p>
        </div>
      </div>
    </div>
  );
}
