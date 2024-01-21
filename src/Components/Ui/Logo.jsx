import React from 'react';
import { Link } from 'react-scroll';

const Logo = () => {
    return (
        <Link to="home" smooth="true" offset={0} duration={500} className='text-2xl tracking-widest font-bold space-x-5 text-green'>
            Liam
        </Link>
    )
}

export default Logo;
