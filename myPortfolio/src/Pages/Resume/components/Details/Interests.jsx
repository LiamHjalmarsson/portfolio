import React from 'react';
import Heading from '../Heading/Heading';

const Interests = () => {
    return (
        <div className='w-full p-4 justify-center h-full bg-indigo-600 text-slate-200 absolute' key="interests">
            <Heading 
                heading="Traning"
                description="I belive in an active life style where working out and activeating my body"
            />
            <Heading 
                custom="mt-4"
                heading="Video games"
                description="Playing games with friends to enjoy some time togheter"
            />
        </div>
    );
}

export default Interests;
