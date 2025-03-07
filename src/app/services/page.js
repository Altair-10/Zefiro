import React from "react";
import Services from "./components/services";
import TitoloServices from "./components/titoloServices";
const page = () => {
  return (
    <div className="w-screen h-screen p-8 flex items-start justify-center">
      <TitoloServices/>
      <Services />
    </div>
  );
};

export default page;
