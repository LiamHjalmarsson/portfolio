import React from 'react';

const Work = () => {
    return (
        <div className='absolute justify-center min-h-40 grid grid-cols-2 gap-8 w-full' key="work">
            <div className="bg-green_400 flex flex-col justify-center h-full p-8">
                <h2 className='text-2xl'>
                    Sjöbergska Huset
                </h2>
                <div className='flex justify-between mt-2'>
                    <div>
                        <p>
                            Intership 
                        </p>
                    </div>
                    <div>
                        <p>
                            Sep 2023 - Dec 2023
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
