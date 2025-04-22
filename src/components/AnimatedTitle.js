"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animatedTitle = ({ text = "" }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current || !text) return;

    // Split mantiene gli spazi, ma li avvolgiamo in span separati
    const characters = text.split("").map((char) => (char === " " ? " " : char));

    textRef.current.innerHTML = characters
      .map(
        (char, i) =>
          char === " "
            ? '&nbsp;'  // Usa &nbsp; per gli spazi "non collassabili"
            : `<span class="inline-block opacity-0" style="transform: translateY(20px) scale(0.8);" key=${i}>${char}</span>`
      )
      .join("");

    const letterElements = textRef.current.querySelectorAll("span");

    // Animazione GSAP (solo per gli span, ignora &nbsp;)
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
    });

    return () => tl.kill();
  }, [text]);

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center mt-24 md:my-5 md:mt-32"
    >
      <h1
        ref={textRef}
        className="font-bold text-blue-dark text-center leading-tight whitespace-nowrap"
      />
    </div>
  );
};

export default animatedTitle;