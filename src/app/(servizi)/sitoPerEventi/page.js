import AnimatedTitle from "@/components/AnimatedTitle"
import FeatureSection from "@/components/featuresSection"
import CTAServizio from "@/components/ctaServizio"
import ShapesDisplayer from "@/components/shapesDisplayer"
import PlanSlider from "@/components/PlanSlider"
import PlanCard from "@/components/planCard"

export default function sitoPerEventi() {
    return (
        <>
            <div className="flex justify-center items-center row-[2] col-[1/32] md:row-[2] md:col-[1/49]">
                <AnimatedTitle text="Sito per eventi" />
            </div>
            <div className="
                grid mb-[5vw]
                gap-[0.5vw] md:gap-[1vw] 
                grid-cols-[repeat(31,_minmax(0,_2vw))] md:grid-cols-[repeat(48,_minmax(0,_1vw))] 
                grid-rows-[repeat(385,_minmax(0,_2vw))] md:grid-rows-[repeat(82,_minmax(0,_1vw))]
            ">
                <div className="row-[40] col-[1/32] md:row-[10] md:col-[1/49] w-full h-full text-center">
                    <FeatureSection
                        title1={"Gestione Eventi Semplice e Intuitiva"}
                        desc1={"Organizza, modifica e pubblica i tuoi eventi in pochi clic grazie a un’interfaccia pensata per semplificare ogni fase, dalla pianificazione alla promozione."}
                        title2={"Calendario Interattivo degli Eventi"}
                        desc2={"Gli utenti possono consultare un calendario dinamico con tutti gli appuntamenti futuri, filtrare per data o categoria, e salvare gli eventi di interesse."}
                        title3={"Schede Evento Dettagliate"}
                        desc3={"Ogni evento è presentato con una scheda informativa completa: data, orario, luogo, descrizione, immagini e tutte le informazioni utili per il pubblico."}
                    />
                </div>

                <div className="row-[185] col-[1/32] md:row-[29] md:col-[6/44] flex flex-col justify-center items-center text-center md:text-start">
                    <CTAServizio
                        cta={
                            <>
                                Dai visibilità ai tuoi eventi <br />
                                <span className="text-orange">con un sito curato e professionale</span><br />
                                che cattura l’attenzione
                            </>
                        }
                        desc={
                            "Un sito per eventi ben progettato comunica affidabilità, crea entusiasmo e permette al tuo pubblico di vivere un’esperienza coinvolgente ancora prima di partecipare."
                        }
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

                {/* <div className="md: hidden row-[238] col-span-full">
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
                </div> */}
            </div>
        </>
    )
}
