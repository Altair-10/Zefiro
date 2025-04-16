"use client";

import Card from "./card";
import ShapesDisplayer from "../shapesDisplayer";
import PremiumSaleAnimation from "./caroselloAggettivi";
import { useEffect, useRef, useState } from "react";
import AnimatedTitle from "../AnimatedTitle";
import FloatingShape from "./FloatingShape";

export default function Services() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const svgPaths = [
    "/FormeSVG/blue-6.svg",
    "/FormeSVG/orange-4.svg",
    "/FormeSVG/orange-6.svg",
    "/FormeSVG/blue-4.svg"   
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const { top } = containerRef.current.getBoundingClientRect();
            const progress = Math.min(
              1,
              Math.max(0, (window.innerHeight * 0.2 - top) / (window.innerHeight * 0.6))
            );
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center items-center w-full" ref={containerRef}>
      <div
        className="
          grid my-[5vw]
          gap-[0.5vw] md:gap-[1vw] 
          grid-cols-[repeat(31,_minmax(0,_2vw))] md:grid-cols-[repeat(48,_minmax(0,_1vw))]
          grid-rows-[repeat(270,_minmax(0,_2vw))] md:grid-rows-[repeat(64,_minmax(0,_1vw))]
        "
      >
        {/* Title */}
        <div className="flex justify-center items-center row-[2] col-[1/32] md:row-[2] md:col-[1/49]">
          <AnimatedTitle text="I nostri servizi" />
        </div>

        {/* Rettangoli "SitoVetrina" */}
        <div className="hidden md:block row-[10/12] col-[2/27] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/blue-6.svg"
            position="start"
          />
        </div>
        <div className="hidden md:block row-[12/14] col-[2/27] bg-blue-light" />

        {/* Card "SitoVetrina" */}
        <div className="row-[10/60] col-[1/32] md:row-[7/17] md:col-[6/24]">
          <Card
            CardTitle={"Sito Vetrina"}
            image={"/sfondi/sitoVetrina.jpg"}
            CardDescription={"Presenta la tua attività online in modo chiaro, professionale e su misura."}
            btnHref={"/sitoVetrina"}
            animationDirection="left"
          />
        </div>

        {/* Animazione Carosello aggettivi */}
        <div className=" md:row-[6/16] md:col-[33/48]">
          <PremiumSaleAnimation />
        </div>

        {/* Rettangoli "SitoPerEventi" */}
        <div className="hidden md:block row-[22/24] col-[23/48] bg-blue-light" />
        <div className="hidden md:block row-[24/26] col-[23/48] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/orange-12.svg"
            position="end"
          />
        </div>

        {/* Animated Shapes Area - Con contenimento appropriato */}
        <div className="md:row-[18/30] md:col-[2/22] relative">
          {/* Prima forma animata */}
          <div className="absolute inset-0 overflow-hidden">
            <FloatingShape 
              svgPath={svgPaths[0]} 
              width={60} 
              height={70} 
              trailCount={4} 
              randomMovement={true} 
              targetRow={30}
              boundsMultiplier={0.6} // Limite del movimento per mantenere le forme dentro il contenitore
            />
          </div>
          
          {/* Seconda forma animata */}
          <div className="absolute inset-0 overflow-hidden">
            <FloatingShape 
              svgPath={svgPaths[1]} 
              width={50} 
              height={60} 
              trailCount={3} 
              randomMovement={true} 
              targetRow={30}
              boundsMultiplier={0.5}
            />
          </div>
          
          {/* Terza forma animata */}
          <div className="absolute inset-0 overflow-hidden">
            <FloatingShape 
              svgPath={svgPaths[2]} 
              width={40} 
              height={50} 
              trailCount={2} 
              randomMovement={true} 
              targetRow={30}
              boundsMultiplier={0.55}
            />
          </div>
          
          {/* Quarta forma animata */}
          <div className="absolute inset-0 overflow-hidden">
            <FloatingShape 
              svgPath={svgPaths[3]} 
              width={45} 
              height={55} 
              trailCount={3} 
              randomMovement={true} 
              targetRow={30}
              boundsMultiplier={0.45}
            />
          </div>
        </div>

        {/* Card "SitoPerEventi" */}
        <div className="row-[62/112] col-[1/32] md:row-[19/29] md:col-[26/44]">
          <Card
            image={"/sfondi/E-commerce.jpg"}
            CardTitle={"Sito Per Eventi"}
            CardDescription={"Promuovi e gestisci il tuo evento online con tutte le informazioni essenziali."}
            btnHref={"/sitoPerEventi"}
            animationDirection="right"
          />
        </div>

        {/* Rettangoli "Portfolio" */}
        <div className="hidden md:block row-[34/36] col-[2/27] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/blue-6.svg"
            position="start"
          />
        </div>
        <div className="hidden md:block row-[36/38] col-[2/27] bg-blue-light" />
        {/* Card "Portfolio" */}
        <div className="row-[114/164] col-[1/32] md:row-[31/41] md:col-[6/24]">
          <Card
            image={"/sfondi/E-commerce.jpg"}
            CardTitle={"Portfolio Creativo"}
            CardDescription={"Mostra i tuoi progetti con uno stile che valorizza il tuo talento."}
            btnHref={"/portfolioCreativo"}
            animationDirection="left"
          />
        </div>

        {/* Rettangoli "Piattaforma" */}
        <div className="hidden md:block row-[46/48] col-[23/48] bg-blue-light" />
        <div className="hidden md:block row-[48/50] col-[23/48] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/orange-12.svg"
            position="end"
          />
        </div>
        {/* Card "Piattaforma" */}
        <div className="row-[168/218] col-[1/32] md:row-[43/53] md:col-[26/44]">
          <Card
            image={"/sfondi/E-commerce.jpg"}
            CardTitle={"E-learning"}
            CardDescription={"Offri corsi e formazione online con una piattaforma intuitiva e completa."}
            btnHref={"/e-learning"}
            animationDirection="right"
          />
        </div>

        {/* Rettangoli "Blog" */}
        <div className="hidden md:block row-[58/60] col-[2/27] bg-blue-light" />
        <div className="hidden md:block row-[60/62] col-[2/27] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/orange-12.svg"
            position="end"
          />
        </div>
        {/* Card "Blog" */}
        <div className="row-[220/270] col-[1/32] md:row-[55/65] md:col-[6/24]">
          <Card
            image={"/sfondi/E-commerce.jpg"}
            CardTitle={"Blog"}
            CardDescription={"Condividi articoli, pensieri e novità in uno spazio tutto tuo."}
            btnHref={"/blog"}
            animationDirection="left"
          />
        </div>
      </div>
    </div>
  );
}