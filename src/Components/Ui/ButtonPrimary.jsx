import React from 'react';

const ButtonPrimary = ({children, button , onClick}) => {
    let handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button {...button} onClick={handleClick} className={`rounded-lg text-whiteish bolder border-2 border-caribbean_600 p-3 max-w-[200px] w-full cursor-pointer text-lg font-bold text-md bg-caribbean_600 hover:bg-caribbean_700 transition duration-500 hover:shadow-middle transtion  hover:shadow-caribbean_500`}>
            {children}
        </button>
    );
}

export default ButtonPrimary;
