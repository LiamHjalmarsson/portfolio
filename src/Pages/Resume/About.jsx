import React, { useState } from 'react';
import Details from './components/Details/Details';
import GetOptionsBar from './components/SideBar/GetOptions';
import Section from '../../Components/Layouts/Section/Section';
import AboutMe from './components/Details/components/AboutMe';

const About = () => {
    let [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
    let [selectedOption, setSelectedOption] = useState("Skills");

    let handelOption = (option, index) => {
        if (selectedOption !== option) {
            setSelectedOptionIndex(index);
            setSelectedOption(option);
        } else {
            setSelectedOptionIndex(null);
            setSelectedOption("");
        }
    };

    return (
        <Section id="about">
            <div className='flex flex-col gap-16 justify-start items-start w-full min-h-[100vh] lg:min-h-[80vh]'>

                <AboutMe/>

                <div className='flex justify-center items-center w-full'>
                    <div className='flex gap-8 flex-wrap justify-center lg:justify-between w-full'>
                        <GetOptionsBar selectedOptionIndex={selectedOptionIndex} handelOption={handelOption} option={selectedOption} />
                    </div>
                </div>
                
                <Details show={selectedOption} />
            </div>
        </Section>
    );
}

export default About;  