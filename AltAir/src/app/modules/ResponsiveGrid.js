export default function ResponsiveGrid({children}) {
    return (
      <div className="flex justify-center items-center w-full">
        <div className="
            grid gap-[0.5vw] md:mt-8 
            grid-cols-[repeat(35,_minmax(0,_2vw))] md:grid-cols-[repeat(61,_minmax(0,_1vw))]
            grid-rows-[repeat(23,_minmax(0,_2vw))] md:grid-rows-[repeat(23,_minmax(0,_1vw))]
        ">
          {children}
        </div>
      </div>
    );
  }
  