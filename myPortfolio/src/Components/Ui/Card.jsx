import React from 'react';

const Card = ({children, custom}) => {
    return (
        <div className={`${custom ? custom : ""} flex w-full shadow-lg shadow-indigo-400 bg-indigo-200 text-slate-900`}>
            {children}
        </div>
    );
}

export default Card;
