"use client";

import Card from "./card";
import ServicesSwitch from "./ServicesSwitch";
import ShapesDisplayer from "../shapesDisplayer";
import PremiumSaleAnimation from "./caroselloAggettivi";
import { useEffect, useRef } from "react";
import AnimatedTitle from "../AnimatedTitle";

export default function Services() {

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
    <div className="flex justify-center items-center w-full">
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

        {/* Rettangoli "SitoPerEventi" */}
        <div className="hidden md:block row-[22/24] col-[23/48] bg-blue-light" />
        <div className="hidden md:block row-[24/26] col-[23/48] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/orange-12.svg"
            position="end"
          />
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

        {/* <div className="hidden md:block md:row-[24/34] md:col-[5/20]">
          <PremiumSaleAnimation />
        </div>
        <div className="hidden md:block md:row-[26/33] md:col-[30/40]">
          <ServicesSwitch />
        </div> */}
      </div>
    </div>
  );
}