import React from 'react';

const ButtonSecondary = ({children, button, onClick}) => {
    return (
        <button 
            button={button} 
            onClick={onClick} 
            className={`rounded-lg py-4 px-8 w-full border-2 max-w-[290px] border-caribbean_500 text-caribbean_500 cursor-pointer text-lg font-bold text-md hover:shadow-middle transtion duration-500 hover:shadow-caribbean_500  hover:border-caribbean_600 transition-colorss`}
        >
            {children}
        </button>
    );
}

export default ButtonSecondary;
