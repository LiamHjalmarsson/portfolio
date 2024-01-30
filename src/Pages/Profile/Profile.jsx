import React from 'react';
import ProfileHeader from './Components/Profile_Header';
import ProfileTypwriter from './Components/Profile_Typwriter';
import ProfileButtons from './Components/Profile_Buttons';
import ProfileImage from './Components/Profile_Image';

const Profile = () => {
    return (
        <div className='flex items-center justify-center text-center w-full h-[70vh]'>
            <div className='w-full h-5/6'>
                <div className='flex-col laptop:flex-row flex items-center gap-4 w-full justify-center h-full min-h-[350px] max-h-[400px] padd:max-h-[500px] laptop:max-h-[400px] '>
                    <div className='w-full h-full flex flex-col items-center justify-between'>
                        <ProfileHeader />
                        <ProfileTypwriter />
                        <ProfileButtons />
                    </div>
                    <ProfileImage />
                </div>
            </div>
        </div>
    );
}

export default Profile;
