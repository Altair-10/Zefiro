import ShapesDisplayer from "@/app/modules/ShapesDisplayer"

export default function DesktopLayout(){
    return(
      <>
      <div className="hidden sm:block row-[1/3] col-[16/62] bg-blue-dark">
        <ShapesDisplayer numShapes={2} imgName1={"orange-8.png"} imgName2={"light-4.png"}/>
      </div>
      <div className="hidden sm:block row-[3/5] col-[24/45] bg-blue-light"></div>
      <div className="hidden sm:block row-[3/5] col-[45/58] bg-blue-medium"></div>
      <div className="hidden sm:block row-[5/14] col-[28/32] bg-blue-medium"></div>
      <div className="hidden sm:block row-[3/14] col-[58/62] bg-blue-light"></div>
      <div className="hidden sm:block row-[12/14] col-[32/44] bg-blue-light"></div>
      <div className="hidden sm:block row-[12/14] col-[44/58] bg-blue-medium"></div>
      <div className="hidden sm:block row-[14/16] col-[20/35] bg-blue-medium"></div>
      <div className="hidden sm:block row-[14/16] col-[40/52] bg-blue-light"></div>
      <div className="hidden sm:block row-[14/16] col-[52/62] bg-blue-dark"></div>
      <div className="hidden sm:block row-[16/18] col-[15/20] bg-blue-dark"></div>
      <div className="hidden sm:block row-[16/18] col-[20/22] bg-blue-light"></div>
      <div className="hidden sm:block row-[16/18] col-[26/41] bg-blue-dark"></div>
      <div className="hidden sm:block row-[16/18] col-[41/48] bg-blue-medium"></div>
      <div className="hidden sm:block row-[16/18] col-[48/62] bg-blue-light"></div>
      <div className="hidden sm:block row-[16/20] col-[22/26] bg-blue-light"></div>
      <div className="hidden sm:block row-[18/20] col-[15/22] bg-blue-medium"></div>
      <div className="hidden sm:block row-[18/20] col-[26/28] bg-blue-light"></div>
      <div className="hidden sm:block row-[18/22] col-[28/40] bg-blue-medium"></div>
      <div className="hidden sm:block row-[18/22] col-[56/62] bg-blue-dark"></div>
      <div className="hidden sm:block row-[20/22] col-[12/17] bg-blue-dark"></div>
      <div className="hidden sm:block row-[22/24] col-[4/62] bg-blue-light"></div>
    
      <div className="hidden sm:block row-[4] col-[1/5]">
        <h1 className="w-[30vw] text-[5vw] font-serif text-blue-dark">take IT for future</h1>
      </div>
    
      <div className="hidden sm:block row-[16] col-[1/11]">
        <button className="w-[15vw] h-[4vw] mt-3 rounded-3xl bg-orange text-brown-light text-[2vw]">contattaci</button>
      </div>
    </>    
    )}