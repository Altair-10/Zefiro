import Home from "./components/desktopHome"
import Services from "./components/desktopServices"
import AboutUs from "./components/desktopAboutUs"
import ContactUs from "./components/desktopContactUs"
import Footer from "../pagesComponents/footer"
export default function DesktopLayout(){
    return(
        <>
        <Home />
        <Services />
        <AboutUs />
        <ContactUs />
        <Footer />
        </>
    )
}