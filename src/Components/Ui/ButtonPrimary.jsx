import React from 'react';

const ButtonPrimary = ({children, button}) => {
    return (
        <button button={button} className={`rounded-lg text-whiteish bolder py-4 px-8 w-full cursor-pointer border-none text-lg font-bold text-md bg-caribbean_600 hover:bg-caribbean_700 transition duration-500`}>
            {children}
        </button>
    );
}

export default ButtonPrimary;
