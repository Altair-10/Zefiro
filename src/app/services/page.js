"use client";

import { Card, CardHeader, CardFooter, Image } from "@heroui/react";
import PageTitle from "../modules/pageTitle";
import CardTitle from "./components/cardTitle";
import CardFooterContent from "./components/cardFooterContent";
import CubeRotation from "@/app/services/components/rotatingCube";
import ShapesDisplayer from "../modules/shapesDisplayer";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Services() {
  // Stati per la visibilità delle card
  const [isInViewSitoVetrina, setIsInViewSitoVetrina] = useState(false);
  const [isInViewEcommerce, setIsInViewEcommerce] = useState(false);

  // Riferimenti per osservare le card
  const sitoVetrinaRef = useRef(null);
  const ecommerceRef = useRef(null);

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.5, // Attiva l'animazione quando la card è almeno al 50% visibile
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
  }, []);

  // Funzioni per determinare le animazioni
  const getSitoVetrinaAnimation = () => {
    return isInViewSitoVetrina
      ? { x: 0, opacity: 1 }
      : { x: "-100%", opacity: 0 }; // Animazione da sinistra
  };

  const getEcommerceAnimation = () => {
    return isInViewEcommerce
      ? { x: 0, opacity: 1 }
      : { x: "100%", opacity: 0 }; // Animazione da destra
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
        <motion.div
          ref={sitoVetrinaRef}
          className="row-[10/35] col-[1/32] md:row-[7/15] md:col-[13/25]"
          initial={{ x: "-100%", opacity: 0 }}
          animate={getSitoVetrinaAnimation()}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <Card isFooterBlurred className="w-full h-full group overflow-hidden relative transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <CardHeader className="absolute p-[0.4vw] md:p-[0.6vw] z-10 flex-col items-start">
              <CardTitle preTitle="Mostra il meglio della tua attività" title="Sito Vetrina" />
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-contain object-right py-[8vw] md:py-0 md:pt-[0.5vw] bg-orange"
              src="/sfondi/sitoVetrina.jpg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <CardFooterContent testo1={"Distinguiti online"} testo2={"Un sito che parla per te."} />
            </CardFooter>
          </Card>
        </motion.div>

        {/* Card "E-commerce" */}
        <motion.div
          ref={ecommerceRef}
          className="row-[36/61] col-[1/32] md:row-[16/24] md:col-[25/37]"
          initial={{ x: "100%", opacity: 0 }}
          animate={getEcommerceAnimation()}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <Card isFooterBlurred className="w-full h-full group overflow-hidden relative transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <CardHeader className="absolute p-[0.4vw] md:p-[0.6vw] z-10 flex-col items-start">
              <CardTitle preTitle="Prossimamente" title="E-commerce" />
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-contain object-right pt-[10vw] pb-[7vw] pr-[2vw] md:p-0 md:pr-[1vw] md:pt-[2vw] lg:pt-[1.5vw] xl:pt-[1vw] bg-orange"
              src="/sfondi/E-commerce.jpg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <CardFooterContent testo1={"Porta il tuo negozio online"} testo2={"Ppresto disponibile."} />
            </CardFooter>
          </Card>
        </motion.div>

        {/* Cubo */}
        <div className="hidden md:block md:row-[8/14] md:col-[37/43]">
          <CubeRotation />
        </div>

        {/* Card clienti */}
        <Card className="hidden md:block row-[16/23] col-[5/13] group overflow-hidden relative transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-blue-medium">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="md:text-[0.6vw] text-white/60 uppercase font-bold">
              Partner e Collaborazioni
            </p>
            <h4 className="md:text-[1vw] text-white font-medium ">
              Le attività che ci hanno scelto
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/FormeSVG/blue-8.svg"
          />
        </Card>

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
