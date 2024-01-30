import React from 'react';

const Card = ({children, id, show}) => {
    return (
        <div className={`bg-nobel_500 rounded-md w-full flex flex-col text-whiteish justify-center h-full gap-8 p-4 padd:p-8 shadow-md shadow-caribbean_900 `}>
            {children}
        </div>
    );
}

export default Card;
