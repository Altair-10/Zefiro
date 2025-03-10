"use client";
import React from "react";
import ShapesDisplayer from "@/app/modules/ShapesDisplayer";
import FormPage from "./components/formPage";
const page = () => {
  return (
    <div>
        <div className="flex items-center justify-center text-8xl text-blue-dark col-[2/18] row-[1/7]">
          <h1>Contattaci</h1>
        </div>
      <div className="row-[10/30] col-[10/60] flex bg">
        <FormPage />
      </div>
    </div>
  );
};
export default page;
