import React from 'react';
import OptionIcon from './Option_Icon';
import OptionLabel from './Option_Label';

const OptionItem = ({selectedOptionIndex, index, label, icon}) => {
    return (
        <>
            <div className={`bg-caribbean_500 rounded-full md:rounded-e-full md:rounded-none h-full text-opacity-0 items-center justify-center transition-all esae-in-out duration-500 ${index === selectedOptionIndex ? "w-full cursor-pointer" : " h-0 w-0 delay-100"}`}></div>
                <OptionIcon icon={icon} index={index} selectedOptionIndex={selectedOptionIndex}/>
            <div className='inline absolute'>
                <OptionLabel label={label} index={index} selectedOptionIndex={selectedOptionIndex}/>
            </div>
        </>
    );
}

export default OptionItem;
