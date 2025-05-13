"use client"

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const HeroCallToAction = ({ buttonText = "CONTATTACI" }) => {
  const buttonRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const iconRef = useRef(null);
  const pulseRef = useRef(null);
  
  // Function to scroll to contact section
  const scrollToSection = (id) => {
    if (typeof document !== "undefined") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Initial animation
    const buttonTl = gsap.timeline();
    
    // Button appearance animation
    buttonTl
      .fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
      )
      .fromTo(
        circleRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.7"
      )
      .fromTo(
        textRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        iconRef.current,
        { rotate: -30, opacity: 0 },
        { rotate: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );

    // Continuous subtle animations
    const pulseAnimation = gsap.timeline({ repeat: -1, yoyo: true });
    pulseAnimation
      .to(pulseRef.current, {
        scale: 1.15,
        opacity: 0.6,
        duration: 1.5,
        ease: "sine.inOut"
      })
      .to(pulseRef.current, {
        scale: 1,
        opacity: 0.2,
        duration: 1.5,
        ease: "sine.inOut"
      });

    // Hover animations setup
    const hoverTl = gsap.timeline({ paused: true });
    hoverTl
      .to(buttonRef.current, {
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(255, 166, 43, 0.4)",
        duration: 0.3,
        ease: "power2.out"
      })
      .to(
        circleRef.current,
        {
          scale: 1.1,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          duration: 0.3,
          ease: "power2.out"
        },
        0
      )
      .to(
        iconRef.current,
        {
          rotate: 15,
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out"
        },
        0
      )
      .to(
        textRef.current,
        {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        },
        0
      );

    // Mouse events
    buttonRef.current.addEventListener("mouseenter", () => hoverTl.play());
    buttonRef.current.addEventListener("mouseleave", () => hoverTl.reverse());
    
    // Click animation
    buttonRef.current.addEventListener("mousedown", () => {
      gsap.to(buttonRef.current, {
        scale: 0.95,
        duration: 0.1,
        ease: "power2.inOut"
      });
    });
    
    buttonRef.current.addEventListener("mouseup", () => {
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 0.1,
        ease: "power2.inOut"
      });
    });

    return () => {
      buttonTl.kill();
      pulseAnimation.kill();
      hoverTl.kill();
      
      if (buttonRef.current) {
        buttonRef.current.removeEventListener("mouseenter", () => hoverTl.play());
        buttonRef.current.removeEventListener("mouseleave", () => hoverTl.reverse());
        buttonRef.current.removeEventListener("mousedown", () => {});
        buttonRef.current.removeEventListener("mouseup", () => {});
      }
    };
  }, []);

  return (
    <div className="mt-6 md:mt-8 relative">
      {/* Pulsating circle behind button */}
      <div 
        ref={pulseRef}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ffa62b] to-[#16697a] opacity-20"
      />
      
      {/* Main button */}
      <button
        ref={buttonRef}
        onClick={() => scrollToSection("contactUs")}
        className="
          relative flex items-center justify-center gap-2 md:gap-4
          px-6 md:px-10 py-3 md:py-4 w-auto
          text-base md:text-lg font-bold text-white
          rounded-full overflow-hidden
          shadow-lg
          bg-gradient-to-r from-[#ffa62b] to-[#ff7b00]
          transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-[#ffa62b] focus:ring-opacity-50
        "
      >
        {/* Circle element */}
        <div 
          ref={circleRef}
          className="
            absolute left-2 md:left-4 
            flex items-center justify-center 
            w-8 h-8 md:w-12 md:h-12
            bg-white bg-opacity-10
            rounded-full
          "
        >
          {/* Icon */}
          <div ref={iconRef}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white md:w-6 md:h-6"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </div>
        </div>

        {/* Button text */}
        <span 
          ref={textRef}
          className="ml-6 md:ml-8 text-white tracking-wider"
        >
          {buttonText}
        </span>
      </button>
    </div>
  );
};

export default HeroCallToAction;