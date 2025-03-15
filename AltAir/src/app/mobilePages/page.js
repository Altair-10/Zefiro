import Navbar from "../pagesComponents/navBar"
import MobileHome from "./components/mobileHome"
import MobileServices from "./components/mobileServices"
import MobileAboutUs from "./components/mobileAboutUs"
import ContactUs from "./components/mobileContactUs"
import Footer from "../pagesComponents/footer"

export default function MobileLayout(){
    return(
        <>
        <MobileHome />
        <MobileServices />
        <MobileAboutUs />
        <ContactUs />
        </>
    )
}