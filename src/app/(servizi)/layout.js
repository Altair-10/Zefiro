import ContactUs from "@/components/contactUs"

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