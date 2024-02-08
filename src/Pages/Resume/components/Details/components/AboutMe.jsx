import React from 'react';
import Heading from '../../../../../Components/Heading/Heading';

const AboutMe = () => {
    return (
        <div className='w-full lg:w-[700px] h-auto'>
            <div className="flex flex-col gap-8 md:justify-start md:items-start justify-center items-center">
                <div className='md:w-fit w-full'>
                    <Heading heading="About Me" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-[16px] md:text-lg text-start w-full'>
                    <div className='text-center md:text-start'>
                        Name: Liam Hjalmarsson
                    </div>
                    <div className='text-center md:text-start'>
                        Age: 27
                    </div>
                    <div className='text-center md:text-start'>
                        Country: Sweden
                    </div>
                    <a href="tel:+46767675775" className='text-center md:text-start'>
                        Phone: +46767675775
                    </a>
                    <a href='mailto:liam.hjalmarssons@gmail.com' className='text-center md:text-start'>
                        Email: liam.hjalmarssons@gmail.com
                    </a>
                    <div className='text-center md:text-start'>
                        Langages: Swedish, English
                    </div>
                </div>
                <div className='w-full my-4 flex md:justify-start justify-center'>
                    <div className='w-1/2 border-2 rounded-full h-0 border-caribbean_500'></div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
