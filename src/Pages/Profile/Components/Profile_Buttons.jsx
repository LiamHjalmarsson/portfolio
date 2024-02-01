import React from 'react';
import ButtonPrimary from '../../../Components/Ui/ButtonPrimary';
import ButtonSecondary from '../../../Components/Ui/ButtonSubmary';
import { ScrollLink } from 'react-scroll';

const ProfileButtons = () => {
    return (
        <div className='w-full items-center justify-center flex gap-6 lg:gap-8 md:flex-row flex-col max-w-[400px] md:max-w-[600px]'>
            <ButtonPrimary>
                Contact Me
            </ButtonPrimary>

            {/* <a href="liam.pdf" download="liam.pdf" className=' w-full'> */}
            <ButtonSecondary>
                Get Resume
            </ButtonSecondary>
            {/* </a> */}
        </div>
    );
}

export default ProfileButtons;
