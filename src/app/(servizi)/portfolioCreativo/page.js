import AnimatedTitle from "@/components/AnimatedTitle"
import ServiceDescription from "@/components/serviceDescription"
import FeatureSection from "@/components/featuresSection"
import CTAServizio from "@/components/ctaServizio"
import PianiAbbonamento from "@/components/pianiAbbonamento"

export default function PortfolioCreativo() {
    return (
        <>
            <AnimatedTitle text="Portfolio Creativo" doubleRow={false} />
            <ServiceDescription desc="
                Creiamo portfolio digitali unici e personalizzati, ideali per designer, fotografi, artisti e creativi di ogni settore.
                Ogni progetto è realizzato per rispecchiare il tuo stile, mettendo in luce il tuo lavoro con un design elegante e professionale.
            "/>

            <FeatureSection
                title1={"Design Personalizzato e Creativo"}
                desc1={"Ogni portfolio è progettato per rispecchiare la tua estetica unica, con uno stile visivo che si distingue e racconta la tua storia."}

                title2={"Esperienza Utente Coinvolgente"}
                desc2={"Una navigazione fluida, interattiva e responsive, che rende la visualizzazione dei tuoi progetti un'esperienza piacevole e memorabile."}

                title3={"Visibilità e Impatto"}
                desc3={"Ottimizzazione SEO, immagini ad alta qualità e layout unici per migliorare la visibilità e lasciare un'impressione duratura su chi visita il tuo portfolio."}
            />

            <CTAServizio
                cta={
                    <>
                        Mostra al mondo la tua arte <br />
                        <span className="text-orange">con un portfolio digitale professionale</span><br />
                        che racconta la tua storia visiva
                    </>
                }
                desc={
                    "Un portfolio ben costruito è il tuo biglietto da visita digitale: mostra la tua creatività, ispira e lascia un segno indelebile nelle menti dei tuoi visitatori."
                }
            />

            <PianiAbbonamento />
        </>
    )
}
