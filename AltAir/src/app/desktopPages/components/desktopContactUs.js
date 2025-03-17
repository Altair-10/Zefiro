"use client";

import ContactForm from "@/app/pagesComponents/formEmail";
import ShapesDisplayer from "@/app/pagesComponents/shapesDisplayer";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";

export default function ContactUs() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div className="hidden md:flex flex-col justify-center items-center w-full">
            <div className="grid gap-[1vw] md:my-[5vw] grid-cols-[repeat(48,_minmax(0,_1vw))] grid-rows-[repeat(22,_minmax(0,_1vw))]">
                <h1 className="row-[1/6] col-[3/20] text-[6vw] text-blue-dark h-full">Contattaci</h1>

                <div className="row-[3/13] col-[46/48] bg-blue-light" />
                <div className="row-[2/4] col-[20/48] bg-blue-dark">
                    <ShapesDisplayer numShapes={1} imgName1="/decorations/light-8.png" position="start" spin={true} />
                </div>

                <div className="row-[20/22] col-[2/40] bg-blue-medium">
                    <ShapesDisplayer
                        numShapes={3}
                        imgName1="/decorations/dark-8.png"
                        imgName2="/decorations/light-4.png"
                        imgName3="/decorations/dark-8.png"
                        position="start"
                        spin={true}
                    />
                </div>

                <div className="row-[7/12] col-[39/41] bg-blue-medium" />
                <div className="row-[6/8] col-[39/45] bg-blue-light" />
                <div className="row-[6/12] col-[43/45] bg-orange" />
                <div className="row-[10/12] col-[39/45] bg-blue-dark" />
                <div className="row-[10/12] col-[39/41] bg-blue-medium" />

                <div className="row-[16/22] col-[41/43] bg-blue-medium" />
                <div className="row-[15/17] col-[41/48] bg-blue-light" />
                <div className="row-[15/22] col-[46/48] bg-orange" />
                <div className="row-[20/22] col-[41/48] bg-blue-dark" />
                <div className="row-[20/22] col-[41/43] bg-blue-medium" />

                {/* Card con effetto di macchina da scrivere */}
                <div className="row-[6/18] col-[3/18]">
                    <div ref={ref} className="w-72 h-80 mx-auto bg-gray-100 rounded-xl shadow-2xl">
                        {/* Puntini colorati in alto */}
                        <div className="flex items-center p-2">
                            <div className="px-1">
                                <span className="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer"></span>
                            </div>
                            <div className="px-1">
                                <span className="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer"></span>
                            </div>
                            <div className="px-1">
                                <span className="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer"></span>
                            </div>
                        </div>

                        {/* Contenuto della card */}
                        <div className="flex flex-col items-center justify-center h-[calc(100%-3rem)] p-5">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">
                                {inView && (
                                    <TypeAnimation
                                        sequence={[
                                            "Raccontaci la tua idea: insieme la realizzeremo 🎯",
                                            1000, // Tempo di attesa dopo la fine dell'animazione
                                        ]}
                                        speed={50}
                                        style={{ whiteSpace: "pre-line" }}
                                        cursor={false} // Disabilita il cursore lampeggiante
                                    />
                                )}
                            </h2>
                            <p className="text-gray-600">
                                {inView && (
                                    <TypeAnimation
                                        sequence={[
                                            3000, // Ritardo prima di iniziare
                                            "Descrivici la tua sfida o il tuo sogno nel campo informatico. Noi ti aiuteremo a trasformarlo in una soluzione concreta, passo dopo passo 👣",
                                            1000, // Tempo di attesa dopo la fine dell'animazione
                                        ]}
                                        speed={30}
                                        style={{ whiteSpace: "pre-line" }}
                                        cursor={false}
                                    />
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row-[6] col-[23] mt-3">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}