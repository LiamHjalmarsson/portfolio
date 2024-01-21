import React from 'react';
import {useTypewriter} from "react-simple-typewriter";
import ButtonPrimary from '../../Components/Ui/ButtonPrimary';
import CvButton from '../../Components/Ui/CvButton';
import Image from "./Components/Image";

const  Profile = () => {
    let [typeEffect] = useTypewriter({
        words: ["Javascript", "React",  "CSS", "Tailwind", "Firebase", "Php", "Laravel"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 50,
    });

    return (
        <div className='flex items-center justify-center text-center w-full h-full'>
            <div className='w-full h-96 p-8'>
                <div className='flex-col padd:flex-row flex items-center gap-8 w-full justify-center h-full'>
                    <div className='w-full h-full flex flex-col items-center justify-around'>
                        <div>
                            <h1 className='padd:text-6xl text-3xl tracking-widest'>
                                <span className='text-indigo-600'>L</span>iam Hjalmarsson
                            </h1>
                        </div>
                        <div>
                            <h2 className="text-2xl">
                                Frontend Developer
                            </h2>
                        </div>
                        <div>
                            <h1 className='font-bold text-2xl h-8 my-2 text-indigo-600 tracking-wide'>
                                {typeEffect}
                            </h1>
                        </div>
                        <div className='w-full items-center flex gap-4 padd:flex-row flex-col max-w-[400px] padd:max-w-[600px]'>
                            <ButtonPrimary width="true">
                                Contact Me
                            </ButtonPrimary>
                            <CvButton />
                        </div>
                    </div>
                    <Image />
                </div>
            </div>
        </div>
    );  
}

export default Profile;
