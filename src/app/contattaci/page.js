"use client";
import React from "react";
import ResponsiveGrid from "../modules/ResponsiveGrid";
import DesktopLayout from "./components/DesktopLayout";
import ShapesDisplayer from "@/app/modules/ShapesDisplayer";
import FormPage from "./components/formPage";

export default function Page() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-[10px] sm:h-[15px] bg-blue-dark" />

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
