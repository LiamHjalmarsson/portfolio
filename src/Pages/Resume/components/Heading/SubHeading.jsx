import React from 'react';

const SubHeading = ({subheading}) => {
    return (
        <div className='resume-subheading'>
            <p>
                {subheading ? subheading : ""}
            </p>
        </div>
    );
}

export default SubHeading;
