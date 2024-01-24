import React from 'react';

const Corner = ({custom}) => {
    return (
        <div 
            className={`h-28 w-28 border-green_500 ${custom} absolute padd:group-hover:w-full group-hover:h-28 transition-all duration-1000 ease-in-out`}
        >
        </div>
    );
}

export default Corner;
