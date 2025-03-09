import React from "react";
import ShapesDisplayer from "@/app/modules/ShapesDisplayer";
import Cards from "./components/card";

const page = () => {
  return (
    <>
      <div className="w-screen h-[20px] bg-blue-dark" />

      <div className="flex items-center justify-center ">
        <div className="grid grid-cols-[repeat(61,15px)] grid-rows-[repeat(33,15px)] gap-3">
          <div className="flex items-center justify-center text-8xl text-blue-dark col-[2/18] row-[1/7]">
            <h1>services</h1>
          </div>
          <div className="row-[16/18] col-[10/60] bg-blue-light ">
            <ShapesDisplayer numShapes={1} imgName1={"orange-8.png"} />
          </div>
          <div className="row-[18/20] col-[10/60] bg-blue-medium flex">
            <ShapesDisplayer
              numShapes={2}
              imgName1={"orange-8.png"}
              imgName2={"light-4.png"}
            />
          </div>
          <div className="row-[20/22] col-[10/60]  flex ">
            <ShapesDisplayer numShapes={1} imgName1={"orange-8.png"} />
          </div>
          <div className="row-[10/30] col-[10/60] flex bg">
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
