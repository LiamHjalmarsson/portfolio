import React from 'react';
import Heading from '../../Components/Heading/Heading';

const RootSection = ({id, children}) => {
    return (
        <div className={`flex items-end laptop:items-center justify-center flex-col text-center w-full min-h-screen px-5 md:px-10 lg:px-20 py-8`} id={id}>  
            {children}
        </div>
    );
}

export default RootSection;
