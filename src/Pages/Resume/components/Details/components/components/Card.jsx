import React from 'react';

const Card = ({children, custom}) => {
    return (
        <div className={`border-2 border-nobel_500 rounded-md flex-1 flex flex-col gap-4 p-4 ${custom ? custom : "justify-center"}`}>
            {children}
        </div>
    );
}

export default Card;
