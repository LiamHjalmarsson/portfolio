import React from 'react';

const DetailHeader = ({title}) => {
    return (
        <h1 className='text-3xl mb-8 tracking-wider'>
            {title.charAt(0).toUpperCase() + title.slice(1)}
        </h1>
    );
}

export default DetailHeader;
