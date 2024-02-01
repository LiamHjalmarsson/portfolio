import React from 'react';

const ProfileHeader = () => {
    return (
        <div className='flex flex-col gap-8'>
            <div className=''>
                <h1 className='lg:text-5xl md:text-4xl text-2xl tracking-widest'>
                    <span className='text-caribbean_400 lg:text-8xl md:text-7xl text-6xl'>L</span>iam 
                </h1>
                <h1 className='lg:text-5xl md:text-4xl text-2xl tracking-widest'>
                    <span className='text-caribbean_400 lg:text-8xl md:text-7xl text-6xl'>H</span>jalmarsson
                </h1>
            </div>
            <h2 className="text-2xl">
                Frontend Developer
            </h2>
        </div>
    );
}

export default ProfileHeader;
