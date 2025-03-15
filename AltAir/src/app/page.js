import MobileLayout from "./mobilePages/page";
import DesktopLayout from "./desktopPages/page";

export default function SplashScreen() {
  return (
    <div className="w-screen h-screen">
      <MobileLayout />
      <DesktopLayout />
    </div>
  );
}
