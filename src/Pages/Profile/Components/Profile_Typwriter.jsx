import React from 'react';
import { useTypewriter } from "react-simple-typewriter";

const ProfileTypwriter = () => {
    let [typeEffect] = useTypewriter(
        {
            words: ["Javascript", "React", "CSS", "Tailwind", "Firebase", "Php", "Laravel", "Figma", "Webflow", "Svelte"],
            loop: {},
            typeSpeed: 100,
            deleteSpeed: 50,
        }
    );
    
    return (
        <div className='w-full h-10 flex justify-center items-center'>
            <h1 className='font-bold lg:text-5xl md:text-4xl text-3xl text-caribbean_400 tracking-wide'>
                {typeEffect}
            </h1>
        </div>
    );
}

export default ProfileTypwriter;
