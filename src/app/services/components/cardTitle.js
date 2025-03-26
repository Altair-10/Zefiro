export default function CardTitle({ preTitle, title }){
    return(
        <>
        <p className="text-[3vw] pt-[2vw] pl-[2vw] md:p-0 md:text-[0.6vw] text-black/60 uppercase font-bold">
            {preTitle}
        </p>
        <h1 className="text-[6vw] pl-[2vw] md:p-0 md:text-[1.5vw] text-black/90 font-medium">
            {title}
        </h1>
        </>
        
    )
}