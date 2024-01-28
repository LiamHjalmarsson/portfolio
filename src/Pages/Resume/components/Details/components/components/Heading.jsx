import React from 'react';

const Heading = ({heading}) => {
    return (
        <h1 className='text-3xl mb-8 tracking-wider'>
            {heading.charAt(0).toUpperCase() + heading.slice(1)}
        </h1>
    );
}

export default Heading;
