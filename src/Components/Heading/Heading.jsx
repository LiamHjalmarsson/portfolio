import React from 'react';

const Heading = ({heading}) => {
    return (
        <div className='w-full'>
            <h1 className='text-5xl tracking-widest font-bold text-caribbean_500 uppercase'>
                {heading}
            </h1>
        </div>
    );
}

export default Heading;
