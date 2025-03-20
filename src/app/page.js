import Navbar from "./modules/navBar";
import Home from "./home/page";
import Services from "./services/page";
import AboutUs from "./aboutUs/page";
import ContactUs from "./contactUs/page";
import Footer from "./modules/footer";

export default function SplashScreen() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <Home />
      <Services />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}
