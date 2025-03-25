import Navbar from "./modules/navBar";
import Home from "./home/page";
import Services from "./services/page";
import AboutUs from "./aboutUs/page";
import ContactUs from "./contactUs/page";
import Footer from "./modules/footer";
import ThreeBackground from "./modules/threeBackGround";
import Preloader from "./modules/preloader";

import ChiSiamo from "./chiSiamo/chiSiamo";

export default function SplashScreen() {
  return (
    <div className="w-screen h-screen">
     <ThreeBackground /> 
      <Preloader />
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="servizi">
        <Services />
      </div>
      <div id="aboutUs">
        <ChiSiamo />
      </div>
      <div id="contattaci">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}
