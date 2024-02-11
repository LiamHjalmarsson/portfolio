import React from 'react';

const Heading = ({heading, custom}) => {
    return (
        <div className='w-full'>
            <h1 className={`${custom ? custom  : "text-4xl lg:text-5xl"} tracking-widest font-bold text-caribbean_500 uppercase`}>
                {heading}
            </h1>
        </div>
    );
}

export default Heading;
