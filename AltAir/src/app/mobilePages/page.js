import MobileHome from "./components/mobileHome"
import Services from "../desktopPages/components/desktopServices"
import MobileAboutUs from "./components/mobileAboutUs"
import ContactUs from "./components/mobileContactUs"

export default function MobileLayout(){
    return(
        <>
        <MobileHome />
        <Services />
        <MobileAboutUs />
        <ContactUs />
        </>
    )
}