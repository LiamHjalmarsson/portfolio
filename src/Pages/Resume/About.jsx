import React, { useState } from 'react';
import Details from './components/Details/Details';
import GetOptionsBar from './components/SideBar/GetOptions';
import Heading from '../../Components/Heading/Heading';
import ScrollDown from '../../Components/Scroll/ScrollDown';
import Container from './components/Details/components/components/Container';

const About = () => {
    let [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
    let [selectedOption, setSelectedOption] = useState("Skills");

    let handelOption = (option, index) => {
        setSelectedOptionIndex(index);
        setSelectedOption(option);
    };

    return (
        <div className='min-h-screen w-full flex justify-start items-start flex-col px-2 paddx:p-8 gap-16'>
            <Container>
                <div className="flex flex-col gap-4">
                    <Heading heading="About Me" />
                    <div className='grid grid-cols-2 gap-4 text-sm'>
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
                </div>

                <div className='w-full my-2 flex'>
                    <div className='w-1/2 border-2 rounded-full border-nobel_500'></div>
                </div>

                <div>
                    Recently gratiuatde junior Front-end Developer that has learned several skills during my period.
                </div>
            </Container>

            <div className='mb-16'></div>

            <div className='w-full'>
                <nav className='flex justify-between w-full gap-4 flex-wrap'>
                    <GetOptionsBar selectedOptionIndex={selectedOptionIndex} handelOption={handelOption} />
                </nav>
                <Details show={selectedOption} />
            </div>
        </div>
    );
}

export default About;  