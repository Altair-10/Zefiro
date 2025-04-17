import AnimatedTitle from "@/components/animatedTitle"
import ServiceDescription from "@/components/serviceDescription"
import FeatureSection from "@/components/featuresSection"
import CTAServizio from "@/components/ctaServizio"
import PianiAbbonamento from "@/components/pianiAbbonamento"

export default function ELearning() {
    return (
        <>
            <AnimatedTitle text="Piattaforma E-learning" />
            <ServiceDescription desc="
                Progettiamo e sviluppiamo piattaforme e-learning moderne, intuitive e personalizzabili.
                Che si tratti di un corso professionale, universitario o aziendale, ti aiutiamo a costruire un’esperienza formativa coinvolgente e di qualità.
            "/>

            <FeatureSection
                title1={"Gestione Corsi Chiara e Organizzata"}
                desc1={"Carica, modifica e struttura i tuoi corsi con moduli, lezioni e materiali, in modo semplice e scalabile."}

                title2={"Accesso da Qualsiasi Dispositivo"}
                desc2={"Gli studenti possono seguire le lezioni in ogni momento, da desktop, tablet o smartphone, con un’interfaccia sempre fluida."}

                title3={"Esperienza Didattica Coinvolgente"}
                desc3={"Video, quiz interattivi, materiali scaricabili e forum integrati: ogni corso è pensato per mantenere alta l’attenzione e favorire un apprendimento attivo."}
            />

            <CTAServizio
                cta={
                    <>
                        Trasforma la formazione online <br />
                        <span className="text-orange">con una piattaforma e-learning coinvolgente</span><br />
                        che valorizza l’apprendimento
                    </>
                }
                desc={
                    "Offri un’esperienza didattica completa e interattiva: la tua piattaforma sarà veloce, personalizzabile e pensata per rendere l’apprendimento più efficace e coinvolgente."
                }
            />

            <PianiAbbonamento />
        </>
    )
}
