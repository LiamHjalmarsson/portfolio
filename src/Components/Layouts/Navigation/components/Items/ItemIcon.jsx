import React from 'react';

const ItemIcon = ({url, Icon}) => {
    return (
        <a href={url}>
            <Icon className='text-2xl cursor-pointer duration-500 transition hover:text-caribbean_300' />
        </a>
    );
}

export default ItemIcon;
