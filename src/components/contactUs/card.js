"use client";

import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

export default function ContactUsCard() {
  const { ref, inView } = useInView({
    // Rimuovo triggerOnce per monitorare ogni ingresso/uscita
    threshold: 0.5,
  });

  // Stato per forzare il remount del componente dell'animazione
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (inView) {
      // Incrementa la chiave ogni volta che l'elemento è visibile,
      // in modo da far ripartire l'animazione.
      setAnimationKey((prevKey) => prevKey + 1);
    }
  }, [inView]);

  return (
    <div ref={ref} className="w-full h-full rounded-xl shadow-2xl bg-gray-100">
      {/* Puntini colorati in alto */}
      <div className="flex p-2">
        <div className="px-1">
          <span className="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer" />
        </div>
        <div className="px-1">
          <span className="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer" />
        </div>
        <div className="px-1">
          <span className="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer" />
        </div>
      </div>

      {/* Contenuto della card */}
      <div className="flex flex-col justify-center items-center my-[8vw] md:my-[3.5vw] px-5">
        <h2 className="flex justify-center text-gray-800 font-bold mb-4">
          {inView && (
            <TypeAnimation
              key={`heading-${animationKey}`}
              sequence={[
                "Qual è il tuo obiettivo? 🎯",
                1000, // Tempo di attesa dopo la fine dell'animazione
              ]}
              speed={50}
              style={{ whiteSpace: "pre-line" }}
              cursor={false} // Disabilita il cursore lampeggiante
            />
          )}
        </h2>
        <p className="text-center text-gray-600">
          {inView && (
            <TypeAnimation
              key={`text-${animationKey}`}
              sequence={[
                1500, // Ritardo prima di iniziare
                `Descrivici il tuo sogno tecnologico. \nNoi ti aiuteremo a concretizzarlo \npasso dopo passo 👣`,
                1000, // Tempo di attesa dopo la fine dell'animazione
              ]}
              speed={65}
              style={{ whiteSpace: "pre-line" }}
              cursor={false}
            />
          )}
        </p>
      </div>
    </div>
  );
}
