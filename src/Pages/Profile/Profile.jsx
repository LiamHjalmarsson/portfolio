import React from 'react';
import ProfileHeader from './Components/Profile_Header';
import ProfileTypwriter from './Components/Profile_Typwriter';
import ProfileButtons from './Components/Profile_Buttons';
import ProfileImage from './Components/Profile_Image';

const Profile = () => {
    return (
        <div className='flex items-center justify-center text-center w-full h-full'>
            <div className='flex-col padd:flex-row flex items-center gap-4 w-full justify-center h-full'>
                <div className='w-full h-1/2 min-h-[500px] flex gap-4 flex-col items-center justify-center'>
                    <ProfileHeader />
                    <ProfileTypwriter />
                    <ProfileButtons />
                </div>
                <ProfileImage />
            </div>
        </div>
    );
}

export default Profile;
