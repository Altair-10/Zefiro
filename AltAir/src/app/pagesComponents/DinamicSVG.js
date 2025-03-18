import React from 'react';
import clsx from 'clsx';

const DynamicSVG = ({
    SvgComponent,
    width = "full",
    height = "full",
    className = '', // Classi aggiuntive passate tramite props
    spin = true,
}) => {
    // Classi di default
    const defaultClasses = 'flex row justify-start items-center m-[0.6vw]'; 

    // Combina le classi di default con quelle passate tramite props
    const combinedClasses = clsx(defaultClasses, className, {
        'animate-spin-slow': spin, // Aggiunge la classe di animazione solo se spin è true
    });

    return (
        <div style={{ width, height }} className={combinedClasses}>
            <img src={SvgComponent} alt="SVG" />
        </div>
    );
};

export default DynamicSVG;