import React from 'react'
import NavBar from '../modules/NavBar';
import MobileLayout from './components/MobileLayout';
import DesktopLayout from './components/DesktopLayout';

export default function Page() {
  return (
    <div className="w-screen h-screen">
      <NavBar />
      <div className="flex justify-center items-center w-full">
        <div className="
            grid gap-[0.5vw] md:mt-8 
            grid-cols-[repeat(35,_minmax(0,_2vw))] md:grid-cols-[repeat(61,_minmax(0,_1vw))]
            grid-rows-[repeat(23,_minmax(0,_2vw))] md:grid-rows-[repeat(23,_minmax(0,_1vw))]
        ">
          <MobileLayout />
          <DesktopLayout />
        </div>
      </div>
    </div> 
  )
}

