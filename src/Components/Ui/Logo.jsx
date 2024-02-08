import React from 'react';
import { Link } from 'react-scroll';
import image from '../../Assets/LH.png'

const Logo = () => {
    return (
        <Link to="home" smooth="true" offset={0} duration={500} className='relative z-40 xt-green cursor-pointer'>
            <img src={image} className='w-1/2 h-1/2' />
        </Link>
    )
}

export default Logo;
