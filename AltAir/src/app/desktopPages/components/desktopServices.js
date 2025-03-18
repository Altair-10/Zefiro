"use client";

import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import CubeRotation from "@/app/pagesComponents/rotatingCube";

export default function Services() {
  return (
    <div className="flex justify-center items-center w-full">
      <div
        className="
        grid my-[5vw]
        gap-[0.5vw] md:gap-[1vw] 
        grid-cols-[repeat(31,_minmax(0,_2vw))] md:grid-cols-[repeat(48,_minmax(0,_1vw))]
        grid-rows-[repeat(65,_minmax(0,_2vw))] md:grid-rows-[repeat(22,_minmax(0,_1vw))]
      "
      >
        <div className="row-[2/7] col-[8/26] md:row-[1/6] md:col-[3/20]">
          <h1 className="text-[10vw] md:text-[6vw] md:h-full text-blue-dark ">Services</h1>
        </div>
        
        {/* Card grande sx */}
        <Card isFooterBlurred className="
          row-[10/35] col-[1/32] md:row-[6/14] md:col-[13/25] 
          group overflow-hidden relative transition-all duration-300 hover:shadow-2xl hover:scale-105
        ">
          <CardHeader className="
            absolute 
            p-[0.4vw] md:p-[0.6vw] 
            z-10 
            flex-col items-start
          ">
            <p className="text-[3vw] pt-[2vw] pl-[2vw] md:p-0 md:text-[0.6vw] text-black/60 uppercase font-bold">
              Mostra il meglio della tua attività
            </p>
            <h4 className="text-[6vw] pl-[2vw] md:p-0 md:text-[1.5vw] text-black/90 font-medium">
              Sito vetrina
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-contain object-right py-[8vw] md:py-0 md:pt-[0.5vw] bg-orange"
            src="/sfondi/sitoVetrina.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Logo Altair"
                className="hidden md:block md:w-[2.5vw] md:h-[2vw]"
                src="/loghi_altair/LogoSocialLight.png"
              />
              <div className="flex flex-col">
                <p className="text-[3.3vw] md:text-[0.6vw] text-white/60">Distinguiti online</p>
                <p className="text-[3.3vw] md:text-[0.6vw] text-white/60">Un sito che parla per te.</p>
              </div>
            </div>
            <Button radius="full" className="
              md:text-[0.8rem] lg:text-[0.6rem] xl:text-[0.8rem] 
              md:w-[3vw] md:h-[3vw] lg:w-[0.6vw] lg:h-[2.5vw] xl:w-[3vw] xl:h-[2vw] 
            ">
              Scopri di più
            </Button>
          </CardFooter>
        </Card>

        {/* Cubo */}
        <div className="hidden md:block md:row-[7/13] md:col-[26/32]">
          <CubeRotation />
        </div>

        {/* Card clienti */}
        <Card className="hidden md:block row-[14/21] col-[17/25] group overflow-hidden relative transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-blue-medium">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start ">
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
            src=""
          />
        </Card>

        {/* Card e-commerce */}
        <Card
          isFooterBlurred
          className="row-[36/61] col-[1/32] md:row-[14/22] md:col-[25/37] group overflow-hidden relative transition-all duration-300 hover:shadow-2xl hover:scale-105"
        >
          <CardHeader className="
            absolute 
            p-[0.4vw] md:p-[0.6vw] 
            z-10 
            flex-col items-start
          ">
            <p className="text-[3vw] pt-[2vw] pl-[2vw] md:p-0 md:text-[0.6vw] text-black/60 uppercase font-bold">New</p>
            <h4 className="text-[6vw] pl-[2vw] md:p-0 md:text-[1.5vw] text-black/90 font-medium">E-commerce</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            
            className="z-0 w-full h-full scale-125 -translate-y-6 object-contain object-right pt-[10vw] pb-[7vw] pr-[2vw] md:p-0 md:pr-[1vw] md:pt-[2vw] lg:pt-[1.5vw] xl:pt-[1vw] bg-orange"
            src="/sfondi/E-commerce.jpg"
          />
          {/*z-0 w-full h-full object-contain object-right py-[8vw] md:pt-[0.5vw] bg-orange */}
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Logo Altair"
                className="hidden md:block md:w-[2.5vw] md:h-[2vw]"
                src="/loghi_altair/LogoSocialDark.png"
              />
              <div className="flex flex-col">
                <p className="text-[3.3vw] md:text-[0.6vw] text-white/60">Presto disponibile.</p>
                <p className="text-[3.3vw] md:text-[0.6vw] text-white/60">Resta aggiornato con un clic.</p>
              </div>
            </div>
            <Button radius="full" className="
              md:text-[0.8rem] lg:text-[0.6rem] xl:text-[0.8rem] 
              md:w-[3vw] md:h-[3vw] lg:w-[0.6vw] lg:h-[2.5vw] xl:w-[3vw] xl:h-[2vw] 
            ">
              Avvisami
            </Button>
          </CardFooter>
        </Card>

        {/* Rettangoli */}
        <div className="hidden md:block row-[3/5] col-[16/48] bg-blue-dark" />
        <div className="hidden md:block row-[8/10] col-[2/14] bg-blue-medium" />
        <div className="hidden md:block row-[10/12] col-[2/14] bg-blue-light" />
        <div className="hidden md:block row-[16/18] col-[24/48] bg-blue-light" />
        <div className="hidden md:block row-[18/20] col-[24/48] bg-blue-medium" />
      </div>
    </div>
  );
};


{/* <Card className="col-span-12 sm:col-span-4 h-[300px] group overflow-hidden relative transition-all duration-300 hover:shadow-2xl hover:scale-105">
  <CardHeader className="absolute z-10 top-1 flex-col !items-start">
    <p className="text-tiny text-white/60 uppercase font-bold">
      Supercharged
    </p>
    <h4 className="text-white font-medium text-large">
      Creates beauty like a beast
    </h4>
  </CardHeader>
  <Image
    removeWrapper
    alt="Card background"
    className="z-0 w-full h-full object-cover"
    src="https://heroui.com/images/card-example-2.jpeg"
  />
</Card> */}
