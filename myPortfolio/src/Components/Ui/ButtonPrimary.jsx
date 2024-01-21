import React from 'react';

const ButtonPrimary = ({children, button, width = false}) => {
    return (
        <button button={button} className={`rounded-lg py-3 ${width ? "w-full" : "full padd:w-1/2"} cursor-pointer border-none text-lg font-medium text-slate-200 text-md bg-indigo-600 hover:bg-indigo-500 transition-colors duration-200`}>
            {children}
        </button>
    );
}

export default ButtonPrimary;
