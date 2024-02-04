import React from 'react';
import ButtonPrimary from '../../../Components/Ui/ButtonPrimary';
import ButtonSecondary from '../../../Components/Ui/ButtonSubmary';
import { Link, ScrollLink } from 'react-scroll';

const ProfileButtons = () => {
    return (
        <div className='w-full items-center justify-center flex gap-8 md:flex-row flex-col max-w-[400px] md:max-w-[600px]'>
            <Link to="contact" smooth="true" offset={0} duration={500} className='max-w-[200px] w-full'>
                <ButtonPrimary>
                    Contact Me
                </ButtonPrimary>
            </Link>

            <a href="/assets/home/liam.pdf" download="liam.pdf" className='w-full max-w-[200px]'>
                <ButtonSecondary>
                    Get Resume
                </ButtonSecondary>
            </a>
        </div>
    );
}

export default ProfileButtons;
