import React from 'react';

const ButtonPrimary = ({children, button}) => {
    return (
        <button button={button} className={`rounded-lg text-whiteish bolder border-2 border-caribbean_600 py-4 px-8 max-w-[290px] w-full cursor-pointer text-lg font-bold text-md bg-caribbean_600 hover:bg-caribbean_700 transition duration-500`}>
            {children}
        </button>
    );
}

export default ButtonPrimary;
