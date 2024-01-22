import React from 'react';

const ButtonSecondary = ({children, button, width = false, onClick, custom}) => {
    return (
        <button 
            button={button} 
            onClick={onClick} 
            className={`rounded-lg py-4 px-8 ${width ? "w-full" : "full padd:w-1/2"} ${custom ? custom : ""} cursor-pointer text-lg font-medium border-green_500 text-green_500 border-2 hover:text-whiteish transition-colors duration-500`}
        >
            {children}
        </button>
    );
}

export default ButtonSecondary;
