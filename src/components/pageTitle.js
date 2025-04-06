export default function PageTitle({ title }){
    return(
    <div className="flex justify-center items-center row-[2] col-[1/32] md:row-[2] md:col-[1/49]">
        <h1 className="text-[10vw] md:text-[6vw] font-bold text-blue-dark">
            {title}
        </h1>
    </div> 
    )
}