import React from 'react';

const ItemIcon = ({url, Icon}) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <Icon className='text-2xl cursor-pointer duration-500 transition hover:text-caribbean_300' />
        </a>
    );
}

export default ItemIcon;
