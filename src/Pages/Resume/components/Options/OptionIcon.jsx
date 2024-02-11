import React from 'react';

const OptionIcon = ({ icon, index, selectedOptionIndex }) => {
    return (
        <div className={`bg-caribbean_500 h-full text-opacity-0 items-center justify-center transtion esae-in-out duration-500 hover:shadow-middle hover:shadow-caribbean_300 cursor-pointer relative  ${index === selectedOptionIndex ? " max-md:shadow-caribbean_500 max-md:shadow-middle max-md:bg-caribbean_700 w-14 md:w-56 rounded-full md:rounded-e-full md:rounded-none" : " h-0 rounded-full w-14"}`}>
            <div className={` absolute h-6 w-6 roundend-full ${icon} absolute bg-contain bg-no-repeat bg-center cursor-pointer z-10 ease-in transtion top-4 ${index === selectedOptionIndex ? "left-[30%] md:left-3 lg:left-5 duration-500" : "left-[30%] duration-300"}`}></div>
        </div>
    )
}

export default OptionIcon;
