import React from 'react';

const DetailContainer = ({id, children}) => {
    return (
        <div className='w-full h-auto flex flex-col justify-center items-center py-4 absolute' key={id} >
            {children}
        </div>
    );
}

export default DetailContainer;
