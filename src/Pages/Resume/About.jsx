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
            <div className='flex flex-col gap-6 lg:gap-8 justify-start items-start w-full min-h-screen'>
                <div className='w-full h-auto'>
                    <div className="flex flex-col gap-6 lg:gap-8 md:justify-start md:items-start justify-center items-center">
                        <div className='w-fit'>
                            <Heading heading="About Me" />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-sm text-start w-1/2 md:w-full'>
                            <div>
                                First Name: Liam
                            </div>
                            <div>
                                Last Name: Hjalmarsson
                            </div>
                            <div>
                                Age: 27
                            </div>
                            <div>
                                Country: Sweden
                            </div>
                            <div>
                                Phone: +46767675775
                            </div>
                            <div>
                                Email: liam.hjalmarssons@gmail.com
                            </div>
                            <div>
                                Langages: Swedish, English
                            </div>
                        </div>
                        <div className='w-full my-4 flex md:justify-start justify-center'>
                                <div className='w-1/2 border-2 rounded-full h-0 border-caribbean_500'></div>
                        </div>
                    </div>
                </div>

                    <nav className='flex justify-between w-full gap-6 lg:gap-8 flex-wrap'>
                        <GetOptionsBar selectedOptionIndex={selectedOptionIndex} handelOption={handelOption} />
                    </nav>
                    <Details show={selectedOption} />
            </div>
        </Section>
    );
}

export default About;  