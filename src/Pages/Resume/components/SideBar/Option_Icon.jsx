import React from 'react';

const OptionIcon = ({icon, index, selectedOptionIndex}) => {
    return (
        <div className={`h-full w-6 roundend-full ${icon} absolute bg-contain bg-no-repeat bg-center z-10 ease-in transtion ${ index === selectedOptionIndex ? "left-50 padd:left-2 duration-500" : "padd:left-[50%] duration-300"}`}>
        </div>
    )
}

export default OptionIcon;
