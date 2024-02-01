import React from 'react';
import ProfileHeader from './Components/Profile_Header';
import ProfileTypwriter from './Components/Profile_Typwriter';
import ProfileButtons from './Components/Profile_Buttons';
import ProfileImage from './Components/Profile_Image';
import Section from '../../Components/Layouts/Section/Section';

const Profile = () => {
    return (
        <Section id="home">
            <div className='flex justify-center items-center w-full h-5/6'>
                <div className='flex-col lg:flex-row flex items-center gap-8 lg:gap-4 w-full justify-center h-full min-h-[350px] md-h-[400px] md:max-h-[500px] lg:max-h-[400px] '>
                    <div className='w-full h-full flex flex-col items-center justify-between relative'>
                        <ProfileHeader />
                        <ProfileTypwriter />
                        <ProfileButtons />
                    </div>
                    <ProfileImage />
                </div>
            </div>
        </Section>
    );
}

export default Profile;
