import React from 'react';

const ButtonSecondary = ({children, button, width = false, onClick, custom}) => {
    return (
        <button 
            button={button} 
            onClick={onClick} 
            className={`rounded-lg py-3 px-0 ${width ? "w-full" : "full padd:w-1/2"} ${custom ? custom : ""} cursor-pointer text-lg font-medium border-indigo-500 text-indigo-500 border-2 hover:bg-indigo-500 hover:text-slate-200 transition-colors duration-500`}
        >
            {children}
        </button>
    );
}

export default ButtonSecondary;
