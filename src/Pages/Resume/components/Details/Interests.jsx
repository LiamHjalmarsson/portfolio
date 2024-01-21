import React from 'react';
import Heading from '../Heading/Heading';

const Interests = () => {
    return (
        <div className='flex glex-col gap-8'>
            <div className='w-full p-4 justify-center h-full bg-indigo-600 text-slate-200 absolute' key="interests">
                <Heading 
                    heading="Traning"
                    description="I belive in an active life style where working out and activeating my body"
                />
            </div>
        </div>
    );
}

export default Interests;
