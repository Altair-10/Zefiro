import Navbar from "../pagesComponents/navBar"
import MobileHome from "./components/mobileHome"
import MobileServices from "./components/mobileServices"
import MobileAboutUs from "./components/mobileAboutUs"
import ContactUs from "./components/mobileContactUs"

export default function MobileLayout(){
    return(
        <>
        <Navbar />
        <MobileHome />
        <MobileServices />
        <MobileAboutUs />
        <ContactUs />
        </>
    )
}