import React from 'react';

const Card = ({children, id, show}) => {
    return (
        <div className={`border-2 border-nobel_500 rounded-md w-full flex flex-col justify-center h-full gap-4 p-4 `}>
            {children}
        </div>
    );
}

export default Card;
