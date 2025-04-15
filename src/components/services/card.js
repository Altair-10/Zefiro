"use client"

import React from "react";
import { useState, useRef, useEffect } from "react"
import Image from "next/image";
import Link from "next/link";

const Card = ({ image, CardTitle, CardDescription, btnHref, animationDirection }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Definiamo gli stili in linea per l'animazione
  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : animationDirection === "left" ? "translateX(-100px)" : "translateX(100px)",
    transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
  };
  return (
    <div ref={cardRef} style={animationStyle} className="w-full h-full min-h-0 flex flex-col md:flex-row bg-gray-100 rounded-xl overflow-hidden">
      {/* Blocco immagine */}
      <div className="w-full h-1/2 md:w-1/2 md:h-full">
        <Image
          src={image}
          width={1000}
          height={1000}
          alt=""
          className="w-full h-full object-contain p-2 bg-orange"
        />
      </div>

      {/* Blocco testo */}
      <div className="flex flex-col justify-around items-center text-center w-full h-1/2 md:w-1/2 md:h-full p-4">
        <h3 className="text-[7vw] md:text-[2vw] font-semibold text-dark dark:text-black whitespace-nowrap">
          {CardTitle}
        </h3>
        <p className="mb-4 text-base leading-relaxed text-body-color dark:text-dark-6">
          {CardDescription}
        </p>
        <Link
          href={btnHref}
          className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-slate-600 dark:border-dark-3 dark:text-dark-6"
        >
          Scopri di più
        </Link>
      </div>
    </div>
  );
};

export default Card;
