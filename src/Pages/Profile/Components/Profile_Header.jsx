import React from 'react';

const ProfileHeader = () => {
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='laptop:text-6xl padd:text-5xl text-3xl tracking-widest'>
                <span className='text-caribbean_400 laptop:text-8xl padd:text-7xl text-6xl'>L</span>iam <span className='text-caribbean_400 laptop:text-8xl padd:text-7xl text-6xl'>H</span>jalmarsson
            </h1>
            <h2 className="text-2xl">
                Frontend Developer
            </h2>
        </div>
    );
}

export default ProfileHeader;
