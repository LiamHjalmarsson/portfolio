import React from 'react';
import ButtonSecondary from './ButtonSubmary';

const CvButton = () => {
    return (
        <ButtonSecondary>
            <a href="liam.pdf" download="liam.pdf" className='text-caribbean_500 hover:text-caribbean_600'>
                Get Resume
            </a>
        </ButtonSecondary>
    );
}

export default CvButton;
