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
            icon: "bg-work"
        },
        {
            label: "Skills",
            icon: "bg-skills"
        },
        {
            label: "Projects",
            icon: "bg-projects"
        },
        {
            label: "Interests",
            icon: "bg-interests"
        },
    ];

    return sideBarOptions.map((option, index) => (
        <div className={`h-12 flex-1 flex items-center justify-center transition-all duration-500 relative`} onClick={() => handelOption(option.label, index)} key={index}>
            <div 
                className={`bg-green_500 rounded-e-full h-full text-opacity-0 flex items-center justify-center transition-transform duration-500`} 
                style={{ 
                    width: `${index === selectedOptionIndex ? "100%" : "0%"}`,
                    transition: `width 0.4s ease-in-out`,
                }}
            >
                <OptionIcon icon={option.icon} index={index} selectedOptionIndex={selectedOptionIndex}/>
                <OptionLabel label={option.label} index={index} selectedOptionIndex={selectedOptionIndex}/>
            </div>
        </div>
    ));
}

export default GetOptionsBar;
