"use client"
import React from "react";
import ContactButton from "./contactButton";
import ShapesDisplayer from "@/components/shapesDisplayer";
import Title from "./Title"
import PremiumSaleAnimation from "./premiumSaleAnimation";

export default function CallToAction() {
  return (
    <>
      <div className="
      grid gap-[0.5vw] md:gap-[1vw] mt-[30vw] md:mt-[12vw] xl:mt-[8vw] mb-[5vw] md:mb-0
      grid-rows-[repeat(45,_minmax(0,_2vw))] md:grid-rows-[repeat(20,_minmax(0,_1vw))]
      grid-cols-[repeat(31,_minmax(0,_2vw))] md:grid-cols-[repeat(48,_minmax(0,_1vw))]
    ">
        {/* TITOLO */}
        <div className="row-[8] col-[1/32] md:row-[3] md:col-[3/7]">
          <Title />
        </div>
        <div className="row-[21/26] col-[5/29] md:row-[12/15] md:col-[3/13]">
          <ContactButton />
        </div>
        <div className="md:row-[5/14] md:col-[28/44]">
          <PremiumSaleAnimation />
        </div>

        {/* RETTANGOLI CALL TO ACTION MOBILE */}
        {/* 1° riga */}
        <div className="md:hidden row-[1/5] col-[1/16] bg-blue-light rounded-sm">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/blue-6.svg"
            position="center"
            width="6vw"
            height="6vw"
          />
        </div>
        <div className="md:hidden row-[1/5] col-[17/32] bg-blue-dark rounded-sm">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/orange-6.svg"
            position="center"
            width="6vw"
            height="6vw"
          />
        </div>

        {/* 2° riga */}
        <div className="md:hidden row-[14/20] col-[1/32] bg-blue-medium rounded-sm" />

        {/* 3° riga */}
        <div className="md:hidden row-[31/35] col-[1/23] bg-blue-medium rounded-sm" />

        <div className="md:hidden row-[31/35] col-[24/32] bg-blue-dark rounded-sm">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/orange-12.svg"
            position="center"
            width="6vw"
            height="6vw"
          />
        </div>

        {/* 4° riga */}
        <div className="md:hidden row-[36/40] col-[1/7] bg-blue-light rounded-sm">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/blue-8.svg"
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
            imgName1="FormeSVG/orange-4.svg"
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
            imgName1="FormeSVG/orange-6.svg"
            imgName2="FormeSVG/blue-4.svg"
            position="start"
          />
        </div>

        {/*2° riga*/}
        <div className="hidden md:block row-[3/5] col-[24/36] bg-blue-light">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"FormeSVG/orange-12.svg"}
            position="end"
          />
        </div>
        <div className="hidden md:block row-[3/5] col-[36/44] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1={"FormeSVG/blue-8.svg"}
            position="start"
          />
        </div>

        {/*rettangoli verticali*/}
        <div className="hidden md:block row-[5/12] col-[24/28] bg-blue-medium" />
        <div className="hidden md:block row-[3/12] col-[44/48] bg-blue-light" />
        <div className="hidden md:block row-[5/7] col-[40/44] bg-blue-dark" />
        {/* <div className="hidden md:block row-[10/12] col-[28/30] bg-blue-light" /> */}
        <div className="hidden md:block row-[5/7] col-[28/32] bg-blue-dark" />

        {/*4° riga*/}
        <div className="hidden md:block row-[12/14] col-[22/32] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/blue-6.svg"
            position="start"
          />
        </div>
        <div className="hidden md:block row-[12/14] col-[40/48] bg-blue-dark">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/blue-4.svg"
          />
        </div>

        {/*5° riga*/}
        <div className="hidden md:block row-[14/16] col-[26/36] bg-blue-dark">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/orange-4.svg"
          />
        </div>
        <div className="hidden md:block row-[14/16] col-[36/48] bg-blue-light">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/orange-4.svg"
            position="start"
          />
        </div>

        {/*6° riga*/}
        <div className="hidden md:block row-[16/18] col-[18/30] bg-blue-medium">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/blue-8.svg"
            position="start"
          />
        </div>
        <div className="hidden md:block md:row-[16/18] md:col-[30/48] bg-blue-dark">
          <ShapesDisplayer
            numShapes={1}
            imgName1="FormeSVG/orange-6.svg"
          />
        </div>

        {/*7° riga*/}
        <div className="hidden md:block row-[18/20] col-[10/48] bg-blue-light">
          <ShapesDisplayer
            numShapes={3}
            imgName1="FormeSVG/blue-4.svg"
            imgName2="FormeSVG/orange-12.svg"
            imgName3="FormeSVG/blue-6.svg"
            position="start"
          />
        </div>
      </div>
    </>

  )
}