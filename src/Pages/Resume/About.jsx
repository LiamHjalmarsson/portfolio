import React, { useState } from 'react';
import Details from './components/Details/Details';
import GetOptionsBar from './components/SideBar/GetOptions';

const About = () => {
    let [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
    let [selectedOption, setSelectedOption] = useState("Education");

    let handelOption = (option, index) => {
        setSelectedOptionIndex(index);
        setSelectedOption(option);
    };

    return (
        <div className='min-h-screen w-full flex flex-col justify-center items-center p-2 padd:p-8'>
            <nav className='flex justify-between w-full gap-4 flex-wrap'>
                <GetOptionsBar selectedOptionIndex={selectedOptionIndex} handelOption={handelOption} />
            </nav>
            <div className={`w-full my-8`}>
                <Details show={selectedOption} />
            </div>
        </div>
    );
}

export default About;  