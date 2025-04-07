"use client"

import PageTitle from "@/components/pageTitle"
import PlanCard from "@/components/planCard"
import { useState } from "react"

export default function SitoVetrina() {
    // Impostiamo lo stato a "statico" come predefinito
    const [activeButton, setActiveButton] = useState("statico")

    return (
        <>
            <PageTitle title={"Sito Online"} />
            <div className="
                grid my-[5vw]
                gap-[0.5vw] md:gap-[1vw] 
                grid-cols-[repeat(31,_minmax(0,_2vw))] md:grid-cols-[repeat(48,_minmax(0,_1vw))] 
                grid-rows-[repeat(65,_minmax(0,_2vw))] md:grid-rows-[repeat(64,_minmax(0,_1vw))] 
            ">
                <div className="row-[1/20] col-[1/49] flex flex-row justify-center items-center">
                    <div className="flex flex-col justify-start w-1/3 h-full p-4 gap-4">
                        <button
                            onClick={() => setActiveButton("statico")}
                            className={`
                                h-2/4 text-[2vw] rounded-xl
                                transition-all duration-300 ease-in-out
                                ${activeButton === "statico" ? "shadow-lg" : "hover:bg-slate-100"}
                            `}
                        >
                            STATICO
                        </button>

                        <button
                            onClick={() => setActiveButton("dinamico")}
                            className={`
                                h-2/4 text-[2vw] rounded-xl
                                transition-all duration-300 ease-in-out
                                ${activeButton === "dinamico" ? "shadow-lg" : "hover:bg-slate-100"}
                            `}
                        >
                            DINAMICO
                        </button>
                    </div>

                    <div className="w-2/3 h-full bg-blue-light">
                        FOTO
                    </div>
                </div>

                {/* FASCIA */}
                <div className="row-[25/35] col-[10/40] flex justify-center items-center bg-blue-dark text-blue-light text-[5vw] text-center">
                    call to action
                </div>

                <div className="row-[40/50] col-[1/49] flex justify-center items-center bg-blue-dark text-blue-light text-[5vw] text-center pb-[5vw] rounded-xl">
                    Scegli il piano che fa per te!
                </div>

                <div className="row-[46] col-[1/49] flex flex-row justify-around">
                    <PlanCard />
                    <PlanCard />
                    <PlanCard />
                </div>
            </div>
        </>
    )
}
