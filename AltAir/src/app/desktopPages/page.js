import Home from "./components/desktopHome"
import Services from "./components/desktopServices"
import AboutAltair from "./components/desktopAboutAltair"
import AboutUs from "./components/desktopAboutUs"
import ContactUs from "./components/desktopContactUs"
import Preloader from "./components/Preloader" // New import

export default function DesktopLayout(){
    return(
        <>
        <Preloader /> {/* New component */}
        <Home />
        <Services />
        <AboutAltair />
        {/* <AboutUs /> */}
        <ContactUs />
        </>
    )
}