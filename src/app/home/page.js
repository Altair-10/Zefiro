import React from 'react'
import Image from "next/image";


const gridItems = [
  { rowStart: 1, colStart: 5, colEnd: 17, color: "bg-blue-dark" },
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
  { rowStart: 7, colStart: 2, colEnd: 10, color: "bg-blue-medium" },
  { rowStart: 7, colStart: 15, colEnd: 17, color: "bg-blue-dark" },
  { rowStart: 8, colStart: 2, colEnd: 17, color: "bg-blue-light" },
];

export default function Page() {
  return (
    <div>
      <div className="w-screen h-[20px] bg-blue-dark" />
        <div className="flex mt-10 ml-10 font-bold">
          <Image 
          src="/loghi/SmallLogoLight.png"
          width={1000}
          height={1000}
          alt="Logo" 
          className="w-32"
          />
          <button className="text-blue-medium ml-5 mt-2">SERVICE</button>
          <button className="text-blue-medium ml-5 mt-2">ABOUT US</button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      <div className="flex items-center justify-center mt-5">
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
          <div className="row-start-2 row-end-5 col-start-1 col-end-5">
            <h1 className="w-[500px] text-[100px] font-serif text-blue-dark">take IT for future</h1>
          </div>
        </div>
      </div>
     
    </div>
  )
}

