import MobileLayout from "./mobilePages/page";
import DesktopLayout from "./desktopPages/page";
import Navbar from "./pagesComponents/navBar";
import Footer from "./pagesComponents/footer";

export default function SplashScreen() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <MobileLayout />
      <DesktopLayout />
      <Footer />
    </div>
  );
}
