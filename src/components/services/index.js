"use client";

import Card from "./card";
import ShapesDisplayer from "../shapesDisplayer";
import { useRef } from "react";
import FloatingShape from "./FloatingShape";
import AnimatedTitle from '../AnimatedTitle';

export default function Services() {
  const svgPaths = [
    "/FormeSVG/blue-6.svg",
    "/FormeSVG/orange-4.svg",
    "/FormeSVG/orange-6.svg",
    "/FormeSVG/blue-4.svg",
    "/FormeSVG/orange-12.svg",
  ];

  const containerRef = useRef(null);

  return (
    <div className="flex justify-center items-center w-full pt-5 md:pt-0" ref={containerRef}>
      <div
        className="
          grid md:my-[2vw]
          gap-[0.5vw] md:gap-[1vw] 
          grid-cols-[repeat(31,_minmax(0,_2vw))] md:grid-cols-[repeat(48,_minmax(0,_1vw))]
          grid-rows-[repeat(270,_minmax(0,_2vw))] md:grid-rows-[repeat(64,_minmax(0,_1vw))]
        "
      >
        {/* Title */}
        <div className="flex justify-center items-center row-[4] col-[1/32] md:row-[4] md:col-[1/49]">
          <AnimatedTitle text="I nostri servizi" doubleRow={false} />
        </div>

        {/* SITO VETRINA */}
        <div className="hidden md:block row-[10/12] col-[2/27] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/blue-6.svg"
            position="start"
          />
        </div>
        <div className="hidden md:block row-[12/14] col-[2/27] bg-blue-light" />
        <div className="row-[10/60] col-[1/32] md:row-[7/17] md:col-[6/24]">
          <Card
            CardTitle={"Sito Vetrina"}
            image={"/sfondi/sitoVetrina.jpg"}
            CardDescription={"Design su misura, mobile-friendly e ottimizzato per convertire visitatori in clienti"}
            btnHref={"/sitoVetrina"}
            animationDirection="left"
          />
        </div>

        {/* SITO PER EVENTI */}
        <div className="hidden md:block row-[22/24] col-[23/48] bg-blue-light" />
        <div className="hidden md:block row-[24/26] col-[23/48] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/orange-12.svg"
            position="end"
          />
        </div>
        <div className="row-[62/112] col-[1/32] md:row-[19/29] md:col-[26/44]">
          <Card
            image={"/sfondi/sitoEventi.png"}
            CardTitle={"Sito Per Eventi"}
            CardDescription={"Promuovi e gestisci il tuo evento online con tutte le informazioni essenziali."}
            btnHref={"/sitoPerEventi"}
            animationDirection="right"
          />
        </div>

        {/* Animated Shapes Area */}
        <div className="hidden md:block md:row-[18/30] md:col-[2/22] relative">
          <div className="w-full h-48 overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-2 gap-0">
              <div className="w-full h-full">
                <FloatingShape
                  svgPath={svgPaths[2]}
                  width={60}
                  height={70}
                  speed={2.0}
                />
              </div>
              <div className="w-full h-full">
                <FloatingShape
                  svgPath={svgPaths[3]}
                  width={60}
                  height={70}
                  speed={2.2}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Animated Shapes Area */}
        <div className="hidden md:block md:row-[31/41] md:col-[30/45] relative">
          <div className="w-full h-48 overflow-hidden">
            <FloatingShape
              svgPath={svgPaths[0]}
              width={60}
              height={70}
            />
          </div>
        </div>

        {/* PORTFOLIO CREATIVO */}
        <div className="hidden md:block row-[34/36] col-[2/27] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/blue-6.svg"
            position="start"
          />
        </div>
        <div className="hidden md:block row-[36/38] col-[2/27] bg-blue-light" />
        <div className="row-[114/164] col-[1/32] md:row-[31/41] md:col-[6/24]">
          <Card
            image={"/sfondi/portfolioCreativo.png"}
            CardTitle={"Portfolio Creativo"}
            CardDescription={"Mostra i tuoi progetti con uno stile che valorizza il tuo talento."}
            btnHref={"/portfolioCreativo"}
            animationDirection="left"
          />
        </div>

        {/* Animated Shapes Area */}
        <div className="hidden md:block md:row-[44/53] md:col-[2/22] relative">
          <div className="w-full h-48 overflow-hidden">
            <FloatingShape
              svgPath={svgPaths[1]}
              width={60}
              height={70}
              speed={1.2}
            />
          </div>
        </div> 

        {/* E-LEARNING */}
        <div className="hidden md:block row-[46/48] col-[23/48] bg-blue-light" />
        <div className="hidden md:block row-[48/50] col-[23/48] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/orange-12.svg"
            position="end"
          />
        </div>
        <div className="row-[168/218] col-[1/32] md:row-[43/53] md:col-[26/44]">
          <Card
            image={"/sfondi/ELearning.png"}
            CardTitle={"E-learning"}
            CardDescription={"Offri corsi e formazione online con una piattaforma intuitiva e completa."}
            btnHref={"/e-learning"}
            animationDirection="right"
          />
        </div>

        {/* BLOG */}
        <div className="hidden md:block row-[58/60] col-[2/27] bg-blue-light" />
        <div className="hidden md:block row-[60/62] col-[2/27] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/orange-12.svg"
            position="end"
          />
        </div>
        <div className="row-[220/270] col-[1/32] md:row-[55/65] md:col-[6/24]">
          <Card
            image={"/sfondi/Blog.png"}
            CardTitle={"Blog"}
            CardDescription={"Condividi articoli, pensieri e novità in uno spazio tutto tuo."}
            btnHref={"/blog"}
            animationDirection="left"
          />
        </div>

        {/* Animated Shapes Area */}
        <div className="hidden md:block md:row-[55/65] md:col-[30/48] relative">
          <div className="w-full h-48 overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-2 gap-0">
              <div className="w-full h-full">
                <FloatingShape
                  svgPath={svgPaths[0]}
                  width={60}
                  height={70}
                  speed={2.0}
                />
              </div>
              <div className="w-full h-full">
                <FloatingShape
                  svgPath={svgPaths[2]}
                  width={60}
                  height={70}
                  speed={2.2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}