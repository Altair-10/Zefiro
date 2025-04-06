"use client"
import React from "react";
import ContactButton from "./contactButton";
import ShapesDisplayer from "@/components/shapesDisplayer";

export default function CallToAction() {
  return (
    <>
      <div className="
      grid gap-[0.5vw] md:gap-[1vw] mt-[30vw] md:mt-[10vw] mb-[5vw]
      grid-rows-[repeat(45,_minmax(0,_2vw))] md:grid-rows-[repeat(20,_minmax(0,_1vw))]
      grid-cols-[repeat(31,_minmax(0,_2vw))] md:grid-cols-[repeat(48,_minmax(0,_1vw))]
    ">
        <div className="row-[8] col-[1/32] md:row-[3] md:col-[3/7]">
          <h1 className="w-[80vw] text-center text-[8vw] md:w-[35vw] md:text-[7vw] leading-[8vw] font-serif text-blue-dark">
            <span className="inline md:block">Take IT </span>
            <span className="inline md:block">for future</span>
          </h1>
        </div>
        <div className="row-[21/26] col-[4/29] md:row-[12/15] md:col-[3/13]">
          <ContactButton />
        </div>

        {/* 1° riga */}
        <div className="md:hidden row-[1/5] col-[1/16] bg-blue-light rounded-sm">
          <ShapesDisplayer
            numShapes={1}
            imgName1="/formeSVG/blue-6.svg"
            position="center"
            width="6vw"
            height="6vw"
          />
        </div>
        <div className="md:hidden row-[1/5] col-[17/32] bg-blue-dark rounded-sm">
          <ShapesDisplayer
            numShapes={1}
            imgName1="/formeSVG/orange-6.svg"
            position="center"
            width="6vw"
            height="6vw"
          />
        </div>

        {/* 2° riga */}
        <div className="md:hidden row-[14/20] col-[1/32] bg-blue-medium rounded-sm">
          <ShapesDisplayer
            numShapes={1}
            imgName1="/formeSVG/reactLogo.svg"
            position="center"
            height="12vw"
            width="12vw"
          />
        </div>

        {/* 3° riga */}
        <div className="md:hidden row-[31/35] col-[1/23] bg-blue-medium rounded-sm" />

        <div className="md:hidden row-[31/35] col-[24/32] bg-blue-dark rounded-sm">
          <ShapesDisplayer
            numShapes={1}
            imgName1="/formeSVG/orange-12.svg"
            position="center"
            width="6vw"
            height="6vw"
          />
        </div>

        {/* 4° riga */}
        <div className="md:hidden row-[36/40] col-[1/7] bg-blue-light rounded-sm">
          <ShapesDisplayer
            numShapes={1}
            imgName1="/formeSVG/blue-8.svg"
            position="center"
            width="6vw"
            height="6vw"
          />
        </div>
        <div className="md:hidden row-[36/40] col-[8/32] bg-blue-medium rounded-sm" />

        {/* 5° riga */}
        <div className="md:hidden row-[41/45] col-[1/23] bg-blue-dark rounded-sm" />
        <div className="md:hidden row-[41/45] col-[24/32] bg-blue-dark rounded-sm">
          <ShapesDisplayer
            numShapes={1}
            imgName1="/formeSVG/orange-4.svg"
            position="center"
            width="6vw"
            height="6vw"
          />
        </div>

        {/* RETTANGOLI CALL TO ACTION DESKTOP */}
        {/*1° riga*/}
        <div className="hidden md:block row-[1/3] col-[20/48] bg-blue-dark">
          <ShapesDisplayer
            numShapes={2}
            imgName1="/formeSVG/orange-6.svg"
            imgName2="/formeSVG/blue-4.svg"
            position="start"
          />
        </div>

        {/*2° riga*/}
        <div className="hidden md:block row-[3/5] col-[24/36] bg-blue-light">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/formeSVG/orange-12.svg"}
            position="end"
          />
        </div>
        <div className="hidden md:block row-[3/5] col-[36/44] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/formeSVG/blue-8.svg"}
            position="start"
          />
        </div>

        {/*rettangoli verticali*/}
        <div className="hidden md:block row-[5/12] col-[24/28] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"/formeSVG/reactLogo.svg"}
            flexType="column"
            position="center"
            height="4vw"
            width="4vw"
          />
        </div>
        <div className="hidden md:block row-[3/12] col-[44/48] bg-blue-light">
          <ShapesDisplayer
            numShapes={4}
            imgName1={"/formeSVG/pAngolari.svg"}
            imgName2={"/formeSVG/pTonde.svg"}
            imgName3={"/formeSVG/pGraffe.svg"}
            imgName4={"/formeSVG/pQuadre.svg"}
            flexType="col"
            position="center"
            spin={false}
          />
        </div>

        {/*3° riga*/}
        <div className="hidden md:block row-[12/14] col-[22/28] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1="/formeSVG/blue-6.svg"
            position="start"
          />
        </div>
        <div className="hidden md:block row-[12/14] col-[44/48] bg-blue-dark">
          <ShapesDisplayer
            numShapes={1}
            imgName1="/formeSVG/blue-4.svg"
          />
        </div>

        {/*4° riga*/}
        <div className="hidden md:block row-[14/16] col-[26/37] bg-blue-dark">
          <ShapesDisplayer
            numShapes={1}
            imgName1="/formeSVG/orange-4.svg"
          />
        </div>
        <div className="hidden md:block row-[14/16] col-[37/48] bg-blue-light">
          <ShapesDisplayer
            numShapes={1}
            imgName1="/formeSVG/orange-4.svg"
            position="start"
          />
        </div>

        {/*5° riga*/}
        <div className="hidden md:block row-[16/18] col-[18/30] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1="/formeSVG/blue-8.svg"
            position="start"
          />
        </div>
        <div className="hidden md:block md:row-[16/18] md:col-[30/48] bg-blue-dark">
          <ShapesDisplayer
            numShapes={1}
            imgName1="/formeSVG/orange-6.svg"
          />
        </div>

        {/*6° riga*/}
        <div className="hidden md:block row-[18/20] col-[10/48] bg-blue-light">
          <ShapesDisplayer
            numShapes={3}
            imgName1="/formeSVG/blue-4.svg"
            imgName2="/formeSVG/orange-12.svg"
            imgName3="/formeSVG/blue-6.svg"
            position="start"
          />
        </div>
      </div>
    </>

  )
}