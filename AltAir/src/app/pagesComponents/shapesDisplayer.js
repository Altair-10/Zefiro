import Image from "next/image";
/**
 * @param {Object} props
 * @param {1 | 2 | 3 | 4} props.numShapes - Shapes number desired (1, 2, 3 or 4)
 * @param {string} props.imgName1 - Required if pernumShapes >= 1
 * @param {string} props.imgName2 - Required if numShapes >= 2
 * @param {string} props.imgName3 - Required if numShapes >= 3
 * @param {string} props.imgName4 - Required if numShapes === 4
 * @param {string} props.flexType - Required; Options -> "row" or "col"
 * @param {string} props.posizion - Optional; Options -> "end"=default, "start" or "center"
 * @param {bool} props.spin - Optional; if true, the shape will spin
 */

export default function ShapesDisplayer({ 
  numShapes, 
  imgName1, 
  imgName2=undefined, 
  imgName3=undefined,
  imgName4=undefined,
  flexType=undefined,
  position=undefined,
  spin=undefined
}) {
    if (numShapes === 1 && (!imgName1 ||imgName2 || imgName3 || imgName4)) {
      throw new Error("Only imgName1 is required when numShape=1, whereas imgName2 and imgName3 are not");
    }
    if (numShapes === 2 && (!imgName1 || !imgName2|| imgName3 || imgName4)) {
      throw new Error("imgName1 and imgName2 are required when numShape=2, whereas imgName3 is not.");
    }
    if (numShapes === 3 && (!imgName1 || !imgName2 || !imgName3 || imgName4)) {
      throw new Error("imgName1, imgName2 and imgName3 are required when numShape=3");
    }
    if (numShapes === 4 && (!imgName1 || !imgName2 || !imgName3 || !imgName4)) {
      throw new Error("imgName1, imgName2, imgName3 and imgName4 are required when numShape=4");
    }
    const validPositions = ["start", "center", "end"];
    const imageClass = spin ? "w-[4vw] md:w-[2.2vw] animate-spin-slow" : "w-[2.2vw]";
    const flexClass = validPositions.includes(position) 
    ? `flex flex-${flexType} justify-${position} items-center w-full h-full`
    : `flex flex-${flexType} justify-end items-center w-full h-full`;

  return (
    <div className={flexClass}>
      {numShapes >= 1 && (
        <div className="m-[0.42vw]">
          <Image
            src={`${imgName1}`}
            width={512}
            height={512}
            alt={"star"}
            className={imageClass}
          />
        </div>
      )}
      {numShapes >= 2 && (
        <div className="m-[2vw]">
          <Image
            src={`${imgName2}`}
            width={10}
            height={10}
            alt={"star"}
            className={imageClass}
          />
        </div>
      )}
      {numShapes >= 3 && (
        <div className="m-[0.42vw]">
          <Image
            src={`${imgName3}`}
            width={512}
            height={512}
            alt={"star"}
            className={imageClass}
          />
        </div>
      )}
      {numShapes === 4 && (
        <div className="m-[0.42vw]">
          <Image
            src={`${imgName4}`}
            width={512}
            height={512}
            alt={"star"}
            className={imageClass}
          />
          
        </div>
      )}
    </div>
  );
}
