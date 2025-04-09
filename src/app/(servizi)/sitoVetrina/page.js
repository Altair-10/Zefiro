"use client"

import { useState } from "react"
import PlanCard from "@/components/planCard"
import FeatureSection from "@/components/featuresSection"
import CTASitoVetrina from "@/components/ctaSitoVetrina"
import ShapesDisplayer from "@/components/shapesDisplayer"
import AnimatedTitle from "@/components/AnimatedTitle"

export default function SitoVetrina() {
    const [activeButton, setActiveButton] = useState("statico")
    const planContent = {
        base: [
            { title: "Sito Web", description: "Realizzazione del sito web con layout base" },
            { title: "Hosting Sicuro", description: "Hosting protetto su server europeo" },
            { title: "Dominio Dedicato", description: "Registrazione dominio inclusa per 1 anno" },
            { title: "Certificato SSL", description: "Connessione sicura tramite HTTPS" },
            { title: "Supporto via Mail", description: "Assistenza via email con risposta entro 24h" },
        ],
        overrides: {
            standard: {
                5: { title: "Assistenza Telefonica", description: "Supporto telefonico fino a 2 ore mensili" },
                6: { title: "Backup Mensile", description: "Backup automatico dei contenuti ogni mese" },
                7: { title: "Manutenzione su Richiesta", description: "Interventi tecnici extra <br> su richiesta" },
                8: { title: "Formazione del Personale", description: "Sessione di formazione della durata di 1 ora", active: false },
                9: { title: "SEO", description: "Ottimizzazione base per i motori di ricerca", active: false },
                10: { title: "Raccolta Dati", description: "Modulo per la raccolta dei dati dei visitatori", active: false },
                11: { title: "Sito Dinamico", description: "Gestione autonoma dei contenuti tramite CMS", active: false },
            },
            business: {
                5: { title: "Assistenza Telefonica", description: "Supporto telefonico illimitato 24 ore su 24" },
                6: { title: "Backup Settimanale", description: "Backup automatico dei contenuti ogni settimana" },
                7: { title: "Manutenzione Ordinaria", description: "Interventi tecnici ricorrenti <br> inclusi" },
                8: { title: "Formazione del Personale", description: "Sessione di formazione della durata di 1 ora" },
                9: { title: "SEO", description: "Ottimizzazione base per i motori di ricerca", active: false },
                10: { title: "Raccolta Dati", description: "Modulo per la raccolta dei dati dei visitatori", active: false },
                11: { title: "Sito Dinamico", description: "Gestione autonoma dei contenuti tramite CMS", active: false },
            },
            premium: {
                5: { title: "Assistenza Telefonica", description: "Supporto telefonico illimitato 24 ore su 24" },
                6: { title: "Backup Giornaliero", description: "Backup automatico dei contenuti ogni giorno" },
                7: { title: "Manutenzione Straordinaria", description: "Interventi tecnici straordinari inclusi" },
                8: { title: "Formazione del Personale", description: "Sessione di formazione della durata di 1 ora" },
                9: { title: "SEO", description: "Ottimizzazione base per i motori di ricerca" },
                10: { title: "Raccolta Dati", description: "Modulo per la raccolta dei dati dei visitatori" },
                11: { title: "Sito Dinamico", description: "Gestione autonoma dei contenuti tramite CMS" },
            }
        }
    };

    const getPlanItems = (plan) => {
        const base = [...planContent.base];
        const overrides = planContent.overrides[plan.toLowerCase()] || {};

        const merged = base.map((item, index) => {
            const override = overrides[index];
            return {
                ...item,
                ...(override || {}),
                active: override?.active !== false,
            };
        });

        const extra = Object.entries(overrides)
            .filter(([index]) => parseInt(index) >= base.length)
            .map(([_, value]) => ({
                ...value,
                active: value.active !== false,
            }));

        const allItems = [...merged, ...extra];

        return allItems.sort((a, b) => {
            return (a.active === false ? 1 : 0) - (b.active === false ? 1 : 0);
        });
    };
    return (
        <>
            <div className="flex justify-center items-center row-[2] col-[1/32] md:row-[2] md:col-[1/49]">
                <AnimatedTitle text="Sito Online" />
            </div>

            <div className="
                grid my-[5vw]
                gap-[0.5vw] md:gap-[1vw] 
                grid-cols-[repeat(31,_minmax(0,_2vw))] md:grid-cols-[repeat(48,_minmax(0,_1vw))] 
                grid-rows-[repeat(65,_minmax(0,_2vw))] md:grid-rows-[repeat(95,_minmax(0,_1vw))] 
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
                    <PlanCard cardTitle="standard" cardCTA={"Perfetto per chi desidera una presenza online semplice ma professionale, con strumenti essenziali per iniziare."} items={getPlanItems("standard")} />
                    <PlanCard cardTitle="medium" cardCTA={"Pensato per aziende che vogliono crescere online, con funzionalità avanzate e maggiore flessibilità operativa."} items={getPlanItems("business")} />
                    <PlanCard cardTitle="personal" cardCTA={"La soluzione completa per realtà ambiziose, con massima personalizzazione, performance e supporto dedicato."} items={getPlanItems("premium")} />
                </div>
            </div>
        </>
    )
}
