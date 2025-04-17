import { useEffect, useRef } from "react";
import gsap from "gsap";

const Title = () => {
  const iconRef = useRef(null);
  const takeLettersRef = useRef([]);
  const fLetterRef = useRef(null);
  const rFutureLettersRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animazione "Take IT"
    tl.fromTo(
      takeLettersRef.current,
      { 
        opacity: 0, 
        y: 40,
        rotationX: 90 
      },
      { 
        opacity: 1, 
        y: 0,
        rotationX: 0,
        duration: 0.4, 
        stagger: 0.08, 
        ease: "back.out" 
      }
    );

    // Animazione della "f"
    tl.fromTo(
      fLetterRef.current,
      { 
        opacity: 0, 
        y: 40,
        rotationX: 90 
      },
      { 
        opacity: 1, 
        y: 0,
        rotationX: 0,
        duration: 0.2, 
        ease: "back.out" 
      },
      "+=0.2"
    );

    // Animazione icona
    tl.fromTo(
      iconRef.current,
      { 
        x: "-200%", 
        rotation: -1900,
        opacity: 0 
      },
      { 
        x: "0%", 
        rotation: 0, 
        opacity: 1, 
        duration: 1.2,
        ease: "power4.out" 
      },
      "-=0.3"
    );

    // Salto icona
    tl.to(iconRef.current, {
      scale: 1.2,
      y: -10,
      duration: 0.3,
      ease: "power1.in",
    }).to(iconRef.current, {
      scale: 1,
      y: 0,
      duration: 0.4,
      ease: "bounce.out",
    });

    // Animazione "r future" 
    tl.fromTo(
      rFutureLettersRef.current,
      { 
        opacity: 0, 
        y: 40,
        rotationX: 90 
      },
      { 
        opacity: 1, 
        y: 0,
        rotationX: 0,
        duration: 0.6, 
        stagger: 0.08, 
        ease: "back.out" 
      },
      "-=0.2"
    );

  }, []);

  const OIcon = (
    <span
      ref={iconRef}
      className="inline-block align-middle w-[4vw] h-[4vw] opacity-0 mx-[0.5vw]"
    >
      <svg
        viewBox="0 0 196 194"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M185.5 54.5L155 48L152 15.5L122 26.5L104.5 0L84.5 25L55.5 9.5L50 42L17.5 44L29.5 73.5L0.5 91.5L27 112.5L12 141L43.5 145.5L45.5 178L76 166.5L94 194L114.5 169.5L142.5 183L148.5 150.5H178.5L171.5 120.5L195.5 103.5L171.5 81.5L185.5 54.5Z"
          fill="url(#paint0_linear_1_7)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_7"
            x1="0.5"
            y1="97.6827"
            x2="195.496"
            y2="95.9208"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFA62B" />
            <stop offset="0.5" stopColor="#FFA033" />
            <stop offset="1" stopColor="#FF8C00" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );

  // "Take IT" in lettere mantenendo lo spazio
  const renderTakeIt = () => {
    const text = "Take IT ";
    return text.split("").map((char, i) => (
      <span 
        key={`take-${i}`} 
        ref={el => takeLettersRef.current[i] = el}
        className={`inline-block opacity-0 ${char === ' ' ? 'w-[0.5em]' : ''}`}
      >
        {char}
      </span>
    ));
  };

  // "r future" in lettere
  const renderRFuture = () => {
    const text = "r future";
    return text.split("").map((char, i) => (
      <span 
        key={`r-${i}`} 
        ref={el => rFutureLettersRef.current[i] = el}
        className={`inline-block opacity-0 ${char === ' ' ? 'w-[0.5em]' : ''}`}
      >
        {char}
      </span>
    ));
  };

  return (
    <div className="row-[8] col-[1/32] md:row-[3] md:col-[3/7]">
      <h1 className="w-[80vw] text-start text-[8vw] md:w-[35vw] md:text-[7vw] leading-[8vw] font-serif text-blue-dark overflow-hidden">
        <div className="inline-block md:block overflow-hidden">
          {renderTakeIt()}
        </div>
        <div className="inline-block md:block overflow-hidden">
          <span 
            ref={fLetterRef} 
            className="inline-block opacity-0"
          >
            f
          </span>
          {OIcon}
          {renderRFuture()}
        </div>
      </h1>
    </div>
  );
};

export default Title;