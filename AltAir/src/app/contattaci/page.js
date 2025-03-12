"use client";
import React from "react";
import HeaderStrip from "../modules/HeaderStrip";
import DesktopLayout from "./components/DesktopLayout";


export default function Page() {
  return (
    <div className="w-screen h-screen">
    <HeaderStrip />
    

     <div className="flex justify-end w-full">
        <div className="
          grid gap-[0.5vw] 
          grid-cols-[repeat(35,_minmax(0,_2vw))] md:grid-cols-[repeat(65,_minmax(0,_1vw))]
          grid-rows-[repeat(30,_minmax(0,_2vw))] md:grid-rows-[repeat(31,_minmax(0,_1vw))]
        ">
          <DesktopLayout />
        </div>
      </div>
    </div>
  );
};
