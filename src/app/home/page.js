"use client"
import React from "react";
import ShapesDisplayer from "@/app/modules/shapesDisplayer";
import HomeMobile from "./components/HomeMobile";
import HomeDesktop from "./components/HomeDesktop";

export default function Home() {
  return (
    <main className="w-full">
      {/* Renderizza HomeMobile su dispositivi mobili, nascosto su md e superiori */}
      <div className="block md:hidden">
        <HomeMobile />
      </div>
      
      {/* Renderizza HomeDesktop su dispositivi md e superiori, nascosto su mobile */}
      <div className="hidden md:block">
        <HomeDesktop />
      </div>
    </main>
  )
}