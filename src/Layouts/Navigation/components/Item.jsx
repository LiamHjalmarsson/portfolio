import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const NavigationItem = ({ address, title, close, open }) => {
    return (
        <li className={`padd:w-fit w-full cursor-pointer hover:text-green_500 hover:tracking-widest transition flex justify-center items-center`}>
            <ScrollLink
                to={address}
                spy={true}
                smooth="true"
                offset={0}
                onClick={close}
                duration={1000}
                className={`w-full text-center p-4 text-md text-bold`}
                activeClass="text-green_500"
            >
                {title.charAt(0).toUpperCase() + title.slice(1)}
            </ScrollLink>
        </li>
    );
}

export default NavigationItem;