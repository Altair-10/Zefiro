import Home from "./components/desktopHome"
import Services from "./components/desktopServices"
import AboutAltair from "./components/desktopAboutAltair"
import AboutUs from "./components/desktopAboutUs"
import ContactUs from "./components/desktopContactUs"

export default function DesktopLayout(){
    return(
        <>
        <Home />
        <Services />
        <AboutAltair />
        {/* <AboutUs /> */}
        <ContactUs />
        </>
    )
}