import React from 'react';
import ButtonPrimary from '../../../Components/Ui/ButtonPrimary';
import ButtonSecondary from '../../../Components/Ui/ButtonSubmary';

const ProfileButtons = () => {
    return (
        <div className='w-full items-center flex gap-8 padd:flex-row flex-col max-w-[400px] padd:max-w-[600px]'>
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
