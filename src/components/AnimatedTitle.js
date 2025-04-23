"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const animatedTitle = ({ text = "", doubleRow = false }) => {
  const containerRef = useRef(null);
  const lineRefs = useRef([]);

  useEffect(() => {
    if (!text || !lineRefs.current.length) return;

    const lines = doubleRow ? text.split("\n") : [text];

    lineRefs.current.forEach((ref, lineIndex) => {
      if (!ref) return;

      const characters = lines[lineIndex].split("");

      ref.innerHTML = characters
        .map(
          (char, i) =>
            char === " "
              ? '&nbsp;'
              : `<span class="inline-block opacity-0" style="transform: translateY(20px) scale(0.8);" key=${i}>${char}</span>`
        )
        .join("");

      const letterElements = ref.querySelectorAll("span");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.to(letterElements, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.2)",
        stagger: 0.05,
        delay: lineIndex * 0.2, // leggero ritardo tra le righe
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [text, doubleRow]);

  const lines = doubleRow ? text.split("\n") : [text];

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col justify-center items-center mt-10 md:mb-5 md:mt-14"
    >
      {lines.map((line, index) => (
        <h1
          key={index}
          ref={el => (lineRefs.current[index] = el)}
          className="font-bold text-blue-dark text-center leading-tight whitespace-nowrap mb-[7vw] md:mb-[1vw]"
        />
      ))}
    </div>
  );
};

export default animatedTitle;
