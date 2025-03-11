import React from 'react';
import DesktopLayout from './components/DesktopLayout';
import MobileLayout from './components/MobileLayout';

export default function Page() {
  return (
    <>
    <div className="w-full h-[10px] sm:h-[15px] bg-blue-dark" />
      <div className="flex justify-center w-full">
        <div className="
          grid gap-[0.5vw] md:mt-8 
          grid-cols-[repeat(30,_minmax(0,_2vw))] md:grid-cols-[repeat(61,_minmax(0,_1vw))]
          grid-rows-[repeat(45,_minmax(0,_2vw))] md:grid-rows-[repeat(31,_minmax(0,_1vw))]
        ">
          <DesktopLayout />
          <MobileLayout />
        </div>
    </div>
    </>
  );
}
