import React from 'react';
import { useTypewriter } from "react-simple-typewriter";

const ProfileTypwriter = () => {
    let [typeEffect] = useTypewriter(
        {
            words: ["Javascript", "React", "CSS", "Tailwind", "Firebase", "Php", "Laravel", "Figma", "Webflow"],
            loop: {},
            typeSpeed: 100,
            deleteSpeed: 50,
        }
    );
    
    return (
        <h1 className='font-bold lg:text-4xl md:text-3xl text-2xl h-16 md:h-20 flex justify-center items-center text-caribbean_400 tracking-wide'>
            {typeEffect}
        </h1>
    );
}

export default ProfileTypwriter;
