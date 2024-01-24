import React from 'react';
import ButtonPrimary from './ButtonPrimary';

const LinkButton = ({text, link}) => {
    return (
        <a href="https://github.com/LiamHjalmarsson" className="w-full padd:w-48">
            <ButtonPrimary>
                GitHub
            </ButtonPrimary>
        </a>
    );
}

export default LinkButton;
