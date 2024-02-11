import React from 'react';

const OptionLabel = ({selectedOptionIndex, label, index}) => {
    return (
        <div className='hidden md:inline absolute w-10 cursor-pointer'>
            <div className={`transition font-bold tracking-widest text-lg cursor-pointer ${index === selectedOptionIndex ? "opacity-100 w-full duration-700 ease-in" : "w-0 opacity-0 duration-300 ease-out"}`}>
                {label}
            </div>
        </div>
    );
}

export default OptionLabel;
