import React from 'react';
import Heading from '../../Components/Heading/Heading';

const RootSection = ({id, children, to}) => {
    return (
        <div className="min-h-screen flex flex-col justify-around laptop:justify-center items-center relative" id={id}>
            {children}
        </div>
    );
}

export default RootSection;
