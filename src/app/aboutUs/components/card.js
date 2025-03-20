import React from 'react';
import Image from 'next/image';

export default function Card({fileName,width,height,alt,nome,descr1,ico1,descr2,ico2,descr3,ico3 }) {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-[50vw] h-[20vw] md:w-[30vw] md:h-[13vw] bg-blue-dark flex flex-row rounded-3xl">

        {/* Primo flexbox che divide verticalmente il primo 1/3 */}
        <div className="flex flex-col w-1/4 items-center justify-center">
          {/* <Image  
            src={`/imgProf/${fileName}`}
            width={width}
            height={height}
            alt={alt} 
            className="w-[8vw] h-[8vw] md:w-[6vw] md:h-[6vw] "
          /> */}
        </div>

        {/* Secondo flexbox che divide orizzontalmente il restante spazio */}
        <div className="flex flex-col w-3/4">

          {/* Primo sotto-flexbox orizzontale */}
          <div className="flex flex-row  h-1/3  ">
            <h1  className=" text-orange text-[4vw]  md:text-[2vw] font-bold my-auto " >{nome}</h1>
          </div>
          {/* Secondo sotto-flexbox orizzontale */}
          <div className="flex flex-col h-2/3">

            <div className="flex flex-row  h-1/3 ">
              {/* <Image  
                src={`/FormeSVG/${ico1}`}
                width={50}
                height={50}
                alt=''
                className="w-[1vw] h-[1vw]"
              />   */}
              <p  className=" text-brown-light text-[2vw]  md:text-[1vw]  my-auto " >{descr1}</p>
            </div>

            <div className="flex flex-row  h-1/3 ">
              {/* <Image  
                src={`/formeSVG/${ico2}`}
                width={50}
                height={50}
                alt=''
                className="w-[1vw] h-[1vw]"
              /> */}
              <p  className=" text-brown-light text-[2vw]  md:text-[1vw]  my-auto " >{descr2}</p>
            </div>

            <div className="flex flex-row  h-1/3 ">
              {/* <Image  
                src={`/formeSVG/${ico3}`}
                width={50}
                height={50}
                alt=''
                className="w-[1vw] h-[1vw]" 
              /> */}
              <p  className=" text-brown-light text-[2vw]  md:text-[1vw]  my-auto " >{descr3}</p>
            </div>

           {/* <p className=" text-brown-light text-[3vw]  md:text-[1.5vw] " >{descrizione}</p>  */}

          </div>
        </div>
      </div>
    </div>
  );
}
