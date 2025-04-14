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
          grid-rows-[repeat(65,_minmax(0,_2vw))] md:grid-rows-[repeat(48,_minmax(0,_1vw))]
        "
      >
        {/* Title */}
        <div className="flex justify-center items-center row-[2] col-[1/32] md:row-[2] md:col-[1/49]">
          <AnimatedTitle text="I nostri servizi" />
        </div>

        {/* Card "Sito Vetrina" */}
        <div className="row-[10/35] col-[1/32] md:row-[7/17] md:col-[9/24]">
          <Card
            preTitle={"Dai vita alla tua attività"}
            title={"Sito Vetrina"}
            img={"/sfondi/sitoVetrina.jpg"}
            calltoaction1={"Distinguiti online"}
            calltoaction2={"un sito che parla per te."}
            href="/sitoVetrina"
            animationDirection="left"
          />
        </div>

        {/* Card "Gestionale" */}
        <div className="row-[36/61] col-[1/32] md:row-[19/29] md:col-[26/41]">
          <Card
            preTitle={"Ottimizza il tuo business"}
            title={"Gestionale"}
            img={"/sfondi/E-commerce.jpg"}
            calltoaction1={"Vendi senza limiti"}
            calltoaction2={"un gestionale su misura."}
            href="/gestionale"
            animationDirection="right"
          />
        </div>

        {/* Rettangoli */}
        <div className="hidden md:block row-[10/12] col-[2/27] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/blue-6.svg"
            position="start"
          />
        </div>
        <div className="hidden md:block row-[12/14] col-[2/27] bg-blue-light" />
        <div className="hidden md:block row-[22/24] col-[23/48] bg-blue-light" />
        <div className="hidden md:block row-[24/26] col-[23/48] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/orange-12.svg"
            position="end"
          />
        </div>

        <div className="hidden md:block md:row-[24/34] md:col-[5/20]">
          <PremiumSaleAnimation />
        </div>

        {/* switch tra gestionale e sito vetrina */}
        <div className="hidden md:block md:row-[26/33] md:col-[30/40]">
          <ServicesSwitch />
        </div>
      </div>
    </div>
  );
}