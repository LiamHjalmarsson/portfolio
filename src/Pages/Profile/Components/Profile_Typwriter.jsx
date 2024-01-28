import React from 'react';
import { useTypewriter } from "react-simple-typewriter";

const ProfileTypwriter = () => {
    let [typeEffect] = useTypewriter(
        {
            words: ["Javascript", "React", "CSS", "Tailwind", "Firebase", "Php", "Laravel"],
            loop: {},
            typeSpeed: 100,
            deleteSpeed: 50,
        }
    );
    
    return (
        <h1 className='font-bold padd:text-5xl text-4xl  flex justify-center items-center text-caribbean_400 tracking-wide'>
            {typeEffect}
        </h1>
    );
}

export default ProfileTypwriter;
