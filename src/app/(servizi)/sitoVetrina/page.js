"use client"

import { useState } from "react"
import PlanCard from "@/components/planCard"
import FeatureSection from "@/components/featuresSection"
import CTAServizio from "@/components/ctaServizio"
import ShapesDisplayer from "@/components/shapesDisplayer"
import AnimatedTitle from "@/components/AnimatedTitle"
import PlanSlider from "@/components/PlanSlider"

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

    // Descrizioni da mostrare in base al pulsante attivo
    const descriptions = {
        statico: "Un sito statico è un sito con pagine semplici e contenuti fissi, perfetto per presentare la tua attività e i tuoi servizi in modo chiaro e veloce, senza necessità di aggiornamenti frequenti.",
        dinamico: "Un sito dinamico è un sito interattivo che permette aggiornamenti facili e funzionalità personalizzate, ideale per chi vuole offrire contenuti sempre aggiornati, come news, cataloghi o aree riservate."
    };

    return (
        <>
            <div className="flex justify-center items-center mt-4">
                <AnimatedTitle text="Sito Online" />
            </div>

            <div className="
                grid mb-[5vw]
                gap-[0.5vw] md:gap-[1vw] 
                grid-cols-[repeat(31,_minmax(0,_2vw))] md:grid-cols-[repeat(48,_minmax(0,_1vw))] 
                grid-rows-[repeat(385,_minmax(0,_2vw))] md:grid-rows-[repeat(82,_minmax(0,_1vw))]
            ">
                {/* Sezione per i pulsanti e il riquadro descrittivo */}
                <div className="row-[1/30] col-[1/32] md:row-[1/10] md:col-[1/49] flex flex-col md:flex-row justify-center items-center gap-4">
                    {/* Pulsanti */}
                    <div className="flex flex-col justify-start w-full md:w-1/3 p-4 gap-4">
                        <button
                            onClick={() => setActiveButton("statico")}
                            className={`
                                h-12 text-lg rounded-xl font-bold
                                transition-all duration-300 ease-in-out
                                ${activeButton === "statico" ? "shadow-lg bg-blue-medium text-white" : " hover:bg-blue-medium text-black"}
                            `}
                        >
                            STATICO
                        </button>
                        <button
                            onClick={() => setActiveButton("dinamico")}
                            className={`
                                h-12 text-lg rounded-xl font-bold
                                transition-all duration-300 ease-in-out
                                ${activeButton === "dinamico" ? "shadow-lg bg-blue-medium text-white" : "hover:bg-blue-medium text-black"}
                            `}
                        >
                            DINAMICO
                        </button>
                    </div>

                    {/* Riquadro per la descrizione */}
                    <div className="w-full md:w-2/3 h-48 flex justify-center items-center rounded-xl shadow-md p-4">
                        <p className="text-center text-[4.5vw] md:text-[2vw] text-gray-700">
                            {descriptions[activeButton]}
                        </p>
                    </div>
                </div>

                <div className="row-[40] col-[1/32] md:row-[10] md:col-[1/49] w-full h-full text-center">
                    <FeatureSection
                        title1={"Design Moderno e Responsive"}
                        desc1={"Il sito si adatta automaticamente a qualsiasi dispositivo, che si tratti di smartphone, tablet o desktop, garantendo un'esperienza utente perfetta su ogni schermata."}
                        title2={"Contenuti Ottimizzati per la SEO"}
                        desc2={"Ogni pagina è progettata per essere facilmente trovata su Google, grazie a una struttura SEO-friendly, migliorando la visibilità online e attirando più visitatori."}
                        title3={"Velocità di Caricamento Elevata"}
                        desc3={"Il sito è ottimizzato per caricarsi rapidamente, riducendo i tempi di attesa e migliorando l'esperienza dell'utente, fattore cruciale per trattenere i visitatori."}
                    />
                </div>

                <div className="row-[185] col-[1/32] md:row-[29] md:col-[6/44] flex flex-col justify-center items-center text-center md:text-start">
                    <CTAServizio
                        cta={<>Creiamo siti web <br /><span className="text-orange">ad alte performance</span><br /> per il tuo successo online</>}
                        desc={"Il nostro obiettivo è offrirti un sito web che non solo rispecchi la tua identità, ma che sia anche veloce, sicuro e ottimizzato per un'esperienza utente senza pari."}
                    />
                </div>

                <div className="md:row-[26/28] md:col-[24/49] bg-blue-dark">
                    <ShapesDisplayer
                        numShapes={1}
                        imgName1="/formeSVG/orange-6.svg"
                        width="2vw"
                        height="2vw"
                    />
                </div>
                <div className="md:row-[28/30] md:col-[24/49] bg-blue-medium">
                    <ShapesDisplayer
                        numShapes={1}
                        imgName1="/formeSVG/blue-8.svg"
                        width="2vw"
                        height="2vw"
                    />
                </div>

                <div className="row-[230] col-[1/32] md:row-[39] md:col-[1/49] flex justify-center items-center text-black text-[8vw] text-center font-semibold md:text-[5vw]">
                    Scegli il piano che fa per te!
                </div>

                <div className="md: hidden row-[238] col-span-full">
                    <PlanSlider>
                        <PlanCard
                            cardTitle="standard"
                            cardCTA="Perfetto per chi desidera una presenza online semplice ma professionale, con strumenti essenziali per iniziare."
                            items={getPlanItems("standard")}
                        />
                        <PlanCard
                            cardTitle="medium"
                            cardCTA="Pensato per aziende che vogliono crescere online, con funzionalità avanzate e maggiore flessibilità operativa."
                            items={getPlanItems("business")}
                        />
                        <PlanCard
                            cardTitle="personal"
                            cardCTA="La soluzione completa per realtà ambiziose, con massima personalizzazione, performance e supporto dedicato."
                            items={getPlanItems("premium")}
                        />
                    </PlanSlider>
                </div>

                <div className="hidden row-[43] col-[1/49] md:flex flex-row justify-around">
                    <PlanCard
                        cardTitle="standard"
                        cardCTA="Perfetto per chi desidera una presenza online semplice ma professionale, con strumenti essenziali per iniziare."
                        items={getPlanItems("standard")}
                    />
                    <PlanCard
                        cardTitle="medium"
                        cardCTA="Pensato per aziende che vogliono crescere online, con funzionalità avanzate e maggiore flessibilità operativa."
                        items={getPlanItems("business")}
                    />
                    <PlanCard
                        cardTitle="personal"
                        cardCTA="La soluzione completa per realtà ambiziose, con massima personalizzazione, performance e supporto dedicato."
                        items={getPlanItems("premium")}
                    />
                </div>
            </div>
        </>
    )
}
