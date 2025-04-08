"use client"

import { useState } from "react"
import PageTitle from "@/components/pageTitle"
import PlanCard from "@/components/planCard"
import FeatureSection from "@/components/featuresSection"
import CTASitoVetrina from "@/components/ctaSitoVetrina"

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
                                h-2/4 text-[2vw] rounded-xl
                                transition-all duration-300 ease-in-out
                                ${activeButton === "statico" ? "shadow-lg bg-blue-medium" : "hover:bg-blue-light"}
                            `}
                        >
                            STATICO
                        </button>

                        <button
                            onClick={() => setActiveButton("dinamico")}
                            className={`
                                h-2/4 text-[2vw] rounded-xl
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

                <div className="row-[40/42] col-[24/49] bg-blue-dark" />
                <div className="row-[42/44] col-[24/49] bg-blue-medium" />

                <div className="row-[55/65] col-[1/49] flex justify-center items-center bg-gradient-to-b from-blue-dark to-blue-verydark text-orange text-[4.5vw] text-center pb-[10vw] rounded-t-medium">
                    Scegli il piano che fa per te!
                </div>

                <div className="row-[61] col-[1/49] flex flex-row justify-around">
                    <PlanCard />
                    <PlanCard />
                    <PlanCard />
                </div>
            </div>
        </>
    )
}
