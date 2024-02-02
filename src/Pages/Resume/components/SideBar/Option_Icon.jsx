import React from 'react';

const OptionIcon = ({icon, index, selectedOptionIndex}) => {
    return (
        <div className={`h-full w-full absolute cursor-pointer`}>
            <div className={`h-6 w-6 roundend-full ${icon} absolute bg-contain bg-no-repeat bg-center cursor-pointer z-10 ease-in transtion hover:shadow-sm hover:shadow-caribbean_500 top-4 ${ index === selectedOptionIndex ? "left-[40%] md:left-2 duration-500 cursor-pointer" : "left-[40%] md:left-[50%] duration-300"}`}>
            </div>
        </div>
    )
}

export default OptionIcon;
