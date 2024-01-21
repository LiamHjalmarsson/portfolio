import React from 'react';
import { Link } from 'react-scroll';

const Logo = () => {
    return (
        <Link to="home" smooth="true" offset={200} duration={500} className='text-2xl tracking-widest font-bold space-x-5'>
            Portfolio
        </Link>
    )
}

export default Logo;
