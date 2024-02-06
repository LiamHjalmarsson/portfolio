import React from 'react';

const Section = ({id, children}) => {
    return (
        <div className={`flex items-end laptop:items-center justify-center flex-col text-center w-full ${id === "home" ? "min-h-[900px] lg:min-h-[100vh]" : "min-h-[100vh] lg:min-h-[60vh]"} px-5 md:px-10 lg:px-20`} id={id}>  
            {children}
        </div>
    );
}

export default Section;
