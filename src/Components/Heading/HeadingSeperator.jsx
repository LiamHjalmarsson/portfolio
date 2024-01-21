import React from 'react';

const HeadingSeperator = () => {
    return (
        <div className='heading-seperator flex items-center relative w-80 mt-4'>
            <div className='seperator-line w-full h-1 bg-slate-600 flex items-center'>
                <div className='seperator-block h-3 w-full absolute flex justify-center'>
                    <div className='seperator w-16 rounded-full bg-amber-600'></div>
                </div>
            </div>
        </div>
    );
}

export default HeadingSeperator;
