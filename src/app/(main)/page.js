import CallToAction from "@/components/callToAction"
import Services from "@/components/services"
import AboutUs from "@/components/aboutUs"
import ContactUs from "@/components/contactUs"

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

