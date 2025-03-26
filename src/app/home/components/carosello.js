"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/imgCarosello/bar.jpg",
  "/imgCarosello/ristorante.jpg",
  "/imgCarosello/spiaggia.jpg",
  "/imgCarosello/concessionaria.jpg",
];

export default function Carosello() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Aggiungi un useEffect per gestire lo scroll automatico
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Modifica il tempo a tuo piacere (3000 ms = 3 secondi)

    // Cleanup quando il componente viene smontato
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full mx-auto overflow-hidden rounded-lg shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <Image
            src={images[index]}
            width={800}
            height={800}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        ❯
      </button>
    </div>
  );
}
