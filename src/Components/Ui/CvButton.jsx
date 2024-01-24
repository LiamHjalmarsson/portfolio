import React from 'react';
import ButtonSecondary from './ButtonSubmary';

const CvButton = () => {
    return (
        <ButtonSecondary>
            <a href="liam.pdf" download="liam.pdf">
                Get Resume
            </a>
        </ButtonSecondary>
    );
}

export default CvButton;
