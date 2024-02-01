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
                <div className=' flex-col-reverse lg:flex-row flex items-center gap-6 lg:gap-8 w-full justify-center h-full'> 
                    <div className='w-full h-full flex flex-col items-center gap-6 lg:gap-8 justify-between relative'>
                        <ProfileHeader />
                        <h2 className="lg:text-3xl md:text-2xl w-full">
                            Frontend Developer
                        </h2>
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
