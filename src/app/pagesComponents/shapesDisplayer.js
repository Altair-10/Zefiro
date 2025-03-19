/**
 * @param {Object} props
 * @param {1 | 2 | 3 | 4} props.numShapes - Shapes number desired (1, 2, 3 or 4)
 * @param {string} props.imgName1 - Required if numShapes >= 1
 * @param {string} props.imgName2 - Required if numShapes >= 2
 * @param {string} props.imgName3 - Required if numShapes >= 3
 * @param {string} props.imgName4 - Required if numShapes === 4
 * @param {string} props.flexType - Required; Options -> "row" or "col"
 * @param {string} props.position - Optional; Options -> "end"=default, "start" or "center"
 * @param {bool} props.spin - Optional; if true, the shape will spin
 * @param {string} props.width - Optional; Width of the SVG (e.g., "100px", "5vw", "auto")
 * @param {string} props.height - Optional; Height of the SVG (e.g., "100px", "5vw", "auto")
 */

export default function ShapesDisplayer({
  numShapes,
  imgName1,
  imgName2 = undefined,
  imgName3 = undefined,
  imgName4 = undefined,
  flexType = "row",
  position = "end",
  spin = true,
  width = "1.7vw",
  height = "1.7vw",
}) {
  // Validazione delle props
  if (numShapes === 1 && (!imgName1 || imgName2 || imgName3 || imgName4)) {
    throw new Error("Only imgName1 is required when numShapes=1, whereas imgName2 and imgName3 are not");
  }
  if (numShapes === 2 && (!imgName1 || !imgName2 || imgName3 || imgName4)) {
    throw new Error("imgName1 and imgName2 are required when numShapes=2, whereas imgName3 is not.");
  }
  if (numShapes === 3 && (!imgName1 || !imgName2 || !imgName3 || imgName4)) {
    throw new Error("imgName1, imgName2, and imgName3 are required when numShapes=3");
  }
  if (numShapes === 4 && (!imgName1 || !imgName2 || !imgName3 || !imgName4)) {
    throw new Error("imgName1, imgName2, imgName3, and imgName4 are required when numShapes=4");
  }

  const validPositions = ["start", "center", "end"];
  const imageClass = spin ? "w-[4vw] md:w-[2.2vw] animate-spin-slow" : "w-[2.2vw]";
  const flexClass = validPositions.includes(position)
    ? `flex flex-${flexType} justify-${position} items-center w-full h-full`
    : `flex flex-${flexType} justify-end items-center w-full h-full`;

  return (
    <div className={flexClass}>
      {numShapes >= 1 && (
        <div className="m-[0.7vw]">
          <img
            src={imgName1}
            alt="Shape 1"
            className={imageClass}
            style={{ width, height }}
          />
        </div>
      )}
      {numShapes >= 2 && (
        <div className="m-[0.7vw]">
          <img
            src={imgName2}
            alt="Shape 2"
            className={imageClass}
            style={{ width, height }}
          />
        </div>
      )}
      {numShapes >= 3 && (
        <div className="m-[0.7vw]">
          <img
            src={imgName3}
            alt="Shape 3"
            className={imageClass}
            style={{ width, height }}
          />
        </div>
      )}
      {numShapes === 4 && (
        <div className="m-[0.7vw]">
          <img
            src={imgName4}
            alt="Shape 4"
            className={imageClass}
            style={{ width, height }}
          />
        </div>
      )}
    </div>
  );
}