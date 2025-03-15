"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import ShapesDisplayer from "../../pagesComponents/shapesDisplayer";

export default function Services() {
  const [windPosition, setWindPosition] = useState(-50);

  useEffect(() => {
    const interval = setInterval(() => {
      setWindPosition((prev) => (prev >= 100 ? -50 : prev + 1));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const ServicesCm = () => {
    return (
      <div
        className="
        grid gap-[1vw] my-[5vw]
        grid-cols-[repeat(48,_minmax(0,_1vw))]
        grid-rows-[repeat(19,_minmax(0,_1vw))]
      "
      >
        <div className="bg-blue-light h-full row-[4/13] col-[46/48]">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/decorations/medium-5.png"}
            flexType="row"
            position="start"
            spin={true}
          />
        </div>
        <div className="bg-blue-medium h-full row-[3/5] col-[17/48]" />
        <ShapesDisplayer
          numShapes={1}
          imgName1={"/decorations/medium-5.png"}
          flexType="row"
          position="center"
          spin={true}
        />
        <div />
        {/* Angolo sinistro */}
        <div className="bg-blue-medium h-full row-[6/30] col-[2/4]" />{" "}
        <ShapesDisplayer
          numShapes={1}
          imgName1={"/decorations/medium-5.png"}
          flexType="row"
          position="start"
          spin={true}
        />
        <div />
        {/* Tacche basso destra */}
        <div className="bg-blue-light h-full row-[20/30] col-[42/44]">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/decorations/medium-5.png"}
            flexType="row"
            position="start"
            spin={true}
          />
        </div>
        <div className="bg-blue-medium h-full row-[17/30] col-[44/46]" />
        <div className="bg-blue-dark h-full row-[14/30] col-[46/48]" />
        <h1 className="row-[1/6] col-[3/20] text-[6vw] text-blue-dark h-full">
          Services
        </h1>
        <div className="relative max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 overflow-hidden row-[6/29] col-[10/42]">
          {/* Effetto vento con JavaScript */}
          <div
            className="absolute top-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-30"
            style={{
              left: `${windPosition}%`,
              transition: "left 0.03s linear",
            }}
          />

          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                What to watch
              </p>
              <h4 className="text-white font-medium text-large">
                Stream the Acme event
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://heroui.com/images/card-example-4.jpeg"
            />
          </Card>

          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Plant a tree
              </p>
              <h4 className="text-white font-medium text-large">
                Contribute to the planet
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://heroui.com/images/card-example-3.jpeg"
            />
          </Card>

          <Card className="col-span-12 sm:col-span-4 h-[300px]">
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
          </Card>

          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-5"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">New</p>
              <h4 className="text-black font-medium text-2xl">Acme camera</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="https://heroui.com/images/card-example-6.jpeg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                <p className="text-black text-tiny">Get notified.</p>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Notify Me
              </Button>
            </CardFooter>
          </Card>

          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-7"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Your day your way
              </p>
              <h4 className="text-white/90 font-medium text-xl">
                Your checklist for better sleep
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://heroui.com/images/card-example-5.jpeg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="https://heroui.com/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Breathing App</p>
                  <p className="text-tiny text-white/60">Get a good s sleep.</p>
                </div>
              </div>
              <Button radius="full" size="sm">
                Get App
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center w-full mt-[120px]">
      <ServicesCm />
    </div>
  );
}
