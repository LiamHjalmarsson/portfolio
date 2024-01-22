import React from 'react';

const GetOptionsBar = ({selectedBulletsIndex, handelOption}) => {
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
        <div
            className={`${index === selectedBulletsIndex ? `selected-bullet` : ""}h-16 flex-1 flex items-center justify-center transition-all duration-500 relative`}
            onClick={() => handelOption(option.label, index)}
            key={index}
        >
            <div className='w-full h-8'>
                <div 
                    className={`h-8 w-8 roundend-full ${option.icon} absolute bg-contain bg-no-repeat bg-center z-10`} 
                    style={{ left: index === selectedBulletsIndex ? '10px' : '50%', transition: "left 0.2s ease-in"}}
                ></div>
            </div>
            <div 
                className={`bg-green_500 rounded-e-full h-full text-opacity-0 flex w-24 items-center justify-center transition-transform duration-500 absolute`} 
                style={{ 
                    width: `${index === selectedBulletsIndex ? "100%" : "0%"}`,
                    transition: `width 0.4s ease-in-out`,
                }}
            >
                <div
                    style={{ 
                        opacity: `${index === selectedBulletsIndex ? "100%" : "0%"}`,
                        transition: `${index === selectedBulletsIndex ? "opacity 0.6s ease-in" : "opacity 0.2s ease-out"}`,
                    }}         
                >
                    {option.label}
                </div>
            </div>
        </div>
    ));
}

export default GetOptionsBar;
