import React, { useState } from 'react';
import Details from './components/Details/Details';
import GetOptionsBar from './components/SideBar/GetOptions';
import Heading from '../../Components/Heading/Heading';
import Section from '../../Components/Layouts/Section/Section';

const About = () => {
    let [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
    let [selectedOption, setSelectedOption] = useState("Skills");

    let handelOption = (option, index) => {
        setSelectedOptionIndex(index);
        setSelectedOption(option);
    };

    return (
        <Section id="about">
            <div className='flex flex-col gap-16 justify-start items-start w-full min-h-screen'>
                <div className='w-full lg:w-[700px] h-auto'>
                    <div className="flex flex-col gap-8 md:justify-start md:items-start justify-center items-center">
                        <div className='md:w-fit w-1/2'>
                            <Heading heading="About Me" />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-lg text-start w-full'>
                            <div className='text-center md:text-start'>
                                Name: Liam Hjalmarsson
                            </div>
                            <div className='text-center md:text-start'>
                                Age: 27
                            </div>
                            <div className='text-center md:text-start'>
                                Country: Sweden
                            </div>
                            <div className='text-center md:text-start'>
                                Phone: +46767675775
                            </div>
                            <div className='text-center md:text-start'>
                                Email: liam.hjalmarssons@gmail.com
                            </div>
                            <div className='text-center md:text-start'>
                                Langages: Swedish, English
                            </div>
                        </div>
                        <div className='w-full my-4 flex md:justify-start justify-center'>
                            <div className='w-1/2 border-2 rounded-full h-0 border-caribbean_500'></div>
                        </div>
                    </div>
                </div>

                    <nav className='flex justify-center items-center w-full'>
                        <div className='flex gap-8 flex-wrap justify-between w-full'>
                            <GetOptionsBar selectedOptionIndex={selectedOptionIndex} handelOption={handelOption} />
                        </div>
                    </nav>
                    <Details show={selectedOption} />
            </div>
        </Section>
    );
}

export default About;  