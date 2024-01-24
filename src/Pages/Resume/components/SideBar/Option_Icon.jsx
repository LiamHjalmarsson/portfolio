import React from 'react';

const OptionIcon = ({icon, index, selectedOptionIndex}) => {
    return <div className={`h-full w-6 roundend-full ${icon} absolute bg-contain bg-no-repeat bg-center z-10`} style={{ left: index === selectedOptionIndex ? '10px' : '50%', transition: "left 0.5s ease-in"}}></div>
}

export default OptionIcon;
