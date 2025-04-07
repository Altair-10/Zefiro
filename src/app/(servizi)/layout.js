import ContactUs from "@/components/contactUs"

export default function Layout({ children }) {
    return (
        <div className="mt-[8vw]">
        { children }
        <ContactUs />
        </div>
    )
}