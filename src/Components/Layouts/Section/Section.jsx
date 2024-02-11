import React from 'react';

const Section = ({id, children, custom}) => {
    return (
        <div className={`flex items-end laptop:items-center relative justify-center flex-col text-center w-full ${custom} ${id === "home" ? "min-h-[900px] md:min-h-[950px] lg:min-h-[100vh]" : "min-h-[100vh] lg:min-h-[60vh]"} px-5 md:px-10 lg:px-20`} id={id}>  
            {children}
        </div>
    );
}

export default Section;
