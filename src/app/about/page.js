import React from 'react';
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="grid grid-cols-[repeat(61,15px)] grid-rows-[repeat(37,15px)] mt-5 gap-3">

        {/* Angolo destro */}
        <div className="bg-blue-light h-full col-[59/61] row-[4/10]" />
        <div className="bg-blue-medium h-full col-[20/61] row-[3/5]" />

        {/* Angolo sinistro */}
        <div className="bg-blue-medium h-full col-[2/4] row-[10/37]" />
        <div className="bg-blue-light h-full col-[2/50] row-[35/37]" />

        {/* Tacche basso destra */}
        <div className="bg-blue-light h-full col-[53/55] row-[32/37]" />
        <div className="bg-blue-medium h-full col-[56/58] row-[24/37]" />
        <div className="bg-blue-dark h-full col-[59/61] row-[16/37]" />

        {/* Testo "About us" */}
        <div className="flex items-center justify-center text-8xl text-blue-dark col-[2/18] row-[1/7]">
          <h1>About Us</h1>
        </div>
      </div>
    </div>
  );
}
