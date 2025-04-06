import ContactUs from "@/components/contactUs"

export default function Layout({ children }) {
    return (
        <div className="mt-[5vw]">
        { children }
        <ContactUs />
        </div>
    )
}