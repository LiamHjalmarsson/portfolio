import React from 'react';

const Corner = ({custom}) => {
    return (
        <div 
            className={`h-24 w-24 border-caribbean_500 ${custom} absolute padd:group-hover:w-full transition-all duration-1000 ease-in-out`}
        >
        </div>
    );
}

export default Corner;
