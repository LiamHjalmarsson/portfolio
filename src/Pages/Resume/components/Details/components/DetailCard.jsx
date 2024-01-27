import React from 'react';

const DetailCard = ({children}) => {
    return (
        <div className="bg-nobel_500 w-full padd:w-2/3 flex flex-col text-whiteish justify-center h-full gap-8 p-4 padd:p-8 shadow-md shadow-caribbean_900">
            {children}
        </div>
    );
}

export default DetailCard;
