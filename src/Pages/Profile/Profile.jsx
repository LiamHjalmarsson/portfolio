import React from 'react';
import ProfileHeader from './Components/Profile_Header';
import ProfileTypwriter from './Components/Profile_Typwriter';
import ProfileButtons from './Components/Profile_Buttons';
import ProfileImage from './Components/Profile_Image';

const Profile = () => {
    return (
        <div className='flex items-center justify-center text-center w-full h-[50vh]'>
            <div className='flex-col padd:flex-row flex items-center gap-4 w-full justify-center h-[80%] min-h-[400px] max-h-[500px]'>
                <div className='w-full h-full flex flex-col items-center justify-between'>
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
