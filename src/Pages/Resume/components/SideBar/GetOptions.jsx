import React from 'react';
import OptionIcon from './Option_Icon';
import OptionLabel from './Option_Label';
import OptionItem from './OptionItem';

const GetOptionsBar = ({selectedOptionIndex, handelOption}) => {
    let sideBarOptions = [
        {
            label: "Skills",
            icon: "bg-skills",
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

    return sideBarOptions.map((option, index) => (
        <div className={`padd:w-full h-12 flex-1 flex items-center justify-center transition-transform duration-500 relative`} onClick={() => handelOption(option.label, index)} key={index}>
            <OptionItem icon={option.icon} label={option.label} index={index} selectedOptionIndex={selectedOptionIndex} handelOption={handelOption}/>
        </div>
    ));
}

export default GetOptionsBar;
