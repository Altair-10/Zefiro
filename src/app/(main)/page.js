import CallToAction from "@/components/callToAction"
import Services from "@/components/services"
import AboutUs from "@/components/aboutUs"
import ContactUs from "@/components/contactUs"

export const metadata = {
    title: "Home",
    description: "Benvenuti nel nostro sito: scopri i servizi offerti, conosci la nostra azienda nella sezione Chi Siamo e Contattaci per maggiori informazioni o collaborazioni."
}

export default function HomePage() {
    return (
        <>
            <section id="home">
                <CallToAction />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="aboutUs">
                <AboutUs />
            </section>
            <section id="contactUs">
                <ContactUs />
            </section>
        </>
    )
}

