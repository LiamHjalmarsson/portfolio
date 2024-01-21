import React from 'react';
import Subheading from './Subheading';
import HeadingSeperator from './HeadingSeperator';

const Heading = ({title, subHeading}) => {
    return (
        <div className='heading-container flex flex-col items-center w-full mb-12'>
            <div className='screen-heading text-4xl text-slate-200 text-center'>
                <h2>
                    {title}
                </h2>
                {/* <Subheading subHeading={subHeading} /> */}
                <HeadingSeperator />
            </div>      
        </div>
    );
}

export default Heading;
