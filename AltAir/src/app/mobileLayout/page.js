import NavBar from "../modules/navBar"
import MobileHome from "./components/mobileHome"
import MobileServices from "./components/mobileServices"
import MobileAboutUs from "./components/mobileAboutUs"
import ContactUs from "./components/mobileContactUs"

export default function MobileLayout(){
    return(
        <>
        <NavBar />
        <MobileHome />
        <MobileServices />
        <MobileAboutUs />
        <ContactUs />
        </>
    )
}