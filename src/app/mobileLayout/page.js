import MobileHome from "./components/mobileHome"
import MobileServices from "./components/mobileServices"
import MobileAboutUs from "./components/mobileAboutUs"

const linkContattaci="../contattaci"

export default function MobileLayout(){
    return(
        <div className="w-screen h-screen">
        <MobileHome />
        <MobileServices />
        <MobileAboutUs />
        </div>
    )
}