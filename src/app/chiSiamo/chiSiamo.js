'use client'

import { useEffect, useRef, useState } from 'react'
import { Employee } from './components/ClassEmployees' 

export default function ChiSiamo() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  
  // Definisci i membri del team come oggetti completi
  const teamMembers = [
    new Employee(
      "Antonino La Ferrara",
      "Full stack developer 🧩",
      {
        src: "/cardEmployees/AntoninoLaFerrara.png",
        alt: "Foto"
      }
    ),
    new Employee(
      "Samuele Risso",
      "CTO",
      {
        src: "/cardEmployees/MarcoDonati.jpg",
        alt: "Foto del CTO",
      }
    ),
    new Employee(
      "Stive Baumi",
      "Design Lead",
      {
        src: "/cardEmployees/MarcoDonati.jpg",
        alt: "Foto del Design Lead",
      }
    ),
    new Employee(
      "Marco Donati",
      "Creatore di bug 👾",
      {
        src: "/cardEmployees/MarcoDonati.jpg",
        alt: "Foto del Design Lead",
      }
    )
  ];

  const moralPrinciples = ['Innovazione', 'Trasparenza', 'Qualità', 'Collaborazione']

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const { top } = containerRef.current.getBoundingClientRect()
            const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.2 - top) / (window.innerHeight * 0.6)))
            setScrollProgress(progress)
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-center items-center w-full min-h-[150vh] py-20 px-4 md:px-8 "
    >
      {/* Titolo principale */}
      <h1
        ref={titleRef}
        className="text-[7vw] md:text-[6vw] text-blue-dark font-bold mb-16 transition-transform duration-100"
        style={{
          transform: `translateY(${scrollProgress * -100}px) scale(${1 + scrollProgress * 0.2})`,
          opacity: 1 - (scrollProgress * 0.3)
        }}
      >
        {`Scopri chi c'è dietro Altair`}
      </h1>

      {/* Sezione team */}
      <div className="w-full max-w-6xl">
        <div
          className="mb-24 transition-all duration-500 delay-200"
          style={{
            transform: `translateX(${(scrollProgress - 0.5) * 100}px)`,
            opacity: scrollProgress > 0.2 ? 1 : 0
          }}
        >
          <div className="bg-blue-50 border-l-4 border-blue-medium p-6 rounded-lg shadow-md">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-6">Il nostro team</h2>
            <p className="text-lg text-gray-900 font-semibold">
              Pionieri di soluzioni, guidati dalla curiosità e dalla voglia di cambiare le regole del gioco.            
            </p>
          </div>
        </div>

        {/* Membri del team */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
          {teamMembers.map((employee, index) => 
            employee.getCardComponent(scrollProgress, index)
          )}
        </div>

        {/* Sezione valori */}
        <div
          className="mt-32 p-8 bg-blue-900 text-white rounded-3xl transition-all duration-1000"
          style={{
            transform: `rotate(${scrollProgress * 5}deg)`,
            opacity: scrollProgress > 0.6 ? 1 : 0
          }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">I nostri valori</h2>
          <ul className="space-y-4">
            {moralPrinciples.map((value, i) => (
              <li
                key={value}
                className="text-lg transition-all duration-300"
                style={{
                  transform: `translateX(${scrollProgress > (0.65 + i * 0.1) ? 0 : -20}px)`,
                  opacity: scrollProgress > (0.65 + i * 0.1) ? 1 : 0
                }}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}