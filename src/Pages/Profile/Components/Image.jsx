import React from 'react';

const Image = () => {
    return (
        <div className='h-full padd:flex hidden justify-end items-center w-full'>
            <div className='flex items-center justify-center w-1/2 h-full min-w-[250px]'>
                <div className="bg-cover bg-center bg-home shadow-md shadow-slate-900 w-full h-full rounded-e-full"></div>
            </div>
        </div>
    );
}

export default Image;
