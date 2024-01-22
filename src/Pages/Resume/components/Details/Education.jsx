import React from 'react';

const Education = () => {
    return (
        <div className='absolute justify-center min-h-40 grid grid-cols-2 gap-8 w-full' key="education">
            <div className="bg-green_400 flex flex-col justify-center h-full p-8">
                <h2 className='text-2xl'>
                    Malmö University
                </h2>
                <div className='flex justify-between mt-2'>
                    <div>
                        <p>
                            Bachelor degree in Media technology 
                        </p>
                    </div>
                    <div>
                        <p>
                            2021 - 2024
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
