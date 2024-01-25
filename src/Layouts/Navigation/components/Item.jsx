import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Item = ({ address, title, close }) => {
    return (
        <li className={`padd:w-fit w-full cursor-pointer hover:text-green_400 hover:tracking-widest transition flex justify-center items-center`}>
            <ScrollLink
                to={address}
                spy={true}
                smooth="true"
                offset={0}
                onClick={close}
                duration={1000}
                className={`w-full text-center p-4 text-md text-bold padd:text-xl text-2xl`}
                activeClass="text-green_500 tracking-widest"
            >
                {title.charAt(0).toUpperCase() + title.slice(1)}
            </ScrollLink>
        </li>
    );
}

export default Item;