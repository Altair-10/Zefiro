import React from 'react'
import Image from "next/image";
import SocialButton from './social_button';

const gridItems = [
  { rowStart: 1, colStart: 4, colEnd: 17, color: "bg-blue-dark" },
  { rowStart: 2, colStart: 6, colEnd: 11, color: "bg-blue-light" },
  { rowStart: 2, colStart: 11, colEnd: 15, color: "bg-blue-medium" },
  { rowStart: 2, rowEnd: 5, colStart: 15, colEnd: 17, color: "bg-blue-medium" },
  { rowStart: 3, rowEnd: 5, colStart: 7, colEnd: 8, color: "bg-blue-medium" },
  { rowStart: 4, colStart: 8, colEnd: 11, color: "bg-blue-dark" },
  { rowStart: 4, colStart: 11, colEnd: 14, color: "bg-blue-medium" },
  { rowStart: 4, colStart: 14, colEnd: 15, color: "bg-blue-light" },
  { rowStart: 5, colStart: 5, colEnd: 8, color: "bg-blue-medium" },
  { rowStart: 5, colStart: 9, colEnd: 13, color: "bg-blue-light" },
  { rowStart: 5, colStart: 15, colEnd: 17, color: "bg-blue-dark" },
  { rowStart: 6, colStart: 10, color: "bg-blue-medium" },
  { rowStart: 6, colStart: 6, colEnd: 10, color: "bg-blue-dark" },
  { rowStart: 6, colStart: 11, colEnd: 17, color: "bg-blue-light" },
  { rowStart: 7, colStart: 4, colEnd: 10, color: "bg-blue-medium" },
  { rowStart: 7, colStart: 14, colEnd: 17, color: "bg-blue-dark" },
  { rowStart: 8, colStart: 4, colEnd: 17, color: "bg-blue-light" },
];

export default function Page() {
  return (
    <div>
      <div className="w-screen h-[20px] bg-blue-dark" />
      <div className="flex items-center justify-between mt-10 ml-10 font-bold max-w-[1744px]">        
        {/* Logo + navBar */}
        <div className="flex items-center">
          <Image 
            src="/loghi_altair/SmallLogoLight.png"
            width={1000}
            height={1000}
            alt="Logo" 
            className="w-32"
          />
          <button className="text-blue-medium ml-5 mt-2">SERVICE</button>
          <button className="text-blue-medium ml-5 mt-2">ABOUT US</button>
        </div>

        {/* Icone a destra */}
        <div className="flex items-center gap-3">
          <SocialButton source="/loghi_social/instagram.png" alt="instagram"/>
          <SocialButton source="/loghi_social/facebook.png" alt="facebook"/>
          <SocialButton source="/loghi_social/linkedin.png" alt="linkedin"/>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-[repeat(16,95px)] grid-rows-[repeat(9,60px)] mt-5 gap-2">
          {gridItems.map(({ rowStart, rowEnd, colStart, colEnd, color }, index) => (
            <div
              key={index}
              className={`${color} h-full`}
              style={{
                gridRowStart: rowStart || undefined,
                gridRowEnd: rowEnd || undefined,
                gridColumnStart: colStart || undefined,
                gridColumnEnd: colEnd|| undefined,
              }}
            />
          ))}
          <div className="row-start-2 col-start-1 col-end-5">
            <h1 className="w-[500px] text-[100px] font-serif text-blue-dark">take IT for</h1>
          </div>
          <div className="row-start-3 col-start-1 col-end-5 mt-[55px]">
            <h1 className="w-[500px] text-[100px] font-serif text-blue-dark">future</h1>
          </div>
          <div className="row-start-7 col-start-1 col-end-3">
            <div className="flex flex-center">
              <button className="w-[200px] h-[60px] rounded-3xl bg-orange text-brown-light text-2xl">contattaci</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

