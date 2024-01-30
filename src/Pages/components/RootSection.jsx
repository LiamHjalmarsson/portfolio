import React from 'react';
import ScrollDown from '../../Components/Scroll/ScrollDown';

const RootSection = ({id, children, to}) => {
    return (
        <div className="min-h-[85vh] flex flex-col justify-center items-center relative" id={id}>
            {children}
            <ScrollDown address={to} />
        </div>
    );
}

export default RootSection;
