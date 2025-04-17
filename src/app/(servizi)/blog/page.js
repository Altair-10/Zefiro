import AnimatedTitle from "@/components/AnimatedTitle"
import ServiceDescription from "@/components/serviceDescription"
import FeatureSection from "@/components/featuresSection"
import CTAServizio from "@/components/ctaServizio"
import PlanSlider from "@/components/PlanSlider"
import PlanCard from "@/components/planCard"
import PianiAbbonamento from "@/components/pianiAbbonamento"

export default function Blog() {
    return (
        <>
            <AnimatedTitle text="Blog" />
            <ServiceDescription desc="
                Progettiamo e sviluppiamo blog moderni e funzionali,
                ottimizzati per la lettura e la condivisione dei tuoi contenuti.
                Che si tratti di un blog personale, aziendale o tematico,
                ti aiutiamo a costruire uno spazio dove raccontare idee,
                pubblicare articoli e coinvolgere la tua community.
            "/>

            <FeatureSection
                title1={"Scrittura e Pubblicazione Semplificate"}
                desc1={"Crea e gestisci articoli in modo intuitivo, grazie a un'interfaccia pensata per autori, blogger e redazioni di ogni livello."}

                title2={"Layout Ottimizzati per la Lettura"}
                desc2={"Ogni post è presentato in un formato leggibile, elegante e responsive, per garantire una fruizione fluida su qualsiasi dispositivo."}

                title3={"Struttura SEO-Friendly e Categorie"}
                desc3={"Organizza i tuoi contenuti con tag, categorie e URL ottimizzati per Google, migliorando la visibilità e la reperibilità del tuo blog."}
            />

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

            <PianiAbbonamento />
        </>
    )
}
