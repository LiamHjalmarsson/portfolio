import React from 'react';
import { Link } from 'react-scroll';

const Logo = () => {
    return (
        <Link to="home" smooth="true" offset={0} duration={500} className='text-3xl relative z-40 tracking-widest font-bold space-x-5 text-green cursor-pointer hover:text-caribbean_100'>
            LH
        </Link>
    )
}

export default Logo;
