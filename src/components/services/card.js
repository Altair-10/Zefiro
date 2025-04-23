"use client"

import React from "react";
import { useState, useRef, useEffect } from "react"
import Image from "next/image";
import AnimatedButton from "./animatedButton";

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
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blocco testo con inner shadow */}
      <div className="
        flex flex-col justify-around items-center text-center w-full h-1/2 md:w-1/2 md:h-full p-4 relative
        before:content-[''] before:absolute before:inset-0 before:pointer-events-none
        before:shadow-[inset_2px_2px_8px_rgba(0,0,0,0.12),inset_-1px_-1px_6px_rgba(0,0,0,0.08)]
      ">
        <h3 className="text-gray-800 font-bold">
          {CardTitle}
        </h3>
        <p className="mb-4 leading-relaxed text-gray-600 dark:text-dark-6">
          {CardDescription}
        </p>
        <AnimatedButton href={btnHref} />
      </div>
    </div>
  );
};

export default Card;