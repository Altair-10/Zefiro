import React from 'react'
import Image from "next/image";
import SocialButton from './components/social_button';
import ShapesDisplayer from '../modules/ShapesDisplayer';

export default function Page() {
  return (
    <div>
      <div className="w-screen h-[20px] bg-blue-dark" />
      <div className="flex items-center justify-between mt-10 ml-10 font-bold max-w-[1744px]">        
        {/* Logo + navBar */}
        <div className="flex items-center">
          <Image 
            src="/loghi_altair/SmallLogoLight.png"
            width={683}
            height={366}
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
          {/* Fantasia blu */}
          <div className="row-[1/3] col-[16/62] bg-blue-dark">
            <ShapesDisplayer numShapes={2} imgName1={"orange-8.png"} imgName2={"light-4.png"}/>
          </div>
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
          
          {/* Slogan */}
          <div className="row-start-3 col-start-1 col-end-5">
            <h1 className="w-[700px] text-[120px] font-serif text-blue-dark">take IT for</h1>
          </div>

          {/* Slogan */}
          <div className="row-start-6 col-start-1 col-end-5 mt-[55px]">
            <h1 className="w-[500px] text-[120px] font-serif text-blue-dark">future</h1>
          </div>

          {/* Bottone contattaci */}
          <div className="row-start-[16] col-start-1 col-end-[11]">
            <button className="w-[200px] h-[60px] mt-3 rounded-3xl bg-orange text-brown-light text-2xl">contattaci</button>
          </div>
        </div>
      </div>
    </div>
  )
}

