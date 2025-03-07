import React from 'react';
import Image from 'next/image';

export default function Card({fileName,width,height,alt}) {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-[500px] h-[200px] bg-blue-dark flex flex-row rounded-3xl">

        {/* Primo flexbox che divide verticalmente il primo 1/3 */}
        <div className="flex flex-col w-1/4 items-center justify-center">
        <Image  
            src={`/imgProf/${fileName}`}
            width={width}
            height={height}
            alt={alt} 
            className="w-[100px]"
        />
        </div>

        {/* Secondo flexbox che divide orizzontalmente il restante spazio */}
        <div className="flex flex-col w-3/4">

          {/* Primo sotto-flexbox orizzontale */}
          <div className="flex flex-row h-1/3 ">
            {/* Contenuto */}

          </div>
          {/* Secondo sotto-flexbox orizzontale */}
          <div className="flex flex-row h-2/3">
            {/* Contenuto */}
          </div>
        </div>
      </div>
    </div>
  );
}
