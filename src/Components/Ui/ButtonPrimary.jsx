import React from 'react';

const ButtonPrimary = ({children, button, width = false}) => {
    return (
        <button button={button} className={`rounded-lg py-4 px-8 ${width ? "w-full" : "full padd:w-1/2"} cursor-pointer border-none text-lg font-medium text-md bg-green_500 hover:bg-rasin_500 transition-colors duration-200`}>
            {children}
        </button>
    );
}

export default ButtonPrimary;
