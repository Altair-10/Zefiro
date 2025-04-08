"use client"

import { useState } from "react"
import PageTitle from "@/components/pageTitle"
import PlanCard from "@/components/planCard"
import FeatureSection from "@/components/featuresSection"
import CTASitoVetrina from "@/components/ctaSitoVetrina"
import ShapesDisplayer from "@/components/shapesDisplayer"

export default function SitoVetrina() {
    const [activeButton, setActiveButton] = useState("statico")

    return (
        <>
            <PageTitle title={"Sito Online"} />
            <div className="
                grid my-[5vw]
                gap-[0.5vw] md:gap-[1vw] 
                grid-cols-[repeat(31,_minmax(0,_2vw))] md:grid-cols-[repeat(48,_minmax(0,_1vw))] 
                grid-rows-[repeat(65,_minmax(0,_2vw))] md:grid-rows-[repeat(80,_minmax(0,_1vw))] 
            ">
                <div className="row-[1/20] col-[1/49] flex flex-row justify-center items-center">
                    <div className="flex flex-col justify-start w-1/3 h-full p-4 gap-4">
                        <button
                            onClick={() => setActiveButton("statico")}
                            className={`
                                h-2/4 text-[2vw] rounded-xl font-bold
                                transition-all duration-300 ease-in-out
                                ${activeButton === "statico" ? "shadow-lg bg-blue-medium" : "hover:bg-blue-light"}
                            `}
                        >
                            STATICO
                        </button>

                        <button
                            onClick={() => setActiveButton("dinamico")}
                            className={`
                                h-2/4 text-[2vw] rounded-xl font-bold
                                transition-all duration-300 ease-in-out
                                ${activeButton === "dinamico" ? "shadow-lg bg-blue-medium" : "hover:bg-blue-light"}
                            `}
                        >
                            DINAMICO
                        </button>
                    </div>

                    <div className="w-2/3 h-full bg-blue-light">
                        FOTO
                    </div>
                </div>
                
                <div className="row-[22] col-[1/49] w-full h-full">
                    <FeatureSection />
                </div>

                {/* FASCIA */}
                <div className="row-[43] col-[6/44] flex justify-center items-center">
                    <CTASitoVetrina />
                </div>

                <div className="row-[40/42] col-[24/49] bg-blue-dark">
                    <ShapesDisplayer
                        numShapes={1}
                        imgName1="/formeSVG/orange-6.svg"
                        width="2vw"
                        height="2vw"
                    />
                </div>
                <div className="row-[42/44] col-[24/49] bg-blue-medium">
                    <ShapesDisplayer
                        numShapes={1}
                        imgName1="/formeSVG/blue-8.svg"
                        width="2vw"
                        height="2vw"
                    />
                </div>

                <div className="row-[55] col-[1/49] flex justify-center items-center text-black text-3xl font-semibold md:text-6xl">
                    Scegli il piano che fa per te!
                </div>

                <div className="row-[59] col-[1/49] flex flex-row justify-around">
                    <PlanCard title="standard" />
                    <PlanCard title="premium" />
                    <PlanCard title="business" />
                </div>
            </div>
        </>
    )
}
