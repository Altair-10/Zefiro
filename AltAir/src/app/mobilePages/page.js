import MobileHome from "./components/mobileHome"
import MobileServices from "./components/mobileServices"
import MobileAboutUs from "./components/mobileAboutUs"
import ContactUs from "./components/mobileContactUs"

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