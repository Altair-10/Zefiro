import React from 'react'
import Image from "next/image";
import SocialButton from './components/social_button';


const gridItems = [
  { rowStart: 1, rowEnd: 3, colStart: 16, colEnd: 62, color: "bg-blue-dark" },      // 1°riga 1°pos
  { rowStart: 3, rowEnd: 5, colStart: 24, colEnd: 45, color: "bg-blue-light" },     // 2°riga 1°pos
  { rowStart: 3, rowEnd: 5, colStart: 45, colEnd: 58, color: "bg-blue-medium" },    // 2°riga 2°pos
  { rowStart: 5, rowEnd: 14, colStart: 28, colEnd: 32, color: "bg-blue-medium" },   // ret.vert.sx
  { rowStart: 3, rowEnd: 14, colStart: 58, colEnd: 62, color: "bg-blue-light" },   // ret.vert.dx
  { rowStart: 12, rowEnd: 14, colStart: 32, colEnd: 44, color: "bg-blue-light" },   // 3°riga 1°pos
  { rowStart: 12, rowEnd: 14, colStart: 44, colEnd: 58, color: "bg-blue-medium" },  // 3°riga 2°pos
  { rowStart: 14, rowEnd: 16, colStart: 20, colEnd: 35, color: "bg-blue-medium" },  // 4°riga 1°pos
  { rowStart: 14, rowEnd: 16, colStart: 40, colEnd: 52, color: "bg-blue-light" },   // 4°riga 2°pos
  { rowStart: 14, rowEnd: 16, colStart: 52, colEnd: 62, color: "bg-blue-dark" },    // 4°riga 3°pos
  { rowStart: 16, rowEnd: 18, colStart: 15, colEnd: 20, color: "bg-blue-dark" },    // 5°riga 1°pos
  { rowStart: 16, rowEnd: 18, colStart: 20, colEnd: 22, color: "bg-blue-light" },   // 5°riga 2°pos
  { rowStart: 16, rowEnd: 18, colStart: 26, colEnd: 41, color: "bg-blue-dark" },    // 5°riga 3°pos
  { rowStart: 16, rowEnd: 18, colStart: 41, colEnd: 48, color: "bg-blue-medium" },  // 5°riga 4°pos
  { rowStart: 16, rowEnd: 18, colStart: 48, colEnd: 62, color: "bg-blue-light" },   // 5°riga 5°pos
  { rowStart: 16, rowEnd: 20, colStart: 22, colEnd: 26, color: "bg-blue-light" },   // quad.sx
  { rowStart: 18, rowEnd: 20, colStart: 15, colEnd: 22, color: "bg-blue-medium" },  // 6°riga 1°pos
  { rowStart: 18, rowEnd: 20, colStart: 26, colEnd: 28, color: "bg-blue-light" },   // 6°riga 2°pos
  { rowStart: 18, rowEnd: 22, colStart: 28, colEnd: 40, color: "bg-blue-medium" },  // ret.orizz.sx
  { rowStart: 18, rowEnd: 22, colStart: 56, colEnd: 62, color: "bg-blue-dark" },    // ret.orizz.dx
  { rowStart: 20, rowEnd: 22, colStart: 12, colEnd: 17, color: "bg-blue-dark" },    // 8°riga 1°pos
  { rowStart: 22, rowEnd: 24, colStart: 4, colEnd: 62, color: "bg-blue-light" },    // 9°riga 1°pos
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
        <div className="grid grid-cols-[repeat(61,15px)] grid-rows-[repeat(24,15px)] mt-10 gap-3">
          <div className="row-[1/3] col-[16/62] bg-blue-dark"></div>
          <div className="row-[3/5] col-[24/45] bg-blue-light"></div>
          <div className="row-[3/5] col-[45/58] bg-blue-medium"></div>
          <div className="row-[5/14] col-[28/32] bg-blue-medium"></div>
          <div className="row-[3/14] col-[58/62] bg-blue-light"></div>
          <div className="row-[12/14] col-[32/44] bg-blue-light"></div>
          <div className="row-[12/14] col-[44/58] bg-blue-medium"></div>
          <div className="row-[14/16] col-[20/35] bg-blue-medium"></div>
          <div className="row-[14/16] col-[40/52] bg-blue-light"></div>
          <div className="row-[14/16] col-[52/62] bg-blue-dark"></div>
          <div className="row-[16/18] col-[15/20] bg-blue-dark"></div>
          <div className="row-[16/18] col-[20/22] bg-blue-light"></div>
          <div className="row-[16/18] col-[26/41] bg-blue-dark"></div>
          <div className="row-[16/18] col-[41/48] bg-blue-medium"></div>
          <div className="row-[16/18] col-[48/62] bg-blue-light"></div>
          <div className="row-[16/20] col-[22/26] bg-blue-light"></div>
          <div className="row-[18/20] col-[15/22] bg-blue-medium"></div>
          <div className="row-[18/20] col-[26/28] bg-blue-light"></div>
          <div className="row-[18/22] col-[28/40] bg-blue-medium"></div>
          <div className="row-[18/22] col-[56/62] bg-blue-dark"></div>
          <div className="row-[20/22] col-[12/17] bg-blue-dark"></div>
          <div className="row-[22/24] col-[4/62] bg-blue-light"></div>
            
          <div className="row-start-3 col-start-1 col-end-5">
            <h1 className="w-[700px] text-[120px] font-serif text-blue-dark">take IT for</h1>
          </div>
          <div className="row-start-6 col-start-1 col-end-5 mt-[55px]">
            <h1 className="w-[500px] text-[120px] font-serif text-blue-dark">future</h1>
          </div>
          <div className="row-start-[16] col-start-1 col-end-[11]">
              <button className="w-[200px] h-[60px] mt-3 rounded-3xl bg-orange text-brown-light text-2xl">contattaci</button>
          </div>
        </div>
      </div>
     
    </div>
  )
}

