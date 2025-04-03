// components/HomeMobile.jsx
import React from "react";
import ContactButton from "./contactButton";
import ShapesDisplayer from "@/app/modules/shapesDisplayer";

export default function HomeMobile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-4">
        {/* Titolo mobile */}
        <h1 className="text-5xl font-extrabold sm:text-6xl font-serif text-blue-dark text-center my-[25vw]">
          <span className="block">take IT</span>
          <span className="block">for future</span>
        </h1>
        
        {/* Forme decorative per mobile */}
        <div className="grid grid-cols-2 gap-[3vw]">
          <div className="h-[15vw] bg-blue-dark rounded-sm">
            <ShapesDisplayer
              numShapes={1}
              imgName1="/formeSVG/orange-6.svg"
              position="center"
              width="7vw"
              height="7vw" 
            />
          </div>
          <div className="h-[15vw] bg-blue-light rounded-sm">
            <ShapesDisplayer
              numShapes={1}
              imgName1="/formeSVG/blue-4.svg"
              position="center"
            />
          </div>
          <div className="h-24 bg-blue-medium rounded-sm col-span-2">
            <ShapesDisplayer
              numShapes={1}
              imgName1="/formeSVG/reactLogo.svg"
              position="center"
              height="12vw"
              width="12vw"
            />
          </div>
        </div>
        
        {/* Pulsante contatto mobile */}
        <div className="py-4">
          <ContactButton />
        </div>
        
        {/* Altre forme decorative per mobile */}
        <div className="grid grid-cols-2 gap-3">
          <div className="h-24 bg-blue-medium rounded-sm">
            <ShapesDisplayer
              numShapes={1}
              imgName1="/formeSVG/blue-8.svg"
              position="center"
            />
          </div>
          <div className="h-24 bg-blue-dark rounded-sm">
            <ShapesDisplayer
              numShapes={1}
              imgName1="/formeSVG/orange-12.svg"
              position="center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}