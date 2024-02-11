import React from 'react';
import Heading from '../../../../../Components/Ui/Heading';

const AboutMe = () => {
    return (
        <div className='w-full lg:w-[700px] h-auto'>
            <div className="flex flex-col gap-8 md:justify-start md:items-start justify-center items-center">
                <div className='md:w-fit w-full'>
                    <Heading heading="About Me" />
                </div>
                <div className=' md:text-start grid grid-cols-1 md:grid-cols-2 gap-8 text-[16px] md:text-lg text-center w-full'>
                    <p>
                        Name: Liam Hjalmarsson
                    </p>
                    <p>
                        Age: 27
                    </p>
                    <p>
                        Country: Sweden
                    </p>
                    <a href="tel:+46767675775">
                        Phone: +46767675775
                    </a>
                    <a href='mailto:liam.hjalmarssons@gmail.com'>
                        Email: liam.hjalmarssons@gmail.com
                    </a>
                    <p>
                        Langages: Swedish, English
                    </p>
                </div>
                <div className='w-full my-4 flex md:justify-start justify-center'>
                    <div className='w-1/2 border-2 rounded-full h-0 border-caribbean_500'></div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
