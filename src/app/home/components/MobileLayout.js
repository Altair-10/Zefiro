
export default function MobileLayout(){
    return(
      <>
        <div className="row-[3/18] col-[1/3] bg-blue-light sm:hidden"></div>
        <div className="row-[16/18] col-[1/9] bg-blue-light sm:hidden"></div>
        <div className="row-[3/5] col-[1/11] bg-blue-medium sm:hidden"></div>
        <div className="row-[16/18] col-[1/9] bg-blue-light sm:hidden"></div>
        <div className="row-[18/20] col-[1/14] bg-blue-medium sm:hidden"></div>
        <div className="row-[20/22] col-[1/35] bg-blue-dark sm:hidden"></div>

        <div className="row-[7] col-[4] sm:hidden">
          <h1 className="w-[85vw] text-[10vw] font-serif text-blue-dark">
            take IT for future
          </h1>
        </div>
        <div className="row-[12] col-[11] sm:hidden">
          <button className="w-[40vw] mt-2 rounded-3xl bg-orange text-brown-light text-[5vw]">
            contattaci
          </button>
        </div>
      </>
    )
}