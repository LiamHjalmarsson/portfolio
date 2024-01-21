import React from 'react';

const MainHeading = ({heading, fromDate, toDate}) => {
    return (
        <div className='heading-bullet'>
            <h2>
                {heading ? heading : ""}
            </h2>
            
            {fromDate && toDate ? (
                <div>
                    {fromDate + " - " + toDate}
                </div>
            ) : ""}
        </div>
    );
}

export default MainHeading;
