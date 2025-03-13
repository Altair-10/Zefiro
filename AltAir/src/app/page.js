import MobileLayout from "./mobileLayout/page";
import DesktopLayout from "./desktopLayout/page";

export default function SplashScreen() {
  return (
    <div className="w-screen h-screen">
      <MobileLayout />
      <DesktopLayout />
    </div>
  );
}
