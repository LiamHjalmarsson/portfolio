import React from 'react';

const OptionLabel = ({selectedOptionIndex, label, index}) => {
    return (
        <div className={`transition font-bold tracking-widest ${index === selectedOptionIndex ? "opacity-100 duration-700 ease-in" : "opacity-0 duration-300 ease-out"}`}>
            {label}
        </div>
    );
}

export default OptionLabel;
