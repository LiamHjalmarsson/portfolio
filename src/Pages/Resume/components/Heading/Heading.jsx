import React from 'react';
import MainHeading from './MainHeading';
import SubHeading from './SubHeading';
import Description from './Description';

const Heading = ({heading, fromDate, toDate, subheading, description, custom}) => {
    return (
        <div className={`resume-heading ${custom ? custom : ""}`}>
            <div className='resume-main-heading'>
                <MainHeading heading={heading} fromDate={fromDate} toDate={toDate} />
                <SubHeading subheading={subheading} />
                <Description description={description} />
            </div>
        </div>
    );
}

export default Heading;
