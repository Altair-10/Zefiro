import ContactUs from "@/components/contactUs"

export const metadata = { title: "Servizi" }

export default function Layout({ children }) {
    return (
        <div>
            {children}
            <section id="contactUs">
                <ContactUs />
            </section>
        </div>
    )
}