
import React from 'react';
import Image from "next/image";

const gridItems = [
  //angolo destro
  { rowStart: 4,  rowEnd: 14, colStart: 72, colEnd: 74, color: "bg-blue-light"},
  { rowStart: 4, rowEnd: 6, colStart:25, colEnd: 74, color: "bg-blue-medium"  },

  //angolo sinistro
  { rowStart: 14,  rowEnd: 37, colStart: 4, colEnd: 6, color: "bg-blue-medium"},
  { rowStart: 35, rowEnd: 37, colStart: 4, colEnd: 65, color: "bg-blue-light" },

  //tacche basso destra
  { rowStart: 30, rowEnd: 37, colStart: 68, colEnd: 70, color: "bg-blue-light" },
  { rowStart: 25,  rowEnd: 37, colStart: 70, colEnd: 72, color: "bg-blue-medium"},
  { rowStart: 20, rowEnd: 37, colStart: 72, colEnd: 74, color: "bg-blue-dark" },
  
];

export default function Page() {
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="grid grid-cols-[repeat(74,15px)] grid-rows-[repeat(37,15px)] mt-5 gap-2">
        {gridItems.map(({ rowStart, rowEnd, colStart, colEnd, color }, index) => ( 
          <div
            key={index}
            className={`${color} h-full`}
            style={{
              gridRowStart: rowStart || undefined,
              gridRowEnd: rowEnd || undefined,
              gridColumnStart: colStart || undefined,
              gridColumnEnd: colEnd || undefined,
            }}
          />
        ))}

 
        <div className="col-start-4 col-end-20 row-start-6 flex items-center justify-center text-8xl text-blue-dark">
          <h1>About us</h1> 
        </div>
      </div> 
    </div>
  );
}
