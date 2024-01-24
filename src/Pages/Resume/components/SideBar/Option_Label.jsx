import React from 'react';

const OptionLabel = ({selectedOptionIndex, label, index}) => {
    return (
        <div style={{ opacity: `${index === selectedOptionIndex ? "100%" : "0%"}`, transition: `${index === selectedOptionIndex ? "opacity 0.6s ease-in" : "opacity 0.2s ease-out"}`,}}>
            {label}
        </div>
    );
}

export default OptionLabel;
