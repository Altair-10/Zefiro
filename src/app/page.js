"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 1500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src="/loghi_altair/BigLogoLight.png"
        width={748}
        height={333}
        alt="company_logo"
        className="w-[1000px]"
      />
    </div>
  );
}
