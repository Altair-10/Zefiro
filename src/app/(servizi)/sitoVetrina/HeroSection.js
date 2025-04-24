import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import AnimatedButton from "@/components/services/AnimatedButton";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);
  const circle4Ref = useRef(null);
  const circle5Ref = useRef(null);

  useEffect(() => {
    // Main content animation on load
    const contentTl = gsap.timeline();
    contentTl
      .fromTo(
        svgRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power2.out" }
      )
      .fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=1.5"
      )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.8"
      )
      .fromTo(
        buttonRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.7"
      );

    // Initial bubble animations
    const bubbleTl = gsap.timeline();

    // Main center circle
    bubbleTl.fromTo(
      circle1Ref.current,
      {
        scale: 0.7,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 2.5,
        ease: "elastic.out(1, 0.5)"
      }
    );

    // Top left circle
    bubbleTl.fromTo(
      circle2Ref.current,
      {
        x: -50,
        y: -50,
        opacity: 0
      },
      {
        x: 0,
        y: 0,
        opacity: 0.4,
        duration: 3,
        ease: "power2.out"
      },
      "-=2"
    );

    // Bottom right circle
    bubbleTl.fromTo(
      circle3Ref.current,
      {
        x: 70,
        y: 70,
        opacity: 0
      },
      {
        x: 0,
        y: 0,
        opacity: 0.5,
        duration: 3.5,
        ease: "power2.out"
      },
      "-=3"
    );

    // Top right circle
    bubbleTl.fromTo(
      circle4Ref.current,
      {
        x: 30,
        y: -30,
        opacity: 0
      },
      {
        x: 0,
        y: 0,
        opacity: 0.3,
        duration: 2.8,
        ease: "power2.out"
      },
      "-=3.3"
    );

    // Bottom left circle
    bubbleTl.fromTo(
      circle5Ref.current,
      {
        x: -40,
        y: 40,
        opacity: 0
      },
      {
        x: 0,
        y: 0,
        opacity: 0.4,
        duration: 3.2,
        ease: "power2.out"
      },
      "-=3"
    );

    // Subtle floating animation that eventually stops
    const floatingTl = gsap.timeline({ delay: 2 });

    // Apply a gentle floating motion to each circle
    [circle1Ref, circle2Ref, circle3Ref, circle4Ref, circle5Ref].forEach((circleRef, index) => {
      const duration = 8 + index;
      const delay = index * 0.3;

      // Random gentle movement
      const xMovement = (Math.random() - 0.5) * 20;
      const yMovement = (Math.random() - 0.5) * 20;

      floatingTl.to(
        circleRef.current,
        {
          x: xMovement,
          y: yMovement,
          duration: duration,
          ease: "sine.inOut",
          yoyo: true,
          repeat: 1, // Only go back and forth once before stopping
          delay: delay
        },
        0
      );
    });

    // Scroll animation setup
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionHeight = sectionRef.current.offsetHeight;

      // Calculate scroll progress (0 to 1)
      const scrollProgress = Math.min(scrollPosition / (sectionHeight * 0.6), 1);

      // Define movement directions for each circle
      const directions = [
        { x: 0, y: -100 },       // Center circle moves up
        { x: -150, y: -150 },    // Top left moves further top-left
        { x: 150, y: 150 },      // Bottom right moves further bottom-right
        { x: 150, y: -150 },     // Top right moves further top-right
        { x: -150, y: 150 }      // Bottom left moves further bottom-left
      ];

      // Apply transformations based on scroll position
      [circle1Ref, circle2Ref, circle3Ref, circle4Ref, circle5Ref].forEach((circleRef, i) => {
        const direction = directions[i];

        // Apply movement and fade out
        gsap.to(circleRef.current, {
          x: direction.x * scrollProgress,
          y: direction.y * scrollProgress,
          opacity: Math.max(1 - scrollProgress * 1.5, 0), // Fade out faster than movement
          scale: 1 - (scrollProgress * 0.3),
          duration: 0.1, // Make it responsive to scroll
          ease: "none"
        });
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      contentTl.kill();
      bubbleTl.kill();
      floatingTl.kill();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden text-white"
    >
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#16697a] to-[#489fb5]" />

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-black" />

      {/* SVG Background Elements */}
      <svg
        ref={svgRef}
        className="absolute w-full h-full object-cover z-0"
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffa62b" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ede7e4" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* Main center circle */}
        <circle
          ref={circle1Ref}
          cx="400"
          cy="300"
          r="180"
          fill="url(#circleGradient)"
          filter="url(#glow)"
        />

        {/* Top left circle */}
        <circle
          ref={circle2Ref}
          cx="200"
          cy="150"
          r="70"
          fill="#ffa62b"
          opacity="0.4"
          filter="url(#glow)"
        />

        {/* Bottom right circle */}
        <circle
          ref={circle3Ref}
          cx="600"
          cy="450"
          r="90"
          fill="#ede7e4"
          opacity="0.5"
          filter="url(#glow)"
        />

        {/* Top right circle */}
        <circle
          ref={circle4Ref}
          cx="700"
          cy="200"
          r="40"
          fill="#ffa62b"
          opacity="0.3"
          filter="url(#glow)"
        />

        {/* Bottom left circle */}
        <circle
          ref={circle5Ref}
          cx="300"
          cy="500"
          r="60"
          fill="#ede7e4"
          opacity="0.4"
          filter="url(#glow)"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-[#ffa62b] to-[#ede7e4] text-transparent bg-clip-text"
        >
          Sito Vetrina
        </h1>

        <div ref={subtitleRef} className="space-y-3 mb-8">
          <p className="text-xl md:text-3xl font-bold bg-gradient-to-r from-[#ffa62b] to-[#ede7e4] text-transparent bg-clip-text">
            La tua vetrina digitale sempre aperta.
          </p>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
            Design su misura, mobile-friendly e ottimizzato per convertire visitatori in clienti.
          </p>
        </div>
        <div className="flex justify-center">
          <AnimatedButton mode="scroll" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;