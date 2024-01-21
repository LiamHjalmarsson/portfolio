import React from 'react';

const Icon = ({href, Icon}) => {
    return (
        <a href={href} className='text-3xl hover:text-amber-500 transform transition-transform hover:scale-110 hover:scale-120'>
            <Icon />
        </a>
    );
}

export default Icon;
