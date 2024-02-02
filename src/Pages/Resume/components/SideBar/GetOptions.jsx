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
        <div className={`md:w-full h-14 flex-1 flex items-center justify-center transition-transform duration-500 relative max-w-[250px] min-w-[100px] `} onClick={() => handelOption(option.label, index)} key={index}>
            <OptionItem icon={option.icon} label={option.label} index={index} selectedOptionIndex={selectedOptionIndex} handelOption={handelOption}/>
        </div>
    ));
}

export default GetOptionsBar;
