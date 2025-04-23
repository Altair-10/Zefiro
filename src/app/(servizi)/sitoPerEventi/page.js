import AnimatedTitle from "@/components/AnimatedTitle"
import ServiceDescription from "@/components/serviceDescription"
import FeatureSection from "@/components/featuresSection"
import CTAServizio from "@/components/ctaServizio"
import PianiAbbonamento from "@/components/pianiAbbonamento"

export default function SitoPerEventi() {
    return (
        <>
            <AnimatedTitle text="Sito per Eventi" doubleRow={false} />
            <ServiceDescription desc="
                Progettiamo siti web per eventi unici, che catturano l’attenzione e facilitano la gestione di eventi, conferenze, fiere e molto altro. 
                Il sito è pensato per essere funzionale, moderno e facilmente navigabile, garantendo una buona esperienza utente.
            "/>

            <FeatureSection
                title1={"Gestione Eventi Semplice e Intuitiva"}
                desc1={"Organizza, modifica e pubblica i tuoi eventi in pochi clic grazie a un’interfaccia pensata per semplificare ogni fase, dalla pianificazione alla promozione."}

                title2={"Calendario Interattivo degli Eventi"}
                desc2={"Gli utenti possono consultare un calendario dinamico con tutti gli appuntamenti futuri, filtrare per data o categoria, e salvare gli eventi di interesse."}

                title3={"Schede Evento Dettagliate"}
                desc3={"Ogni evento è presentato con una scheda informativa completa: data, orario, luogo, descrizione, immagini e tutte le informazioni utili per il pubblico."}
            />

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

            <PianiAbbonamento />
        </>
    )
}
