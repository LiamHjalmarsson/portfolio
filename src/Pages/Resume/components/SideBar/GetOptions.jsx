import React from 'react';
import OptionIcon from './Option_Icon';
import OptionLabel from './Option_Label';

const GetOptionsBar = ({selectedOptionIndex, handelOption}) => {
    let sideBarOptions = [
        {
            label: "Education",
            icon: "bg-education"
        },
        {
            label: "Work",
            icon: "bg-work",
        },
        {
            label: "Skills",
            icon: "bg-skills",
        },
        {
            label: "Interests",
            icon: "bg-interests",
        },
    ];

    return sideBarOptions.map((option, index) => (
        <div className={`padd:w-full h-12 flex-1 flex items-center justify-center transition-transform duration-500 relative`} onClick={() => handelOption(option.label, index)} key={index}>
            <div className={`bg-caribbean_500 rounded-full padd:rounded-e-full padd:rounded-none h-full text-opacity-0 items-center justify-center transition-all esae-in-out duration-500 ${index === selectedOptionIndex ? "w-full" : " h-0 padd:w-0 delay-100"}`}></div>
            <OptionIcon icon={option.icon} index={index} selectedOptionIndex={selectedOptionIndex}/>
            <div className='hidden padd:inline absolute'>
                <OptionLabel label={option.label} index={index} selectedOptionIndex={selectedOptionIndex}/>
            </div>
        </div>
    ));
}

export default GetOptionsBar;
