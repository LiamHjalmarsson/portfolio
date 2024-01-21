import React from 'react';

const Description = ({description}) => {
    return (
        <div className='resume-heading-description'>
            <p>
                {description ? description : ""}
            </p>
        </div>
    );
}

export default Description;
