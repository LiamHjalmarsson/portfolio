import React from 'react';
import OptionIcon from './Option_Icon';
import OptionLabel from './Option_Label';

const OptionItem = ({selectedOptionIndex, index, label, icon}) => {
    return (
        <>
            <div className={`bg-caribbean_500 rounded-full padd:rounded-e-full padd:rounded-none h-full text-opacity-0 items-center justify-center transition-all esae-in-out duration-500 ${index === selectedOptionIndex ? "w-full" : " h-0 padd:w-0 delay-100"}`}></div>
            <OptionIcon icon={icon} index={index} selectedOptionIndex={selectedOptionIndex}/>
            <div className='hidden padd:inline absolute'>
                <OptionLabel label={label} index={index} selectedOptionIndex={selectedOptionIndex}/>
            </div>
        </>
    );
}

export default OptionItem;
