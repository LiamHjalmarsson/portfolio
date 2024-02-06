import React from 'react';

const OptionIcon = ({ icon, index, selectedOptionIndex }) => {
    return (
        <div className={`h-6 w-6 roundend-full ${icon} absolute bg-contain bg-no-repeat bg-center cursor-pointer z-10 ease-in transtion top-4 ${index === selectedOptionIndex ? "left-10 md:left-5 duration-500 cursor-pointer" : "left-[45%] duration-300"}`}>
        </div>
    )
}

export default OptionIcon;
