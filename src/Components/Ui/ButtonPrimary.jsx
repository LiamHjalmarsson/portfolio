import React from 'react';

const ButtonPrimary = ({children, button}) => {
    return (
        <button button={button} className={`rounded-lg py-4 px-8 w-full border-2 cursor-pointer border-none text-lg font-medium text-md bg-green_400 hover:bg-green_500 transition-colors duration-200`}>
            {children}
        </button>
    );
}

export default ButtonPrimary;
