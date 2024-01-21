import React from 'react';
import { Link } from 'react-scroll';

const NavigationItem = ({address, title}) => {
    return (
        <li className="padd:mx-8 cursor-pointer hover:text-green_500 hover:tracking-widest transition-all flex justify-center items-center duration-300">
            <Link to={address} smooth="true" offset={0} duration={500}>
                <p className="text-md text-bold">
                    {title}
                </p>
            </Link>
        </li>
    );
}

export default NavigationItem;