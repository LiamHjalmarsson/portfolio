import React from 'react';

const ButtonSecondary = ({children, button, onClick, custom}) => {
    return (
        <button 
            button={button} 
            onClick={onClick} 
            className={`rounded-lg py-4 px-8 w-full border-2 border-green_400 cursor-pointer text-lg font-medium text-md hover:bg-green_500 hover:border-green_500 transition-colors duration-200`}
        >
            {children}
        </button>
    );
}

export default ButtonSecondary;
