import React from 'react';
import {useTypewriter} from "react-simple-typewriter";
import ButtonPrimary from '../../Components/Ui/ButtonPrimary';
import CvButton from '../../Components/Ui/CvButton';

const  Profile = () => {
    let [typeEffect] = useTypewriter(
        {
            words: ["Javascript", "React",  "CSS", "Tailwind", "Firebase", "Php", "Laravel"],
            loop: {},
            typeSpeed: 100,
            deleteSpeed: 50,
        }
    );

    return (
        <div className='flex items-center justify-center text-center w-full h-full'>
            <div className='w-full h-full p-8'>
                <div className='flex-col padd:flex-row flex items-center gap-8 w-full justify-center h-full'>
                    <div className='w-full h-1/2 flex gap-8 flex-col items-center justify-center'>
                        <div>
                            <h1 className='padd:text-6xl text-3xl tracking-widest'>
                                <span className='text-green_500 text-8xl'>L</span>iam Hjalmarsson
                            </h1>
                        </div>
                        <div>
                            <h2 className="text-2xl">
                                Frontend Developer
                            </h2>
                        </div>
                        <div>
                            <h1 className='font-bold text-6xl h-20 my-2 text-green_500 tracking-wide'>
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
                    <div className='h-1/2 padd:flex hidden justify-end items-center w-full'>
                        <div className='flex items-center justify-center w-1/2 h-full min-w-[250px]'>
                            <div className="bg-cover bg-center opacity-90 bg-home shadow-middle shadow-green_500 hover:shadow-middle_hover transition-all duration-500 hover:shadow-green_500 w-full h-full rounded-e-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );  
}

export default Profile;
