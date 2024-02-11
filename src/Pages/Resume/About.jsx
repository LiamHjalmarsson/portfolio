import React, { useState } from 'react';
import Details from './components/Details/Details';
import Options from './components/Options/Options';
import Section from '../../Components/Layouts/Section/Section';
import AboutMe from './components/AboutMe';

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
                <AboutMe />
                <Options selectedOptionIndex={selectedOptionIndex} handelOption={handelOption} />
                <Details show={selectedOption} />
            </div>
        </Section>
    );
}

export default About;  