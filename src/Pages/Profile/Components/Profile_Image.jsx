import React from 'react';

const ProfileImage = () => {
    return (
        <div className='padd:flex hidden justify-center laptop:justify-end items-center h-full w-full'>
            <div className='flex items-center justify-center w-40 laptop:w-2/3 laptop:h-full h-40 laptop:min-w-[300px]'>
                <div className="bg-cover bg-center opacity-90 bg-home shadow-middle h-full shadow-amber-300 hover:shadow-middle_hover transition-all duration-500 hover:shadow-amber-400 w-full rounded-full laptop:rounded-md"></div>
            </div>
        </div>
    );
}

export default ProfileImage;
