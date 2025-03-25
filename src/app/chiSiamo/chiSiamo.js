'use client'

import { useEffect, useRef, useState } from 'react'
{/*
    useRef si riferisce al container principale
    useState tiene traccia della progressione dello scroll
    L'effect calcola quanto il container è visibile nella viewport 
*/}

export default function ChiSiamo() {
  const [scrollProgress, setScrollProgress] = useState(0) // scrollProgress tiene traccia dello scroll, compreso tra 0 e 1
  const containerRef = useRef(null) // riferimento al container principale di tutta la pagina 
  const titleRef = useRef(null) // riferimento al titolo principale
  const employees = ['CEO', 'CTO', 'Design Lead']
  const moralPrinciples = ['Innovazione', 'Trasparenza', 'Qualità', 'Collaborazione']

  useEffect(() => {
    let ticking = false // flag per evitare chiamate multiple
    
    // Calcola la posizione del container rispetto alla viewport
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
      className="min-h-[150vh] py-20 px-4 md:px-8 flex flex-col justify-center items-center"
    >
      {/* Titolo principale con effetto parallax */}
      <h1 
        ref={titleRef}
        className="text-[7vw] md:text-[6vw]  text-blue-dark font-bold mb-16 transition-transform duration-100"
        style={{
          transform: `translateY(${scrollProgress * -100}px) scale(${1 + scrollProgress * 0.2})`,
          opacity: 1 - (scrollProgress * 0.3)
        }}
      >
        Scopri chi c'è dietro Altair
      </h1>

      {/* Sezione team con effetti di apparizione */}
      <div className="w-full max-w-6xl">
        <div 
          className="mb-24 transition-all duration-500 delay-200"
          style={{
            transform: `translateX(${(scrollProgress - 0.5) * 100}px)`,
            opacity: scrollProgress > 0.2 ? 1 : 0
          }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-800 mb-6">Il nostro team</h2>
          <p className="text-lg text-gray-700">
            Un gruppo di professionisti appassionati che condividono una visione comune.
          </p>
        </div>

        {/* Membri del team con effetti a cascata */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {employees.map((role, index) => (
            <div 
              key={role}
              className="bg-white p-6 rounded-xl shadow-lg transition-all duration-500"
              style={{
                transform: `translateY(${scrollProgress > (0.3 + index * 0.15) ? 0 : 50}px)`,
                opacity: scrollProgress > (0.3 + index * 0.15) ? 1 : 0,
                transitionDelay: `${index * 100 + 200}ms`
              }}
            >
              <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-blue-900">{role}</h3>
              <p className="text-gray-600 mt-2">Descrizione del ruolo e competenze</p>
            </div>
          ))}
        </div>

        {/* Sezione valori con effetto di rotazione */}
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