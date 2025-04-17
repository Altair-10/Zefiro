import AnimatedTitle from "@/components/AnimatedTitle"
import ServiceDescription from "@/components/serviceDescription"
import FeatureSection from "@/components/featuresSection"
import CTAServizio from "@/components/ctaServizio"
import PianiAbbonamento from "@/components/pianiAbbonamento"

export default function SitoVetrina() {
    return (
        <>
            <AnimatedTitle text="Sito Vetrina" />
            <ServiceDescription desc="
                Realizziamo siti vetrina moderni, veloci e ottimizzati per comunicare al meglio la tua identità.
                Che tu abbia bisogno di presentare un’azienda, un’attività o un progetto personale,
                ti aiutiamo a costruire una presenza online solida, chiara e coinvolgente.
            "/>

            <FeatureSection
                title1={"Design su Misura e Identità Visiva"}
                desc1={"Ogni sito è progettato per rispecchiare la tua immagine, con grafiche personalizzate e una navigazione intuitiva."}

                title2={"Performance e Ottimizzazione SEO"}
                desc2={"Sviluppiamo siti leggeri, reattivi e ottimizzati per i motori di ricerca, per garantire visibilità e velocità."}

                title3={"Responsive e Facile da Gestire"}
                desc3={"Il sito si adatta perfettamente a ogni dispositivo e può essere aggiornato facilmente anche da chi non ha competenze tecniche."}
            />

            <CTAServizio
                cta={
                    <>
                        Presenta il tuo brand online <br />
                        <span className="text-orange">con un sito vetrina efficace e professionale</span><br />
                        che lascia il segno
                    </>
                }
                desc={
                    "Un sito vetrina ben strutturato è il tuo biglietto da visita digitale: aumenta la fiducia, migliora la comunicazione e attira nuovi clienti."
                }
            />

            <PianiAbbonamento />
        </>
    )
}
