import Image from "next/image";
/**
 * @param {Object} props
 * @param {1 | 2 | 3} props.numShapes - Shapes number desired (1, 2 or 3)
 * @param {string} props.imgName1 - Required if pernumShapes >= 1
 * @param {string} props.imgName2 - Required if numShapes >= 2
 * @param {string} props.imgName3 - Required if numShapes === 3
 */

export default function ShapesDisplayer({ 
    numShapes, 
    imgName1, 
    imgName2=undefined, 
    imgName3=undefined
}) {
    if (numShapes === 1 && (!imgName1 ||imgName2 || imgName3)) {
      throw new Error("Only imgName1 is required when numShape=1, whereas imgName2 and imgName3 are not");
    }
    if (numShapes >= 2 && (!imgName1 || !imgName2|| imgName3)) {
      throw new Error("imgName1 and imgName2 are required when numShape=2, whereas imgName3 is not.");
    }
    if (numShapes === 3 && (!imgName1 || !imgName2 || !imgName3)) {
      throw new Error("imgName1, imgName2 and imgName3 are required when numShape=3");
    }
  return (
    <div className="flex flex-row justify-start items-center w-full h-full">
      {numShapes >= 1 && (
        <div className="mx-[0.42vw]">
          <Image
            src={`/geometric_shapes/${imgName1}`}
            width={512}
            height={512}
            alt={"star"}
            className="w-[2.2vw] animate-spin-slow"
          />
        </div>
      )}
      {numShapes >= 2 && (
        <div className="mx-[0.42vw]">
          <Image
            src={`/geometric_shapes/${imgName2}`}
            width={512}
            height={512}
            alt={"star"}
            className="w-[2.2vw] animate-spin-slow"
          />
        </div>
      )}
      {numShapes === 3 && (
        <div className="mx-[0.42vw]">
          <Image
            src={`/geometric_shapes/${imgName3}`}
            width={512}
            height={512}
            alt={"star"}
            className="w-[2.2vw] animate-spin-slow"
          />
        </div>
      )}
    </div>
  );
}
