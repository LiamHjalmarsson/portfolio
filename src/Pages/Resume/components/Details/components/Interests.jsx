import React from 'react';
import Detail from './components/Container';

const Interests = () => {
    return (
        <Detail id="interests">
            <div>
                <h2 className='text-2xl max-padd:text-center'>
                    Traning
                </h2>
                <div className='flex justify-between gap-4 flex-wrap mt-2'>
                    <div className='text-center max-padd:w-full'>
                        I belive in an active life style where working out and activeating my body
                    </div>
                </div>
            </div>
        </Detail>
    );
}

export default Interests;
