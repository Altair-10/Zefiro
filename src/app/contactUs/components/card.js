"use client"

import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";

export default function ContactUsCard() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    return(
        <div ref={ref} className="w-full h-full rounded-xl shadow-2xl bg-gray-100">
            {/* Puntini colorati in alto */}
            <div className="flex p-2">
                <div className="px-1">
                    <span className="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer" />
                </div>
                <div className="px-1">
                    <span className="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer" />
                </div>
                <div className="px-1">
                    <span className="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer" />
                </div>
            </div>

            {/* Contenuto della card */}
            <div className="flex flex-col justify-center items-center my-[8vw] md:my-[3.5vw] px-5">
                <h2 className="text-[5vw] md:text-[1.8vw] xl:text-[2vw] text-center text-gray-800 font-bold mb-4">
                    {inView && (
                        <TypeAnimation
                            sequence={[
                                "Qual è il tuo obiettivo? 🎯",
                                1000, // Tempo di attesa dopo la fine dell'animazione
                            ]}
                            speed={50}
                            style={{ whiteSpace: "pre-line" }}
                            cursor={false} // Disabilita il cursore lampeggiante
                        />
                    )}
                </h2>
                <p className="text-[4vw] md:text-[1.4vw] xl:text-[1.5vw] text-center text-gray-600">
                    {inView && (
                        <TypeAnimation
                            sequence={[
                                3000, // Ritardo prima di iniziare
                                `Descrivici il tuo sogno tecnologico. \nNoi ti aiuteremo a concretizzarlo \npasso dopo passo 👣`,
                                1000, // Tempo di attesa dopo la fine dell'animazione
                            ]}
                            speed={65}
                            style={{ whiteSpace: "pre-line" }}
                            cursor={false}
                        />
                    )}
                </p>
            </div>
        </div>
    )
}