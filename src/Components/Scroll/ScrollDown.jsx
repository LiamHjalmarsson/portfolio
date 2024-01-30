import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const ScrollDown = ({address}) => {
    return (
        <div className='w-full flex flex-col justify-center items-center gap-2'>
            <h3 className='text-caribbean_500 text-sm tracking-widest'>
                Next section
            </h3>
            <ScrollLink
                to={address}
                smooth="true"
                offset={address === "about" ? -150 : 0}
                duration={1000}
            >
                <div className='flex flex-col gap-1 relative w-14 h-14 justify-center items-center rounded-full'>
                    <div className='w-full h-full absolute rounded-full shadow-sm shadow-caribbean_600 hover:shadow-md hover:shadow-caribbean_600 z-10'></div>
                    <div className='h-1.5 w-1.5 bg-caribbean_500 rounded-full transition duration-500 animate-bounce relative flex justify-center items-end'></div>
                    <div className='h-1.5 w-1.5 bg-caribbean_500 rounded-full transition delay-300 duration-500 animate-bounce relative flex justify-center items-end'></div>
                    <div className='h-1.5 w-1.5 bg-caribbean_500 rounded-full transition delay-300 duration-500 animate-bounce relative flex justify-center items-end'></div>
                    <div className={`h-1.5 w-1.5 bg-caribbean_500 rounded-full transition delay-300 duration-500 animate-bounce flex justify-center items-end absolute right-3.5 ${address !== "home" ? "bottom-5" : "top-6"}`}></div>
                    <div className={`h-1.5 w-1.5 bg-caribbean_500 rounded-full transition delay-300 duration-500 animate-bounce flex justify-center items-end absolute left-3.5 ${address !== "home" ? "bottom-5" : "top-6"}`}></div>
                </div>
            </ScrollLink>
        </div>
    );
}

export default ScrollDown;
