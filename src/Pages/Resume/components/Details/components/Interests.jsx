import React from 'react';
import Heading from '../../Heading/Heading';

const Interests = () => {
    return (
        <div className='absolute justify-center min-h-40 grid grid-cols-2 gap-8 w-full' key="interests">
            <div className="bg-green_400 flex flex-col justify-center h-full p-8">
                <Heading 
                    heading="Traning"
                    description="I belive in an active life style where working out and activeating my body"
                />
            </div>
        </div>
    );
}

export default Interests;
