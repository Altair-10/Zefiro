"use client";

import PageTitle from "../modules/pageTitle";
import Card from "./components/card";
import CubeRotation from "@/app/services/components/rotatingCube";
import ShapesDisplayer from "../modules/shapesDisplayer";
import { useState, useEffect, useRef } from "react";

export default function Services() {
  const scrollToSection = (id) => {
    if (typeof document !== "undefined") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isInViewSitoVetrina, setIsInViewSitoVetrina] = useState(false);
  const [isInViewEcommerce, setIsInViewEcommerce] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(false);

  const sitoVetrinaRef = useRef(null);
  const ecommerceRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMdScreen(window.matchMedia("(min-width: 768px)").matches);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (!isMdScreen) return;

    const options = {
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === sitoVetrinaRef.current) {
          setIsInViewSitoVetrina(entry.isIntersecting);
        }
        if (entry.target === ecommerceRef.current) {
          setIsInViewEcommerce(entry.isIntersecting);
        }
      });
    }, options);

    if (sitoVetrinaRef.current) observer.observe(sitoVetrinaRef.current);
    if (ecommerceRef.current) observer.observe(ecommerceRef.current);

    return () => {
      if (sitoVetrinaRef.current) observer.unobserve(sitoVetrinaRef.current);
      if (ecommerceRef.current) observer.unobserve(ecommerceRef.current);
    };
  }, [isMdScreen]);

  const getSitoVetrinaAnimation = () => {
    return isInViewSitoVetrina ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 };
  };

  const getEcommerceAnimation = () => {
    return isInViewEcommerce ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 };
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div
        className="
          grid my-[5vw]
          gap-[0.5vw] md:gap-[1vw] 
          grid-cols-[repeat(31,_minmax(0,_2vw))] md:grid-cols-[repeat(48,_minmax(0,_1vw))]
          grid-rows-[repeat(65,_minmax(0,_2vw))] md:grid-rows-[repeat(24,_minmax(0,_1vw))]
        "
      >
        <PageTitle title="Servizi" />

        {/* Card "Sito Vetrina" */}
        <div className="row-[10/35] col-[1/32] md:row-[7/15] md:col-[13/25]">
          <Card 
            reference={sitoVetrinaRef}
            pretitle={"Mostra il meglio della tua attività"} 
            title={"Sito Vetrina"} 
            img={"/sfondi/sitoVetrina.jpg"} 
            calltoaction1={"Distinguiti online"} 
            calltoaction2={"Un sito che parla per te."} 
            testoBottone={"scopri di più"}
            animation={getSitoVetrinaAnimation()} 
            onClick={() => scrollToSection("home")} 
          />
        </div>

        {/* Card "E-commerce" */}
        <div className="row-[36/61] col-[1/32] md:row-[16/24] md:col-[25/37]">
          <Card 
            reference={ecommerceRef}
            pretitle={"Prossimamente"} 
            title={"E-commerce"} 
            img={"/sfondi/E-commerce.jpg"} 
            calltoaction1={"Porta il tuo negozio online"} 
            calltoaction2={"Presto disponibile."} 
            testoBottone={"richiedi info"}
            animation={getEcommerceAnimation()} 
            onClick={() => scrollToSection("contattaci")} 
          />
        </div>

        {/* Cubo sopra */}
        <div className="hidden md:block md:row-[8/14] md:col-[37/43]">
          <CubeRotation />
        </div>

        {/* Cubo sotto */}
        <div className="hidden md:block md:row-[17/24] md:col-[5/13]">
          <CubeRotation />
        </div>

        {/* Rettangoli */}
        <div className="hidden md:block row-[9/11] col-[2/27] bg-blue-medium">
          <ShapesDisplayer 
            numShapes={1}
            imgName1="FormeSVG/blue-6.svg"
            position="start"
          />
        </div>
        <div className="hidden md:block row-[11/13] col-[2/27] bg-blue-light" />
        <div className="hidden md:block row-[18/20] col-[23/48] bg-blue-light" />
        <div className="hidden md:block row-[20/22] col-[23/48] bg-blue-medium">
          <ShapesDisplayer 
            numShapes={1}
            imgName1="FormeSVG/orange-12.svg"
            position="end"
          />
        </div>
      </div>
    </div>
  );
}