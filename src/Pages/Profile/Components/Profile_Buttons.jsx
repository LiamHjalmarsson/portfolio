import React from 'react';
import ButtonPrimary from '../../../Components/Ui/ButtonPrimary';
import CvButton from '../../../Components/Ui/CvButton';

const ProfileButtons = () => {
    return (
        <div className='w-full items-center flex gap-4 padd:flex-row flex-col max-w-[400px] padd:max-w-[600px]'>
            <ButtonPrimary>
                Contact Me
            </ButtonPrimary>
            <CvButton />
        </div>
    );
}

export default ProfileButtons;
