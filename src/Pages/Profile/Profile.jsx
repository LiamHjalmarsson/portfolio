import React from 'react';
import ProfileHeader from './Components/Profile_Header';
import ProfileTypwriter from './Components/Profile_Typwriter';
import ProfileButtons from './Components/Profile_Buttons';
import ProfileImage from './Components/Profile_Image';
import ScrollDown from "../../Components/Scroll/ScrollDown"
import Heading from '../../Components/Heading/Heading';

const Profile = () => {
    return (
        <div className='flex items-end laptop:items-center justify-center flex-col text-center w-full h-[70vh] padd:h-screen'>
            <div className=' flex justify-center items-center w-full h-5/6'>
                <div className='flex-col laptop:flex-row flex items-center gap-8 laptop:gap-4 w-full justify-center h-full min-h-[350px] max-h-[400px] padd:max-h-[500px] laptop:max-h-[400px] '>
                    <div className='w-full h-full flex flex-col items-center justify-between relative'>
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
