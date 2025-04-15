import AnimatedTitle from "@/components/AnimatedTitle"
import FeatureSection from "@/components/featuresSection"
import CTAServizio from "@/components/ctaServizio"
import ShapesDisplayer from "@/components/shapesDisplayer"
import PlanSlider from "@/components/PlanSlider"
import PlanCard from "@/components/planCard"

export default function Blog() {
    return (
        <>
            <div className="flex justify-center items-center row-[2] col-[1/32] md:row-[2] md:col-[1/49]">
                <AnimatedTitle text="Blog" />
            </div>
            <div className="h-auto flex justify-center items-center rounded-xl shadow-md p-10 mx-60 mt-6">
                <h1 className="text-center text-[4.5vw] md:text-[2vw] text-gray-700">
                    Progettiamo e sviluppiamo blog moderni e funzionali,
                    ottimizzati per la lettura e la condivisione dei tuoi contenuti.
                    Che si tratti di un blog personale, aziendale o tematico,
                    ti aiutiamo a costruire uno spazio dove raccontare idee,
                    pubblicare articoli e coinvolgere la tua community.
                </h1>
            </div>
            <div className="
                grid mb-[5vw]
                gap-[0.5vw] md:gap-[1vw] 
                grid-cols-[repeat(31,_minmax(0,_2vw))] md:grid-cols-[repeat(48,_minmax(0,_1vw))] 
                grid-rows-[repeat(385,_minmax(0,_2vw))] md:grid-rows-[repeat(82,_minmax(0,_1vw))]
            ">
                <div className="row-[40] col-[1/32] md:row-[3] md:col-[1/49] w-full h-full text-center">
                    <FeatureSection
                        title1={"Scrittura e Pubblicazione Semplificate"}
                        desc1={"Crea e gestisci articoli in modo intuitivo, grazie a un'interfaccia pensata per autori, blogger e redazioni di ogni livello."}

                        title2={"Layout Ottimizzati per la Lettura"}
                        desc2={"Ogni post è presentato in un formato leggibile, elegante e responsive, per garantire una fruizione fluida su qualsiasi dispositivo."}

                        title3={"Struttura SEO-Friendly e Categorie"}
                        desc3={"Organizza i tuoi contenuti con tag, categorie e URL ottimizzati per Google, migliorando la visibilità e la reperibilità del tuo blog."}
                    />

                </div>

                <div className="row-[185] col-[1/32] md:row-[20] md:col-[6/44] flex flex-col justify-center items-center text-center md:text-start">
                    <CTAServizio
                        cta={
                            <>
                                Dai voce alle tue idee <br />
                                <span className="text-orange">con un blog moderno e performante</span><br />
                                che valorizza ogni contenuto
                            </>
                        }
                        desc={
                            "Un blog ben costruito rafforza la tua presenza online, migliora l’autorevolezza del tuo brand e trasforma ogni articolo in un’opportunità di connessione con il pubblico."
                        }
                    />
                </div>

                <div className="md:row-[17/19] md:col-[24/49] bg-blue-dark">
                    <ShapesDisplayer
                        numShapes={1}
                        imgName1="/formeSVG/orange-6.svg"
                        width="2vw"
                        height="2vw"
                    />
                </div>
                <div className="md:row-[19/21] md:col-[24/49] bg-blue-medium">
                    <ShapesDisplayer
                        numShapes={1}
                        imgName1="/formeSVG/blue-8.svg"
                        width="2vw"
                        height="2vw"
                    />
                </div>

                <div className="row-[230] col-[1/32] md:row-[30] md:col-[1/49] flex justify-center items-center text-black text-[8vw] text-center font-semibold md:text-[5vw]">
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
