import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Card({ preTitle, title, img, calltoaction1, calltoaction2, href = "/sitoVetrina", animationDirection }) {
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
    <div ref={cardRef} style={animationStyle} className="w-full h-full">
      <div className="w-full h-full group overflow-hidden relative rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105">
        <div className="absolute p-[0.4vw] md:p-[0.6vw] z-10 flex-col items-start">
          <p className="text-[3vw] pt-[2vw] pl-[2vw] md:p-0 md:text-[0.7vw] text-white uppercase font-bold">{preTitle}</p>
          <h1 className="text-[6vw] pl-[2vw] md:p-0 md:text-[1.5vw] text-white font-medium">{title}</h1>
        </div>
        <Image
          width={1000}
          height={1000}
          alt="Relaxing app background"
          className="z-0 w-full h-full object-contain object-right py-[8vw] md:py-0 md:pt-[0.5vw] bg-orange"
          src={img}
        />
        <div className="absolute w-full bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-row justify-start items-center w-full h-[16vw] md:h-[4vw]">
            <Image
              width={1000}
              height={1000}
              alt="Logo Altair"
              className="hidden md:block md:ml-[0.5vw] md:w-[2.5vw] md:h-[2vw]"
              src="/loghi_altair/LogoSocialDark.svg"
            />
            <div className="flex flex-col w-2/3 ml-[4vw] md:ml-[1vw]">
              <p className="whitespace-nowrap text-[3.3vw] md:text-[1vw] xl:text-[0.8vw] 2xl:text-[0.6vw] text-white/60 font-extrabold">{calltoaction1}</p>
              <p className="whitespace-nowrap text-[3.3vw] md:text-[1vw] xl:text-[0.8vw] 2xl:text-[0.6vw] text-white/60 font-extrabold">{calltoaction2}</p>
            </div>
            <Link
              href={href}
              className="transition-all duration-150 ease-in-out rounded-2xl bg-brown-light mr-[2vw] md:mr-[0.5vw]
              text-[4vw] md:text-[1vw] xl:text-[1vw] 2xl:text-[0.8vw] w-[28vw] h-[10vw] md:w-[8vw] md:h-[2vw] active:scale-90 whitespace-nowrap
              flex items-center justify-center"
            >
              Scopri di più
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}