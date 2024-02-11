import React from 'react';
import OptionIcon from './Option_Icon';
import OptionLabel from './Option_Label';

const OptionItem = ({selectedOptionIndex, index, label, icon}) => {
    return (
        <>
            <div className={`bg-caribbean_500 rounded-full md:rounded-e-full md:rounded-none h-full text-opacity-0 items-center justify-center transition-all esae-in-out duration-500 ${index === selectedOptionIndex ? "w-full cursor-pointer" : " h-0 w-0 delay-100"}`}></div>
                <div className={`h-6 w-6 roundend-full ${icon} absolute bg-contain bg-no-repeat bg-center cursor-pointer z-10 ease-in transtion top-4 ${index === selectedOptionIndex ? "left-10 md:left-5 duration-500 cursor-pointer" : "left-[45%] duration-300"}`}></div>
            <div className='inline absolute'>
                <div className={`transition font-bold tracking-widest lg:text-lg text-sm cursor-pointer ${index === selectedOptionIndex ? "opacity-100 duration-700 ease-in" : "opacity-0 duration-300 ease-out"}`}>
                    {label}
                </div>
            </div>
        </>
    );
}

export default OptionItem;
