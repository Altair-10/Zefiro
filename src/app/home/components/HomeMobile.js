// components/HomeMobile.jsx
import React from "react";
import ContactButton from "./contactButton";
import ShapesDisplayer from "@/app/modules/shapesDisplayer";

export default function HomeMobile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-4">

        {/* primi due quadrati su una riga */}
        <div className="grid grid-cols-2 gap-[4vw] mt-[25vw]">
          <div className="h-[10vw] bg-blue-dark rounded-sm">
            <ShapesDisplayer
              numShapes={1}
              imgName1="/formeSVG/orange-6.svg"
              position="center"
              width="5vw"
              height="5vw"
            />
          </div>
          <div className="h-[10vw] bg-blue-light rounded-sm">
            <ShapesDisplayer
              numShapes={1}
              imgName1="/formeSVG/blue-4.svg"
              position="center"
              width="5vw"
              height="5vw"
            />
          </div>

          {/* Titolo */}
          <h1 className="col-span-2 text-5xl font-extrabold sm:text-6xl font-serif text-blue-dark text-center mt-[5vw] mb-[4vw]">
            <span className="block">Take IT</span>
            <span className="block">for future</span>
          </h1>


          {/* seconda riga con riquadro grande */}

        </div>

        {/* Bottone contattaci */}
        <div className="px-[10vw] pt-[5vw] pb-[7vw]">
          <ContactButton />
        </div>

        <div className="h-[20vw] bg-blue-medium rounded-sm col-span-2">
          <ShapesDisplayer
            numShapes={1}
            imgName1="/formeSVG/reactLogo.svg"
            position="center"
            height="12vw"
            width="12vw"
          />
        </div>

        {/* Altre forme decorative per mobile */}
        <div className="grid grid-cols-2 gap-3">
          <div className="h-[15vw] bg-blue-medium rounded-sm">
            <ShapesDisplayer
              numShapes={1}
              imgName1="/formeSVG/blue-8.svg"
              position="center"
              width="7vw"
              height="7vw"
            />
          </div>
          <div className="h-[15vw] bg-blue-dark rounded-sm">
            <ShapesDisplayer
              numShapes={1}
              imgName1="/formeSVG/orange-12.svg"
              position="center"
              width="7vw"
              height="7vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}