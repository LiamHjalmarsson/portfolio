import React from 'react';
import OptionItem from './OptionItem';
import OptionIcon from './Option_Icon';
import OptionLabel from './Option_Label';

const GetOptionsBar = ({ selectedOptionIndex, handelOption }) => {
    let sideBarOptions = [
        {
            label: "Skills",
            icon: "bg-skills"
        },
        {
            label: "Education",
            icon: "bg-education"
        },
        {
            label: "Work",
            icon: "bg-work",
        },
        {
            label: "Interests",
            icon: "bg-interests",
        },
    ];

    return (
        <div className='flex gap-8 flex-wrap items-center justify-center w-full'>
            {sideBarOptions.map((option, index) => (
                <div className={`h-14 w flex items-center justify-center transition-transform duration-500`} onClick={() => handelOption(option.label, index)} key={index}>
                    <OptionIcon icon={option.icon} index={index} selectedOptionIndex={selectedOptionIndex} />
                    <OptionLabel label={option.label} index={index} selectedOptionIndex={selectedOptionIndex} />
                </div>
            ))}
        </div>
    );              
}

export default GetOptionsBar;
