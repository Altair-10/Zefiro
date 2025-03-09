import React from 'react';
import Image from "next/image";
import Card from './components/Card';

export default function Page() {
  return (
    <>
    <div className="w-screen h-[20px] bg-blue-dark" />

      <div className="flex items-center justify-center ">
    
        <div className="grid grid-cols-[repeat(61,15px)] grid-rows-[repeat(33,15px)] gap-3">

          {/* Angolo destro */}
          <div className="bg-blue-light h-full col-[59/61] row-[4/10]" />
          <div className="bg-blue-medium h-full col-[20/61] row-[3/5]" />

          {/* Angolo sinistro */}
          <div className="bg-blue-medium h-full col-[2/4] row-[10/33]" />
          <div className="bg-blue-light h-full col-[2/50] row-[31/33]" />

          {/* Tacche basso destra */}
          <div className="bg-blue-light h-full col-[53/55] row-[25/33]" />
          <div className="bg-blue-medium h-full col-[56/58] row-[20/33]" />
          <div className="bg-blue-dark h-full col-[59/61] row-[15/33]" />

          {/* Testo "About us" */}

          <div className="flex items-center justify-center text-8xl text-blue-dark col-[2/18] row-[1/7]">
            <h1>About Us</h1>
          </div>

          <div className=" col-[9/28] row-[10]">
            <Card fileName="test.png" width="100" height="100"   alt="" />
          </div>

          <div className=" col-[32/51] row-[10]">
            <Card fileName="test.png" width="100" height="100"   alt=""/>
          </div>

           <div className=" col-[9/28] row-[20]">
            <Card fileName="test.png" width="100" height="100"   alt="" />  
          </div>

          <div className=" col-[32/51]  row-[20]">
            <Card fileName="test.png" width="100" height="100"   alt=""/>
          </div>

        </div>
    </div>
    </>
  );
}
