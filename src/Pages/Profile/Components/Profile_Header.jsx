import React from 'react';

const ProfileHeader = () => {
    return (
        <div>
            <h1 className='padd:text-6xl text-3xl tracking-widest'>
                <span className='text-green_400 padd:text-8xl text-6xl'>L</span>iam <span className='text-green_400 padd:text-8xl text-6xl'>H</span>jalmarsson
            </h1>
            <h2 className="text-2xl mt-4">
                Frontend Developer
            </h2>
        </div>
    );
}

export default ProfileHeader;
