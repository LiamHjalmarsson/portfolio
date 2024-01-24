import React from 'react';

const ProfileImage = () => {
    return (
        <div className='h-1/2 padd:flex hidden justify-end items-center w-full'>
            <div className='flex items-center justify-center h-full w-2/3 min-w-[300px]'>
                <div className="bg-cover bg-center opacity-90 bg-home shadow-middle shadow-green_400 hover:shadow-middle_hover transition-all duration-500 hover:shadow-green_500 w-full h-full rounded-md"></div>
            </div>
        </div>
    );
}

export default ProfileImage;
