import NavBar from "../modules/NavBar"
import MobileHome from "./components/mobileHome"
import MobileServices from "./components/mobileServices"
import MobileAboutUs from "./components/mobileAboutUs"

export default function MobileLayout(){
    return(
        <>
        <NavBar />
        <MobileHome />
        <MobileServices />
        <MobileAboutUs />
        </>
    )
}