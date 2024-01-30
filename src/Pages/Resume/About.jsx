import React, { useState } from 'react';
import Details from './components/Details/Details';
import GetOptionsBar from './components/SideBar/GetOptions';

const About = () => {
    let [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
    let [selectedOption, setSelectedOption] = useState("Skills");

    let handelOption = (option, index) => {
        setSelectedOptionIndex(index);
        setSelectedOption(option);
    };

    return (
        <div className='min-h-screen w-full flex justify-start items-start flex-col p-2 padd:p-8'>
            {/* <div className='w-full h-auto flex justify-start items-start flex-col'> */}
                <nav className='flex justify-between w-full gap-4 flex-wrap'>
                    <GetOptionsBar selectedOptionIndex={selectedOptionIndex} handelOption={handelOption} />
                </nav>
                <Details show={selectedOption} />
            {/* </div> */}
        </div>
    );
}

export default About;  